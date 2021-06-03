class Movie{
    constructor(movie){
        this.movie = movie;
    }

    render = () => {

        let component = document.createElement('div');

        const database = firebase.database();

        //se crea un contenedor para la pelicula que muestre el nombre y la calificacion que lleva
        let movieCont = document.createElement('div');
        movieCont.className = 'contactoCont';
        movieCont.innerHTML = (

            '<p>'+'<h3>'+this.movie.name+'</h3>'+this.movie.nota

            );

            //botones para calificar
        let oneStarBtn = document.createElement('button');
        oneStarBtn.className = 'oneStarBtn';
        oneStarBtn.innerHTML = (' ⭐ ');

        let twoStarBtn = document.createElement('button');
        twoStarBtn.className = 'twoStarBtn';
        twoStarBtn.innerHTML = (' ⭐ ');

        let threeStarBtn = document.createElement('button');
        threeStarBtn.className = 'threeStarBtn';
        threeStarBtn.innerHTML = (' ⭐ ');

        let fourStarBtn = document.createElement('button');
        fourStarBtn.className = 'fourStarBtn';
        fourStarBtn.innerHTML = (' ⭐ ');

        let fiveStarBtn = document.createElement('button');
        fiveStarBtn.className = 'fiveStarBtn';
        fiveStarBtn.innerHTML = (' ⭐ ');

        component.appendChild(movieCont);
        component.appendChild(oneStarBtn);
        component.appendChild(twoStarBtn);
        component.appendChild(threeStarBtn);
        component.appendChild(fourStarBtn);
        component.appendChild(fiveStarBtn);

        
        oneStarBtn.addEventListener('click', () =>{

            //se hace la suma para agregar la nota que le dio el usuario y agregar un voto más a los que tiene esta película
            const calificacion = this.movie.calificacion + 1;
            const votos = this.movie.votos + 1;
            //se saca la nota con los datos según lo que introdujo el usuario
            const nota = calificacion/votos;

            database.ref('Peliculas/'+this.movie.name+'/nota').set(nota);
            database.ref('Peliculas/'+this.movie.name+'/votos').set(votos);
            database.ref('Peliculas/'+this.movie.name+'/calificacion').set(calificacion);
           
        });

        twoStarBtn.addEventListener('click', () =>{

            const calificacion = this.movie.calificacion + 2;
            const votos = this.movie.votos + 1;
            const nota = calificacion/votos;

            database.ref('Peliculas/'+this.movie.name+'/nota').set(nota);
            database.ref('Peliculas/'+this.movie.name+'/votos').set(votos);
            database.ref('Peliculas/'+this.movie.name+'/calificacion').set(calificacion);
           
        });

        threeStarBtn.addEventListener('click', () =>{

            const calificacion = this.movie.calificacion + 3;
            const votos = this.movie.votos + 1;
            const nota = calificacion/votos;

            database.ref('Peliculas/'+this.movie.name+'/nota').set(nota);
            database.ref('Peliculas/'+this.movie.name+'/votos').set(votos);
            database.ref('Peliculas/'+this.movie.name+'/calificacion').set(calificacion);
           
        });

        fourStarBtn.addEventListener('click', () =>{

            const calificacion = this.movie.calificacion + 4;
            const votos = this.movie.votos + 1;
            const nota = calificacion/votos;

            database.ref('Peliculas/'+this.movie.name+'/nota').set(nota);
            database.ref('Peliculas/'+this.movie.name+'/votos').set(votos);
            database.ref('Peliculas/'+this.movie.name+'/calificacion').set(calificacion);
           
        });

        fiveStarBtn.addEventListener('click', () =>{

            const calificacion = this.movie.calificacion + 5;
            const votos = this.movie.votos + 1;
            const nota = calificacion/votos;

            database.ref('Peliculas/'+this.movie.name+'/nota').set(nota);
            database.ref('Peliculas/'+this.movie.name+'/votos').set(votos);
            database.ref('Peliculas/'+this.movie.name+'/calificacion').set(calificacion);
           
        });


        return component;

    }
}