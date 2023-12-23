import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/week?language=en-US',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo',
            },
          }
        );
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.homeDiv}>
      <h1 className={css.titleDay}>Trending today:</h1>
      <ul className={css.listDay}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;




// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/58PlR5pIdgmEbRzP9yRaSskcmrW.jpg",
//       "id": 848326,
//       "title": "Rebel Moon - Part One: A Child of Fire",
//       "original_language": "en",
//       "original_title": "Rebel Moon - Part One: A Child of Fire",
//       "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
//       "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         878,
//         28,
//         12
//       ],
//       "popularity": 336.694,
//       "release_date": "2023-12-15",
//       "video": false,
//       "vote_average": 6.379,
//       "vote_count": 161
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/2DMdC72NF3len5VFEUzPKMvEzlW.jpg",
//       "id": 930564,
//       "title": "Saltburn",
//       "original_language": "en",
//       "original_title": "Saltburn",
//       "overview": "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
//       "poster_path": "/zGTfMwG112BC66mpaveVxoWPOaB.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         18,
//         35,
//         53
//       ],
//       "popularity": 136.97,
//       "release_date": "2023-11-16",
//       "video": false,
//       "vote_average": 7.087,
//       "vote_count": 103
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/xuCHkaxkkm9pPum1SByC0dhvR2U.jpg",
//       "id": 91363,
//       "name": "What If...?",
//       "original_language": "en",
//       "original_name": "What If...?",
//       "overview": "Taking inspiration from the comic books of the same name, each episode of this animated anthology series questions, revisits and twists classic Marvel Cinematic moments.",
//       "poster_path": "/cR8fWQlbZxsw08Ky3bqKtLUYSFv.jpg",
//       "media_type": "tv",
//       "genre_ids": [
//         16,
//         10759,
//         10765
//       ],
//       "popularity": 492.603,
//       "first_air_date": "2021-08-11",
//       "vote_average": 8.185,
//       "vote_count": 3772,
//       "origin_country": [
//         "US"
//       ]
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/bckxSN9ueOgm0gJpVJmPQrecWul.jpg",
//       "id": 572802,
//       "title": "Aquaman and the Lost Kingdom",
//       "original_language": "en",
//       "original_title": "Aquaman and the Lost Kingdom",
//       "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
//       "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         28,
//         12,
//         14
//       ],
//       "popularity": 1891.141,
//       "release_date": "2023-12-20",
//       "video": false,
//       "vote_average": 6.5,
//       "vote_count": 102
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg",
//       "id": 695721,
//       "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
//       "original_language": "en",
//       "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
//       "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
//       "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         18,
//         878,
//         28
//       ],
//       "popularity": 1587.795,
//       "release_date": "2023-11-15",
//       "video": false,
//       "vote_average": 7.266,
//       "vote_count": 912
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/peVe0NQNdZMXwtTohnv8iwJQb2d.jpg",
//       "id": 135238,
//       "name": "Gyeongseong Creature",
//       "original_language": "ko",
//       "original_name": "경성크리처",
//       "overview": "1945, Gyeongseong South Korea. Jang Tae-Sang is a rich man. He is known as the most attractive man around Bukchon in Gyeongseong. He is also a reliable source for information in the area. His talents, including the ability to respond quickly to situations, keen insight and his sociability, have led him to his current position. When he comes into contact with Yoon Chae-Ok, he has to reevaluate his priorities as a person.",
//       "poster_path": "/1qxRfQq9BI9dZ1nOztEtTkqNgea.jpg",
//       "media_type": "tv",
//       "genre_ids": [
//         10765,
//         9648,
//         10759,
//         18
//       ],
//       "popularity": 99.921,
//       "first_air_date": "2023-12-22",
//       "vote_average": 8.143,
//       "vote_count": 14,
//       "origin_country": [
//         "KR"
//       ]
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
//       "id": 1071215,
//       "title": "Thanksgiving",
//       "original_language": "en",
//       "original_title": "Thanksgiving",
//       "overview": "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
//       "poster_path": "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         27,
//         53,
//         9648
//       ],
//       "popularity": 499.897,
//       "release_date": "2023-11-16",
//       "video": false,
//       "vote_average": 6.669,
//       "vote_count": 210
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/et0G74BxoBgNQEZBkUcVhsgeRFF.jpg",
//       "id": 523607,
//       "title": "Maestro",
//       "original_language": "en",
//       "original_title": "Maestro",
//       "overview": "A towering and fearless love story chronicling the lifelong relationship between Leonard Bernstein and Felicia Montealegre Cohn Bernstein. A love letter to life and art, Maestro at its core is an emotionally epic portrayal of family and love.",
//       "poster_path": "/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         18,
//         10749,
//         10402
//       ],
//       "popularity": 198.38,
//       "release_date": "2023-11-22",
//       "video": false,
//       "vote_average": 6.663,
//       "vote_count": 83
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/nI8uQAU8KFXYIIRz6jdL0pmC3eL.jpg",
//       "id": 103540,
//       "name": "Percy Jackson and the Olympians",
//       "original_language": "en",
//       "original_name": "Percy Jackson and the Olympians",
//       "overview": "Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Annabeth and Grover, Percy's journey will lead him closer to the answers he seeks: how to fit into a world where he feels out of place, and find out who he's destined to be.",
//       "poster_path": "/upmXGc1QovmPBU0mQJR2re6ruKd.jpg",
//       "media_type": "tv",
//       "genre_ids": [
//         10759,
//         10765,
//         18,
//         10751
//       ],
//       "popularity": 480.427,
//       "first_air_date": "2023-12-19",
//       "vote_average": 8.023,
//       "vote_count": 64,
//       "origin_country": [
//         "US"
//       ]
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/rmfIhftLXpHEZzkLSpWQMZhirMJ.jpg",
//       "id": 823482,
//       "title": "Dream Scenario",
//       "original_language": "en",
//       "original_title": "Dream Scenario",
//       "overview": "Hapless family man Paul Matthews finds his life turned upside down when millions of strangers suddenly start seeing him in their dreams. But when his nighttime appearances take a nightmarish turn, Paul is forced to navigate his newfound stardom.",
//       "poster_path": "/2RSMu2iMDCdMKmvBWWvcmE8vjMj.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         35,
//         14
//       ],
//       "popularity": 62.143,
//       "release_date": "2023-11-10",
//       "video": false,
//       "vote_average": 7.415,
//       "vote_count": 71
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
//       "id": 891699,
//       "title": "Silent Night",
//       "original_language": "en",
//       "original_title": "Silent Night",
//       "overview": "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
//       "poster_path": "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         28,
//         80,
//         53
//       ],
//       "popularity": 484.673,
//       "release_date": "2023-11-30",
//       "video": false,
//       "vote_average": 5.87,
//       "vote_count": 104
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
//       "id": 1029575,
//       "title": "The Family Plan",
//       "original_language": "en",
//       "original_title": "The Family Plan",
//       "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
//       "poster_path": "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         28,
//         35
//       ],
//       "popularity": 1235.279,
//       "release_date": "2023-12-14",
//       "video": false,
//       "vote_average": 7.521,
//       "vote_count": 285
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/wrhLyiY7ksW0fQCqNpa52qiOAH8.jpg",
//       "id": 108978,
//       "name": "Reacher",
//       "original_language": "en",
//       "original_name": "Reacher",
//       "overview": "Jack Reacher, a veteran military police investigator, has just recently entered civilian life. Reacher is a drifter, carrying no phone and the barest of essentials as he travels the country and explores the nation he once served.",
//       "poster_path": "/jFuH0md41x5mB4qj5344mSmtHrO.jpg",
//       "media_type": "tv",
//       "genre_ids": [
//         10759,
//         80,
//         18
//       ],
//       "popularity": 1722.467,
//       "first_air_date": "2022-02-03",
//       "vote_average": 8.047,
//       "vote_count": 994,
//       "origin_country": [
//         "US"
//       ]
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
//       "id": 872585,
//       "title": "Oppenheimer",
//       "original_language": "en",
//       "original_title": "Oppenheimer",
//       "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
//       "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         18,
//         36
//       ],
//       "popularity": 611.128,
//       "release_date": "2023-07-19",
//       "video": false,
//       "vote_average": 8.128,
//       "vote_count": 5542
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
//       "id": 787699,
//       "title": "Wonka",
//       "original_language": "en",
//       "original_title": "Wonka",
//       "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
//       "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         35,
//         10751,
//         14
//       ],
//       "popularity": 940.927,
//       "release_date": "2023-12-06",
//       "video": false,
//       "vote_average": 7.234,
//       "vote_count": 462
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/vTPgBrqEhIIqeZOCqrdNjyXzK4c.jpg",
//       "id": 1219926,
//       "title": "South Park (Not Suitable for Children)",
//       "original_language": "en",
//       "original_title": "South Park (Not Suitable for Children)",
//       "overview": "After it's discovered that a teacher at South Park Elementary has an OnlyFans page, Randy is compelled to take a closer look at the seedy underbelly of the world of online influencers.",
//       "poster_path": "/d4KZZ6TdoZzeHWMIwZ6bdCe8flq.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         35,
//         16,
//         10770
//       ],
//       "popularity": 3.842,
//       "release_date": "2023-12-20",
//       "video": false,
//       "vote_average": 8.231,
//       "vote_count": 13
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
//       "id": 520758,
//       "title": "Chicken Run: Dawn of the Nugget",
//       "original_language": "en",
//       "original_title": "Chicken Run: Dawn of the Nugget",
//       "overview": "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
//       "poster_path": "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         16,
//         12,
//         35,
//         10751
//       ],
//       "popularity": 839.322,
//       "release_date": "2023-12-08",
//       "video": false,
//       "vote_average": 7.639,
//       "vote_count": 208
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/t9i4Icf1LsGIgkpnokQaC4hzxLa.jpg",
//       "id": 202411,
//       "name": "Monarch: Legacy of Monsters",
//       "original_language": "en",
//       "original_name": "Monarch: Legacy of Monsters",
//       "overview": "After surviving Godzilla's attack on San Francisco, Cate is shaken yet again by a shocking secret. Amid monstrous threats, she embarks on a globetrotting adventure to learn the truth about her family—and the mysterious organization known as Monarch.",
//       "poster_path": "/uwrQHMnXD2DA1rvaMZk4pavZ3CY.jpg",
//       "media_type": "tv",
//       "genre_ids": [
//         10759,
//         18,
//         10765
//       ],
//       "popularity": 1055.688,
//       "first_air_date": "2023-11-16",
//       "vote_average": 8.2,
//       "vote_count": 336,
//       "origin_country": [
//         "US"
//       ]
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
//       "id": 346698,
//       "title": "Barbie",
//       "original_language": "en",
//       "original_title": "Barbie",
//       "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
//       "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         35,
//         12,
//         14
//       ],
//       "popularity": 399.4,
//       "release_date": "2023-07-19",
//       "video": false,
//       "vote_average": 7.174,
//       "vote_count": 6401
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/tLsc8SCFO0rMVgVyNm9XtfnyX84.jpg",
//       "id": 726209,
//       "title": "Leave the World Behind",
//       "original_language": "en",
//       "original_title": "Leave the World Behind",
//       "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
//       "poster_path": "/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg",
//       "media_type": "movie",
//       "genre_ids": [
//         18,
//         9648,
//         53,
//         878
//       ],
//       "popularity": 536.462,
//       "release_date": "2023-11-22",
//       "video": false,
//       "vote_average": 6.553,
//       "vote_count": 1007
//     }
//   ],
//   "total_pages": 1000,
//   "total_results": 20000
// }