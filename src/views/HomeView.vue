<script setup>

</script>

<template>

<div class="home">
<!-- movie poster Cards -->
  <div class="movie-cards">
    <div class="movie-card">
    <router-link to="/movie/tt0371746">
     <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" alt="movie-poster">
     <div class="movie-detail">
      <h3>Movie Name</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      </router-link>
    </div>
    <div class="movie-card">
    <router-link to="/movie/tt0371746">

      <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" alt="movie-poster">
     <div class="movie-detail">
      <h3>Movie 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </router-link>
    </div>
    <div class="movie-card">
    <router-link to="/movie/tt0371746">

      <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" alt="movie-poster">
      <div class="movie-detail">
      <h3>Movie 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </router-link>
    </div>
  </div>
<!-- movie poster Cards -->

<!-- Movie Search form -->
  <form>
  <div class="search">
    <input type="text" placeholder="Search for a movie" v-model="searchQuery">
    <button type="submit" @click.prevent="searchMovies">Search</button>
  </div>
  </form>
<!-- Movie Search form /-->

<!-- movie list -->
  <div class="movie-list">
  <div class="movie">
  <router-link to="/movie/tt0371746" class="movie-link">
  <div class="movie-poster">
  <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" alt="movie-poster">
  <div class="movie-type">Action, Drama</div>
  </div>
  <div class="movie-detail">
  <p class="movie-year">2008</p>
  <h3>Iron Man</h3>
  </div>
  </router-link>
  </div>
  </div>
<!-- movie list -->

</div>
</template>
<style lang="scss">
.home{
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
  // movie search form
  .search{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    input{
      width: 300px;
      height: 50px;
      border: none;
      border-radius: 10px 0 0 10px;
      padding: 0 1rem;
      font-size: 16px;
      font-weight: 400;
    }
    button{
      width: 100px;
      height: 50px;
      border: none;
      border-radius: 0 10px 10px 0;
      background: #34d399;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  // movie list
  .movie-list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .movie{
      width: 300px;
      height: 400px;
      background: #111827;
      border-radius: 10px;
      margin: 0 1rem;
      box-shadow: 0 0 6px rgba($color: #000, $alpha: 0.2);
      .movie-link{
        display: flex;
        flex-direction: column;
        height: 100%;

        .movie-poster{
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }
        .movie-type{
          position: absolute;
          padding: 8px 16px;
          background: #34d399;
          color: #fff;
          border-radius: 0 0 0 10px;       ;
          text-transform: capitalize;
          bottom: 16px;
          left: -5px;
        }
      }
      .movie-detail{
        background-color: #111827;
        padding: 16px 8px;
        flex: 1 1 100%;
        border-radius: 0 0 10px 10px;
        .movie-year{
          font-size: 16px;
          font-weight: 700;
          color: #aaa;
        }
        h3{
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin: 8px 0;
        }
      }     

      }
    }
  }

}



</style>
