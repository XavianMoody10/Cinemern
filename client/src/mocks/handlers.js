import { http, HttpResponse } from "msw";
import nowPlayingMoviesMockdata from "./mockdata/nowPlayingMovies.mockdata";

export const handlers = [
  http.get("http://localhost:3001/movies/now_playing", () => {
    return HttpResponse.json(nowPlayingMoviesMockdata, { status: 200 });
    // return HttpResponse.json("Failed To Get Movies", { status: 404 });
    // return HttpResponse.error();
  }),
];
