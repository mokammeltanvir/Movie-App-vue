<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '../stores/movie'
import { useRoute } from 'vue-router';

const movieStore = useMovieStore();
const route = useRoute();

onMounted(() => {
    movieStore.GetMovie(route.params.id);
})

</script>

<template>
<div class="movie-detail">
        <h3>{{ movieStore.singleMovie.Title }}</h3>
        <img :src="movieStore.singleMovie.Poster" alt="movie poster">
        <p>Year: {{ movieStore.singleMovie.Year }}</p>
        <p>Rated: {{ movieStore.singleMovie.Rated }}</p>
        <p>Released: {{ movieStore.singleMovie.Released }}</p>
        <p>Runtime: {{ movieStore.singleMovie.Runtime }}</p>
        <p>Genre: {{ movieStore.singleMovie.Genre }}</p>
        <p>Director: {{ movieStore.singleMovie.Director }}</p>
        <p>Writer: {{ movieStore.singleMovie.Writer }}</p>
        <p>Actors: {{ movieStore.singleMovie.Actors }}</p>
        <p>Plot: {{ movieStore.singleMovie.Plot }}</p>
        <p>Language: {{ movieStore.singleMovie.Language }}</p>
        <p>Country: {{ movieStore.singleMovie.Country }}</p> 
        
    </div>

</template>
<style lang="scss">
.movie-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background-color: #111827;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    margin-bottom: 20px;
    img {
        width: 100%;
        max-width: 300px;
        margin-bottom: 20px;
    }
    h3 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 10px;
    }
}

</style>
