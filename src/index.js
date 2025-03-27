import { fetchPlaceData } from "./place.js";
import { cleanData, extractFeatureIdFromURL, getFeatureID, getPlaceID, validateApiKey, validateParams } from "./utils.js";

export default class PlaceData {
  /**
   * Creates an instance of the class with the provided API key.
   * @class
   * @param {string} [apiKey] - The API key to authenticate requests.
   */
  constructor(apiKey = null) {
    this.apiKey = apiKey;
  }

  /**
   * Retrieves data from a given URL by extracting the feature ID and fetching the associated data.
   * @param {string} url - The URL from which to extract the feature ID.
   * @param {boolean} [clean] - Optional flag to indicate whether to clean the data.
   * @returns {Promise<any>} A promise that resolves to the data associated with the feature ID.
   * @throws {Error} Throws an error if the parameters are invalid or if the data retrieval fails.
   */
  async getFromUrl(url, clean = false) {
    validateParams(url, clean);
    const fid = extractFeatureIdFromURL(url);
    const data = await this.getFromFeatureId(fid, clean);

    return data;
  }

  /**
   * Retrieves place data for a given feature ID and optionally cleans the data.
   * @param {string} featureId - The unique identifier for the feature to fetch data for.
   * @param {boolean} [clean] - Whether to clean the fetched data before returning it.
   * @returns {Promise<object>} A promise that resolves to the place data. If `clean` is true, 
   * the data will be cleaned before being returned.
   */
  async getFromFeatureId(featureId, clean = false) {
    const data = await fetchPlaceData(featureId);

    if (!clean) {
      return data;
    } else {
      const cleaned = cleanData(JSON.stringify(data));

      return cleaned;
    }
  }

  /**
   * Retrieves data associated with a given Place ID.
   * @param {string} placeId - The Place ID to retrieve data for.
   * @param {boolean} [clean] - Whether to clean the data before returning it.
   * @returns {Promise<any>} A promise that resolves to the data associated with the Place ID.
   */
  async getFromPlaceId(placeId, clean = false) {
    const fid = await getFeatureID(placeId);

    return await this.getFromFeatureId(fid, clean);
  }

  /**
   * Retrieves place details based on a query string.
   * @param {string} query - The search query to find the place.
   * @param {boolean} [clean] - Whether to return a cleaned version of the place details.
   * @returns {Promise<object>} A promise that resolves to the place details.
   * @throws {Error} Throws an error if the API key is invalid or the query fails.
   */
  async getFromQuery(query, clean = false) {
    await validateApiKey(this.apiKey);
    const plid = (await getPlaceID(query, this.apiKey))[0];

    return await this.getFromPlaceId(plid, clean);
  }
}