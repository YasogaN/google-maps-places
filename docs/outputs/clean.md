# Structure of clean output

The output is the following object.

Check [Reporting Issues](#reporting-issues) if you find any issues with this document.

```json
"id": "<Feature ID of the place>",
"name": "<Name of the place>",
"address": {
  "full": "The full address of the place (Includes country)",
  "components": [
    "components",
    "of the",
    "full address"
  ]
},
"coordinates": {
  "latitude": 0,
  "longitude": 0
},
"pluscode": "Complete Long Plus Code",
"website": "Website of the page",
"phone": "Phone number of the page",
"categories": [
  "<Categories>",
],
"timezone": "<Timezone in TZDB format>",
"media": [
  {
    "id": "<Id for media>",
    "type": "<Type of media (Video or Photo)>",
    "url": {
      "cover": "<Link to Cover Image>",
      "video": "<Link to video with the highest resolution>"
    },
    "resolution": {
      "width": 0,
      "height": 0
    },
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  },
  {
    "id": "<Id for media>",
    "type": "<Type of media (Video or Photo)>",
    "url": "<Link to Image>",
    "resolution": {
      "width": 0,
      "height": 0
    },
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    }
  }
],
"relatedLocations": [
  {
    "id": "<Feature ID of the place>",
    "name": "<Name of the place>",
    "image": "<Link to image>",
    "coordinates": {
    "latitude": 0,
      "longitude": 0
    }
  },
],
"accessibility": [
  "<Accessibility Tags>"
]
```

### Notes:

1. The following data could result to `null`:

   - address
     - address.full
     - address.components
   - website
   - phone
   - categories
   - timezone
   - media
   - relatedLocations
     - relatedLocations.image
   - accessibility

2. Also `0` is used as placeholder to show that it is a number and not a string.

3. If `media.type` is `Photo`, `media.url` will directly link to the image. The object containing `media.url.cover` and `media.url.video` is only created if `media.type` is a `Video`.

# Reporting Issues

If you find any mismatches, irregularities, or other issues with the API documentation or functionality, please help us improve by creating an issue.

You can submit an issue by clicking the "New Issue" button in the repository's [Issues tab](https://github.com/YasogaN/google-maps-review-scraper/issues).

When submitting an issue, kindly include the following details:

- A clear description of the problem.
- The url of the google maps place.
- Steps to reproduce the issue.
- Any relevant logs, error messages, or screenshots (if applicable).
