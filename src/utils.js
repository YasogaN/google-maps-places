import { URL } from 'url';

/**
 * Validates the parameters for a Google Maps Places URL.
 *
 * @param {string} url - The URL to validate. It must be a Google Maps Places URL
 *                       with a host of "www.google.com" and a pathname starting with "/maps/place/".
 * @param {boolean} clean - A boolean indicating whether to clean the URL.
 *                          Must be a valid boolean value.
 * @throws {Error} Throws an error if the URL is invalid or if the `clean` parameter is not a boolean.
 */
export function validateParams(url, clean) {
  const parsedUrl = new URL(url);

  if (parsedUrl.host !== "www.google.com" || !parsedUrl.pathname.startsWith("/maps/place/")) {
    throw new Error(`Invalid URL: ${url}`);
  }
  if (typeof clean !== "boolean") {
    throw new Error(`Invalid value for clean value: ${clean}`);
  }
}

/**
 * Extracts a feature ID from a given string.
 *
 * The function searches for a specific pattern in the input string
 * that matches `!1s<featureId>!` and extracts the `featureId` part.
 *
 * @param {string} str - The input string containing the feature ID pattern.
 * @returns {string} The extracted feature ID.
 * @throws {Error} Throws an error if the feature ID cannot be extracted.
 */
export function extractFeatureId(str) {
  try {
    const match = str.match(/0x[a-fA-F0-9]{16}:0x[a-fA-F0-9]{16}/);
    if (!match && !match[0]) {
      throw new Error('Failed to extract feature ID')
    }
    const featureId = match[0];
    return featureId;
  } catch {
    throw new Error('Failed to extract feature ID');
  }
}

/**
 * Fetches the Place IDs for a given query using the Google Places API.
 *
 * @param {string} query - The search query for the place.
 * @param {string} apiKey - The API key for authenticating with the Google Places API.
 * @returns {Promise<string[]>} A promise that resolves to an array of Place IDs.
 * @throws {Error} If the fetch request fails or the response is invalid.
 */
export async function getPlaceID(query, apiKey) {
  try {
    const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "places.id",
        "X-Goog-API-Key": apiKey,
      },
      body: JSON.stringify({
        textQuery: query,
      }),
    })
    const data = await response.json();
    const placeIdArray = data.places?.map(place => place.id) || [];
    return placeIdArray;
  } catch (error) {
    throw new Error(`Failed to fetch place ID: ${error.message}`);
  }
}

/**
 * Retrieves the feature ID for a given Google Maps place ID.
 *
 * @param {string} place_id - The unique identifier for a place in Google Maps.
 * @returns {Promise<string>} A promise that resolves to the feature ID extracted from the response.
 * @throws {Error} If the fetch request fails or the feature ID cannot be extracted.
 */
export async function getFeatureID(place_id) {
  try {
    const response = await fetch(`https://google.com/maps/place/?q=place_id:${place_id}`);
    const data = await response.text();
    const featureId = extractFeatureId(data);
    return featureId;
  } catch (error) {
    throw new Error(`Failed to fetch feature ID: ${error.message}`);
  }
}



/**
 * Validates the provided Google Maps API key by making a test request to the Places API.
 *
 * @async
 * @function
 * @param {string} apiKey - The Google Maps API key to validate.
 * @throws {Error} Throws an error if the API key is invalid, missing, or if the validation request fails.
 * @returns {Promise<void>} Resolves if the API key is valid; otherwise, throws an error.
 */
export async function validateApiKey(apiKey) {
  if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
    throw new Error('Invalid API key provided.');
  }

  try {
    const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "places.id",
        "X-Goog-API-Key": apiKey,
      },
      body: JSON.stringify({
        textQuery: "The White House",
      }),
    })

    if (response.status === 400) {
      const err_msg = response.json().error.message;
      throw new Error(err_msg);
    }

    return;
  } catch (error) {
    throw new Error(`Failed to validate API key: ${error.message}`);
  }
}