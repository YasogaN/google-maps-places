![YasogaN](https://socialify.git.ci/YasogaN/google-maps-places/image?description=1&descriptionEditable=A%20NPM%20module%20to%20fetch%20place%20details%20from%20Google%20Maps&font=Source%20Code%20Pro&name=1&owner=1&theme=Auto)

<div align="center">

![](https://img.shields.io/github/license/YasogaN/google-maps-places.svg?style=for-the-badge&color=blue)
![](https://img.shields.io/github/forks/YasogaN/google-maps-places.svg?style=for-the-badge)
![](https://img.shields.io/github/stars/YasogaN/google-maps-places.svg?style=for-the-badge)
![](https://img.shields.io/github/watchers/YasogaN/google-maps-places.svg?style=for-the-badge)
![](https://img.shields.io/github/issues/YasogaN/google-maps-places.svg?style=for-the-badge)
![](https://img.shields.io/github/languages/code-size/YasogaN/google-maps-places?style=for-the-badge)

</div>

---

## Installation

Install with npm

```bash
  npm install google-maps-places
```

Install with yarn

```bash
  yarn add google-maps-places
```

---

## Usage/Examples

```js
const PlaceData = require("google-maps-places");

// Initialize with your Google Maps API key
const placeData = new PlaceData("YOUR_API_KEY");

// Get place data from a Google Maps URL
const placeFromUrl = await placeData.getFromUrl(
  "https://www.google.com/maps/place/...",
  true
);

// Get place data from a feature ID
const placeFromFeatureId = await placeData.getFromFeatureId(
  "0x12345:0x67890",
  false
);

// Get place data from a Google Place ID
const placeFromPlaceId = await placeData.getFromPlaceId("ChIJ...ABCD", true);

// Get place data using a search query
const placeFromQuery = await placeData.getFromQuery("The White House", false);
```

### Arguments

#### Constructor

`apiKey` - `string`: Your Google Maps API key required for some operations.

> [!NOTE]
> The api key is used to call an endpoint which falls under the SKU: Places API Text Search Essentials (IDs Only) which has unlimited free usage (Source: [Google](https://developers.google.com/maps/billing-and-pricing/pricing#places-pricing), [Archived](https://ghostarchive.org/archive/sIZdT))

#### Methods

1. **getFromUrl(url, clean)**

   - `url` - `string`: A Google Maps place URL as explained [here](https://github.com/YasogaN/google-maps-places/blob/main/docs/urls/place.md)
   - `clean` - `boolean`: Whether to return a cleaned output. Defaults to `false`.

2. **getFromFeatureId(featureId, clean)**

   - `featureId` - `string`: The feature ID of a place (format: "0x...:0x...").
   - `clean` - `boolean`: Whether to return a cleaned output. Defaults to `false`.

3. **getFromPlaceId(placeId, clean)**

   - `placeId` - `string`: The Google Place ID.
   - `clean` - `boolean`: Whether to return a cleaned output. Defaults to `false`.

4. **getFromQuery(query, clean)**
   - `query` - `string`: Search query to find the place.
   - `clean` - `boolean`: Whether to return a cleaned output. Defaults to `false`.

### Returns

All methods return a `Promise<object>`: A promise that resolves to the place data in these [formats](https://github.com/YasogaN/google-maps-places/blob/main/docs/outputs/output.md) depending on the value of `clean`.

---

## Documentation of API's/URL's used

All documentation related to API's and URL's used in this project can be found in the [docs](https://github.com/YasogaN/google-maps-places/blob/main/docs/) folder divided into endpoints for API's and urls for URL's. Note that everything included here was based on my reasearch, so errors could be present. A pull request is always welcome (see [contributing](#contributing))

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/YasogaN/google-maps-places/blob/main/LICENSE) file for details.

### Summary of the MIT License

The **MIT License** is a permissive open-source license that allows users significant freedom with minimal conditions.

### Key Permissions:

1. **Freedom to Use**: You can use the software for any purpose, including commercial use.
2. **Freedom to Modify**: You are free to modify the software as needed.
3. **Freedom to Distribute**: You can distribute copies of the software, whether in its original or modified form.
4. **Freedom to Sell**: You can sublicense, distribute, and even sell the software.

### Key Conditions:

- **Attribution**: You must include the original copyright notice and the MIT license text in any copies or substantial portions of the software.

### No Warranty:

- The software is provided "as is," with no warranties or guarantees. The author is not liable for any damages arising from the use of the software.

For full details, refer to the license text.

---

## Contributing

I welcome contributions from the community! Please see our [CONTRIBUTING.md](https://github.com/YasogaN/google-maps-places/blob/main/CONTRIBUTING.md) for details on how to contribute to this project.

---

## Code of Conduct

Please note that this project is governed by a [Code of Conduct](https://github.com/YasogaN/google-maps-places/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Acknowledgements

Special thanks to [@marin-m](https://github.com/marin-m) for his outstanding work on the [pbtk](https://github.com/marin-m/pbtk) repository. His contributions and insights on protocol buffers were invaluable in my research and development process.

---

## Legal Disclaimer

This project is not affiliated with, endorsed by, or associated with Google LLC or any of its products and services. All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.

### Purpose of the Project

This project was created with the primary intent of serving as an educational tool and proof of concept. The objectives include:

- **Educational Use**: To provide a hands-on learning experience in developing software, using APIs, and understanding the integration of various technologies. The project is intended to help developers, students, and enthusiasts enhance their skills and knowledge.
- **Proof of Concept**: To demonstrate the feasibility and potential of certain technical approaches and solutions. This includes showcasing how different APIs and tools can be utilized together in a functional application.

### Non-Commercial Nature

This project is non-commercial and is not intended for any form of profit generation or business use. It is shared openly with the community to foster learning and collaboration.

### Intellectual Property and Fair Use

We acknowledge and respect the intellectual property rights of Google and other third parties. Any content used from external sources is credited appropriately, and no proprietary data or materials are misused.

### Contact and Legal Concerns

If you have any concerns or questions regarding the legality of this project, any specific legal queries or issues, please seek professional legal advice.
