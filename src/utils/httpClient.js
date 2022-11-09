const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWQ1ZWEzYzhjY2Q1MDA3ZGEzYjNmMzYwYjRkZTE5MiIsInN1YiI6IjYzMDQzZTg2MjExMThmMDA5NDU1MDU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qs-ImCg_GZQg6L5-8aa7qazEf5RQyWbBQSoNHQsL9Fg",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
