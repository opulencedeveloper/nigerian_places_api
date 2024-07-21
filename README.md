# Nigerian Places API

## Overview

The Nigerian Places API provides information about Nigerian states and their details. It offers endpoints to fetch a list of all states and detailed information about specific states.

## Base URL

The base URL for the API is:

[https://api-nigerianplaces.onrender.com/api/v1](https://api-nigerianplaces.onrender.com/api/v1)

## Endpoints

### 1. Get All States

- **Endpoint:** `/states`
- **Method:** `GET`
- **Description:** Fetches a list of all states in Nigeria.

**Response:**

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

**Example Response:**

```json
{
  "message": "success",
  "description": "States fetched successfully!",
  "data": [
    {
      "id": "abuja",
      "name": "Abuja",
      "region": "Central",
      "capital": "Abuja",
      "slogan": "The Center of Unity"
    },
    {
      "id": "lagos",
      "name": "Lagos",
      "region": "South-West",
      "capital": "Lagos",
      "slogan": "Centre of Excellence"
    }
    // More states...
  ]
}
```

### 2. Get State Details

- **Endpoint:** `/states/{id}`
- **Method:** `GET`
- **Description:** Fetches detailed information about a specific state with its id.

**Path Parameters:**

- `id` (string): The unique identifier of the state.

**Response:**

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

**Example Response:**

```json
{
  "message": "success",
  "description": "State details fetched successfully!",
  "data": {
    "id": "lagos",
    "lgas": [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagary",
      "Epe",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Island",
      "Lagos Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Somolu",
      "Surulere"
    ],
    "neighbours": ["Ogun"],
    "towns": [
      "Agege",
      "Badagry",
      "Epe",
      "Ikorodu",
      "Ikoyi",
      "Mushin",
      "Surulere",
      "Victoria Island"
    ]
  }
}
```

**Error Responses:**

- **Status Code:** `404 Not Found`
- **Description:** The state with the given id was not found.

**Example Error Response:**

```json
{
  "message": "error",
  "description": "The state with the provided ID does not exist.",
  "data": null
}
```

## Contributing

Feel free to submit pull requests or open issues for any improvements or bug fixes.

## Contact

For any questions or feedback, please contact [victorkudos@gmail.com](mailto:victorkudos@gmail.com).
