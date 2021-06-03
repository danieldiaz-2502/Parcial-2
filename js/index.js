var database = firebase.database();
const moviesContainer = document.getElementById('moviesContainer');
const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');

//para mostrar las peliculas en el contenedor que esta en html
database.ref('Peliculas').on('value', function(data){
    moviesContainer.innerHTML = '';
    data.forEach(
        movie => {
            let valor = movie.val();
            let fila = new Movie(valor);
            moviesContainer.appendChild(fila.render());
        
    });
});