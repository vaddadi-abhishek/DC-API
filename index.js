const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Function to load JSON data from a file
function loadJsonData(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
    return []; // Return an empty array in case of an error
  }
}

// Load JSON data from files
const dceuData = loadJsonData('./DCEU.json'); // Correct relative path

// Helper function to filter movies based on query parameters
function filterMovies(data, query) {
  let filtered = data.filter(movie => {
    let match = true;

    if (query.id) {
      match = match && movie.id === parseInt(query.id);
    }
    if (query.title) {
      match = match && movie.title.toLowerCase().includes(query.title.toLowerCase());
    }

    if (query.release_date) {
      match = match && movie.release_date.includes(query.release_date);
    }

    if (query.characters) {
      match = match && movie.characters.some(char => char.toLowerCase().includes(query.characters.toLowerCase()));
    }

    if (query.cast) {
      match = match && movie.cast.some(actor => actor.toLowerCase().includes(query.cast.toLowerCase()));
    }

    return match;
  });

  if (query.sort === 'true') {
    filtered.sort((a, b) => a.chronology - b.chronology);
  }

  if (query.limit) {
    filtered = filtered.slice(0, parseInt(query.limit));
  }

  return filtered;
}

// API endpoints
app.get('/dceu', (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.json(dceuData);
  } else {
    const filteredMovies = filterMovies(dceuData, req.query);
    if (filteredMovies.length > 0) {
      res.json(filteredMovies);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  }
});

app.get('/', (req, res) => {
  res.json('Welcome to the DC API. Go to /dceu or /dcamu');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});