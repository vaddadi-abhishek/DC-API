# DC Extended Universe (DCEU) API

This API provides access to information about movies in the DC Extended Universe (DCEU).

## Base URL

`https://dc-api-czde.onrender.com/dceu`

## Endpoints

### 1. Get All Movies or Filtered Movies

* **Method:** `GET`
* **URL:** `/dceu`
* **Description:** Retrieves a list of all DCEU movies or filters movies based on provided query parameters.
* **Query Parameters:**
    * `id` (integer): Filter movies by ID.
    * `title` (string): Filter movies by title (case-insensitive, partial match).
    * `release_date` (string): Filter movies by release date (exact match).
    * `characters` (string): Filter movies by character name (case-insensitive, partial match).
    * `cast` (string): Filter movies by cast member name (case-insensitive, partial match).
    * `limit` (integer): Limit the number of results returned.
    * `sort` (boolean): Sort the results in ascending order by chronology (set to `true`).
* **Example Requests:**
    * Get all movies: `http://localhost:3000/dceu`
    * Get movie with ID 3: `http://localhost:3000/dceu?id=3`
    * Get movies with "batman" in the title: `http://localhost:3000/dceu?title=batman`
    * Get movies released in 2017: `http://localhost:3000/dceu?release_date=2017`
    * Get movies with "superman" as a character: `http://localhost:3000/dceu?characters=superman`
    * Get movies with "henry cavill" in the cast: `http://localhost:3000/dceu?cast=henry%20cavill`
    * Get the first 5 movies: `http://localhost:3000/dceu?limit=5`
    * Get all movies sorted by chronology: `http://localhost:3000/dceu?sort=true`
    * Get the first 3 movies sorted by chronology: `http://localhost:3000/dceu?sort=true&limit=3`
* **Response:**
    * **Success (200 OK):** Returns a JSON array of movie objects.
    * **Movie Not Found (404 Not Found):** Returns a JSON object with a `message` property indicating that no movies matched the provided criteria.

### 2. Welcome Route

* **Method:** `GET`
* **URL:** `/`
* **Description:** A welcome message for the api.
* **Response:**
    * **Success (200 OK):** returns a string.

## Movie Object Structure

The movie objects returned by the API have the following structure:

```json
{
  "id": 14,
  "title": "Blue Beetle",
  "release_date": 2023,
  "duration": 127,
  "plot": "Jaime Reyes gains superpowers when an alien scarab bonds to his spine.",
  "cover_url": "[https://m.media-amazon.com/images/M/MV5BMWQ3ZDVhZDgtN2QwYy00YzFjLTk0YTUtYTZjYzYwN2FmZGY0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg](https://m.media-amazon.com/images/M/MV5BMWQ3ZDVhZDgtN2QwYy00YzFjLTk0YTUtYTZjYzYwN2FmZGY0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg)",
  "trailer_url": "[https://www.youtube.com/watch?v=vS3_72Gb-bI](https://www.youtube.com/watch?v=vS3_72Gb-bI)",
  "directed_by": "Angel Manuel Soto",
  "universe": "DCEU",
  "post_credit_scences": 1,
  "chronology": 14,
  "characters": ["Blue Beetle"],
  "cast": ["Xolo Maridueña"]
}
