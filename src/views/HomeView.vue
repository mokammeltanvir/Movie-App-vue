<script setup>
import { useMovieStore } from '../stores/movie'
const movieStore = useMovieStore();

</script>

<template>
    <div class="home">

       <!-- movie poster Cards -->
  <div class="movie-cards">
    <div class="movie-card" id="card-1">
    <router-link to="/">
     <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" alt="movie-poster">
     <div class="movie-detail">
      <h3>Iron Man</h3>
      <p>Year: 2008</p>
      <p>Genre: Animation, Action, Sci-Fi</p>
      </div>
      </router-link>
    </div>
    <div class="movie-card" id="card-2">
    <router-link to="/">

      <img src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg" alt="movie-poster">
     <div class="movie-detail">
      <h3>Iron Man III</h3>
      <p>Year: 2013</p>
      <p>Genre: Animation, Action, Sci-Fi</p>
      </div>
    </router-link>
    </div>
    <div class="movie-card" id="card-3">
    <router-link to="/">

      <img src="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg" alt="movie-poster">
      <div class="movie-detail">
      <h3>Iron Man II</h3>
      <p>Year: 2010</p>
      <p>Genre: Animation, Action, Sci-Fi</p>
      </div>
    </router-link>
    </div>
  </div>
<!-- movie poster Cards -->


        <form @submit.prevent="movieStore.SearchMovies" class="search-box">
            <div class="">
                <input type="text" placeholder="Search the movie" v-model="movieStore.search">
                <input type="submit" value="Search" class="btn">
            </div>
        </form>


        <div class="movies-list">
            <div class="movie" v-for="movie in movieStore.movies" :key="movie.imdbID">
                <router-link :to="{name: 'movie-detail', params: {id: movie.imdbID}}" class="movie-link">
                    <div class="movie-image">
                        <img :src="movie.Poster" alt="">

                        <div class="movie-type">{{ movie.Type }}</div>
                    </div>

                    <div class="movie-detail">
                        <p class="movie-year">{{ movie.Year }}</p>
                        <h3>{{ movie.Title }}</h3>
                    </div>
                
                </router-link>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.home {
 // movie poster cards css
  .movie-cards{
    display: block;
    width: 100%;
    margin: 2rem 0;
    text-align: center;
    .movie-card{
      display: inline-block;      
      width: 300px;
      height: 400px;
      background: #111827;
      border-radius: 10px;
      margin: 0 1rem;
      box-shadow: 0 0 6px rgba($color: #000, $alpha: 0.2);
      position: relative;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
      }
      .movie-detail{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: #000, $alpha: 0.8);
        z-index: 1;
      }
    
    }
  }

  .search-box {
    display: flex;
    justify-content: center;
    margin: 16px 0px;

    input {
      padding: 8px 16px;
      border: 1px solid #DDD;
      border-radius: 8px;
      outline: none;
      font-size: 16px;
      width: 300px;
    }

    .btn {
      background: #34d399;
      color: #fff;
      padding: 8px 16px;
      border: 1px solid #DDD;
      border-radius: 8px;
      outline: none;
      font-size: 16px;
      margin-left: 8px;
      cursor: pointer;
    }
  }

  // Movie List view 
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 16px 0px;

    .movie {
      width: 300px;
      margin: 8px;
      border: 1px solid #DDD;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 6px rgba($color: #000, $alpha: 0.2);

      .movie-link {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #000;

        .movie-image {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .movie-type {
            position: absolute;
            top: 8px;
            right: 0px;
            background: #34d399;
            box-shadow: 0 0 6px rgba($color: #000, $alpha: 0.2);
            color: #fff;
            padding: 8px 16px;
            border-radius: 0 0 0 10px; 
            font-size: 14px;
          }
        }

        .movie-detail {
          padding: 8px;

          .movie-year {
            font-size: 14px;
            color: #888;
          }

          h3 {
            font-size: 18px;
            margin: 8px 0px;
            color: #fff;
          }
        }
      }
    }
  }
  // create responsive movie poster cards for mobile view
  // view only id card-1 poster card at a time and other two card display none
  @media screen and (max-width: 768px) {
    .movie-cards{
      .movie-card{
        display: none;
      }
      #card-1{
        display: block;
      }
    }
    // responsive search bos for mobile
    .search-box {
      flex-direction: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 100%;
        margin-bottom: 8px;
      }
      .btn {
        width: 100%;
      }
    }
  
  }
  
  

 

  
}

</style>