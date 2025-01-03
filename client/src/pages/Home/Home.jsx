import React, { useEffect, useState } from "react";
import { SideNavigation } from "../../layouts/SideNavigation/SideNavigation";
import { SideNavigationProvider } from "../../context/SideNavigationContext";
import { getNowPlayingMovies } from "../../services/movies.services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Header } from "../../layouts/Header/Header";
import { ScreenMovieSlide } from "../../components/ScreenMovieSlide/ScreenMovieSlide";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchMovies() {
    try {
      const data = await getNowPlayingMovies();
      const results = data.results;
      setMovies(results);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  // Display movie slides
  const movieSlidesMap = movies.map((m) => {
    return (
      <SwiperSlide key={m.id}>
        <ScreenMovieSlide info={m} />
      </SwiperSlide>
    );
  });

  return (
    <>
      <SideNavigationProvider>
        <Header />
        <SideNavigation />

        <main className=" bg-black min-h-screen">
          {!errorMessage ? (
            <Swiper grabCursor={true}>{movieSlidesMap}</Swiper>
          ) : (
            <div className=" h-screen w-full flex flex-col items-center justify-center gap-2">
              <p className=" text-3xl font-extrabold text-red-600">
                {errorMessage}
              </p>
              <p className=" text-white text-lg font-medium">Try again later</p>
            </div>
          )}
        </main>
      </SideNavigationProvider>
    </>
  );
};
