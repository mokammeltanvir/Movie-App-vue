import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie',{
  state: () => ({
    search: ref(null),
    movies: ref([]),
    singleMovie: null,
    movieCount: ref(0)
  }),
  getters: {},
  actions: {
    async SearchMovies(){
      if(this.search !=""){
        const {data} =  await axios.get(`http://www.omdbapi.com/?apikey=da0bdb0f&s=${this.search}`);
        console.log(data);
        this.movies = data.Search;
        this.movieCount = data.totalResults;
      }
    },

    async GetMovie(id){
      if(this.search !=""){
        const {data} =  await axios.get(`http://www.omdbapi.com/?apikey=e2037866&i=${id}&plot=full`);
        console.log(data);
        this.singleMovie = data;
      }
    }
  }
}) 

