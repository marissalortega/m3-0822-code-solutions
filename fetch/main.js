fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log('data:', data));

fetch('https://pokeapi.co/api/v2/pokemon/eevee')
  .then(response => response.json())
  .then(data => console.log('pokemon:', data));
