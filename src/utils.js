import { URL } from 'url';

/**
 * Validates the parameters for a Google Maps Places URL.
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
 * Extracts the feature ID from a given URL.
 *
 * The function searches for a specific pattern in the URL that matches
 * `!1s<featureId>!` and extracts the `<featureId>` portion.
 * @param {string} url - The URL string from which to extract the feature ID.
 * @returns {string} The extracted feature ID.
 * @throws {Error} If the feature ID cannot be extracted from the URL.
 */
export function extractFeatureIdFromURL(url) {
  try {
    const match = url.match(/!1s([a-zA-Z0-9_:]+)!/);

    if (!match && !match[0]) {
      throw new Error('Failed to extract feature ID from URL')
    }
    const featureId = match[1];

    return featureId;
  } catch {
    throw new Error('Failed to extract feature ID from URL');
  }
}

/**
 * Fetches the Place IDs for a given query using the Google Places API.
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
 * @async
 * @function
 * @param {string} apiKey - The Google Maps API key to validate.
 * @throws {Error} Throws an error if the API key is invalid, missing, or if the validation request fails.
 * @returns {Promise<void>} Resolves if the API key is valid; otherwise, throws an error.
 */
export async function validateApiKey(apiKey) {
  if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
    throw new Error('This function requires a valid API key. Please provide a valid API key.');
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

/**
 * Parses and cleans raw JSON data into a structured format.
 * @param {string} jsonData - The raw JSON string to be parsed and cleaned.
 * @returns {object | null} The cleaned and structured data object, or `null` if the input data is invalid.
 * @property {string} id - The unique identifier of the location.
 * @property {string} name - The name of the location.
 * @property {object} address - The address details of the location.
 * @property {string} address.full - The full address as a string.
 * @property {Array} address.components - The components of the address.
 * @property {object} coordinates - The geographical coordinates of the location.
 * @property {number} coordinates.latitude - The latitude of the location.
 * @property {number} coordinates.longitude - The longitude of the location.
 * @property {string} pluscode - The Plus Code of the location.
 * @property {string} website - The website URL of the location.
 * @property {string} phone - The phone number of the location.
 * @property {Array} categories - The categories associated with the location.
 * @property {string} timezone - The timezone of the location.
 * @property {Array} media - An array of photo objects associated with the location.
 * @property {string} media[].id - The unique identifier of the photo.
 * @property {string} media[].type - The type of the photo (e.g., "Video").
 * @property {string | object} media[].url - The URL of the photo or video and cover image object.
 * @property {object} media[].resolution - The resolution of the photo.
 * @property {number} media[].resolution.width - The width of the photo in pixels.
 * @property {number} media[].resolution.height - The height of the photo in pixels.
 * @property {object} media[].coordinates - The geographical coordinates where the photo was taken.
 * @property {number} media[].coordinates.latitude - The latitude of the photo's location.
 * @property {number} media[].coordinates.longitude - The longitude of the photo's location.
 * @property {Array} relatedLocations - An array of related location objects.
 * @property {string} relatedLocations[].id - The unique identifier of the related location.
 * @property {string} relatedLocations[].name - The name of the related location.
 * @property {string|null} relatedLocations[].image - The image URL of the related location, or `null` if unavailable.
 * @property {object} relatedLocations[].coordinates - The geographical coordinates of the related location.
 * @property {number|null} relatedLocations[].coordinates.latitude - The latitude of the related location, or `null` if unavailable.
 * @property {number|null} relatedLocations[].coordinates.longitude - The longitude of the related location, or `null` if unavailable.
 * @property {Array|null} accessibility - An array of accessibility features, or `null` if unavailable.
 */
export function cleanData(jsonData) {
  const data = JSON.parse(jsonData)[6];

  if (!data) {
    return null;
  }

  const parsedData = {
    id: data[10],
    name: data[11],
    address: {
      full: data[18] ?? null,
      components: data[2] ?? null,
    },
    coordinates: {
      latitude: data[9]?.[2] ?? null,
      longitude: data[9]?.[3] ?? null,
    },
    pluscode: data[183]?.[2]?.[1]?.[0] ?? null,
    website: data[7]?.[1] ?? null,
    phone: data[178]?.[0]?.[0] ?? null,
    categories: data[13] ?? null,
    timezone: data[30] ?? null,
    media: [],
    relatedLocations: [],
    accessibility: data[100]?.[1]?.[0]?.[2]?.map(item => item[1]) ?? null,
  };

  // Process media
  if (data[51]) {
    parsedData.media = data[51][0].map(media => {
      return {
        id: media[0],
        type: media[20],
        url: media[20] === "Video"
          ? {
            cover: media[6]?.[0]?.split('=')[0] ?? null,
            video: media[26]?.[1]
              ?.filter(item => item?.[0] !== null)
              ?.sort((a, b) => (b?.[1] * b?.[2]) - (a?.[1] * a?.[2]))?.[0]?.[3] ?? null,
          }
          : media[6]?.[0]?.split('=')[0] ?? null,
        resolution: {
          width: media[6]?.[2]?.[0] ?? null,
          height: media[6]?.[2]?.[1] ?? null,
        },
        coordinates: {
          latitude: media[8]?.[0]?.[2] ?? null,
          longitude: media[8]?.[0]?.[1] ?? null,
        },
      };
    });
  }

  // Process related locations
  if (data[204] && data[204][0] && data[204][0][0][1]) {
    parsedData.relatedLocations = data[204][0].map(related => {
      return {
        id: related[1]?.[0]?.[0] ?? null,
        name: related[1]?.[1] ?? null,
        image: related[1]?.[2]?.[0]?.[0]?.split('=')[0] ?? null,
        coordinates: {
          latitude: related[1]?.[3]?.[0] ?? null,
          longitude: related[1]?.[3]?.[1] ?? null,
        },
      };
    });
  }

  return parsedData;
}