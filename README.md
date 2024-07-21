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

````json
{
    "message": "success",
    "description": "States fetched successfully!",
    "data": [
  {
    "id": "abj",
    "name": "Abuja",
    "region": "Central",
    "capital": "Abuja",
    "slogan": "The Center of Unity"
  },
  {
    "id": "lag",
    "name": "Lagos",
    "region": "South-West",
    "capital": "Lagos",
    "slogan": "Centre of Excellence"
  }
  // More states...
] }
``
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
    "description": "States fecthed successfully!",
    "data": {
        "id": "lagos",
        "name": "Lagos",
        "region": "South West",
        "capital": "Ikeja",
        "slogan": "Centre Of Excellence"
    }
}

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

## Setup and Usage

To set up and use this API:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/nigerian-places-api.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd nigerian-places
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Start Development Server:**

    ```bash
    npm run dev
    ```

5. **Test the Endpoints:**

   Use a tool like Postman to make requests to test the API endpoints.


   ## Contributing

Feel free to submit pull requests or open issues for any improvements or bug fixes.

## Contact

For any questions or feedback, please contact [victorkudos@gmail.com](mailto:victorkudos@gmail.com).

````
