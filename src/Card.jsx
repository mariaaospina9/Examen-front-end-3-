//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

const Card = ({ movieName, genre, releaseYear, rating }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
      <h2>Información ingresada:</h2>
      <p>Nombre de la película: {movieName}</p>
      <p>Género: {genre}</p>
      {releaseYear && <p>Año de lanzamiento: {releaseYear}</p>}
      {rating && <p>Calificación: {rating}</p>}
    </div>
  );
};

export default Card;


