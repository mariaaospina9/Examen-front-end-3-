import React, { useState } from 'react';
import Card from './Card';
import './Form.css'; 

const Form = () => {
  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState(''); 
  const [rating, setRating] = useState(''); 
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (movieName.trim().length < 3 || movieName.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (genre.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    // Correcta
    setError('');
    setSubmittedData({ movieName, genre, releaseYear, rating });
  };

  return (
    <div className="form-container">
      <h1>Elige una película</h1>
      <form onSubmit={handleSubmit} className="form-content">
        <label>
          Nombre de la película:
          <input
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            placeholder="Ingresa el nombre de la película"
          />
        </label>
        <label>
          Género:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Ingresa el género"
          />
        </label>
        {/* Campos adicionales */}
        <label>
          Año de lanzamiento:
          <input
            type="text"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            placeholder="Ej: 2022"
          />
        </label>
        <label>
          Calificación:
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Ej: 8.5"
          />
        </label>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      
      {error && <p className="error-message">{error}</p>}
      {submittedData && (
        <Card
          movieName={submittedData.movieName}
          genre={submittedData.genre}
          releaseYear={submittedData.releaseYear}
          rating={submittedData.rating}
        />
      )}
    </div>
  );
};

export default Form;


