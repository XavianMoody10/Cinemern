import React from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle as InfoIcon } from "react-icons/fa";
import { FaRegBookmark as UnsavedIcon } from "react-icons/fa";
import { FaRegBookmark as SavedIcon } from "react-icons/fa";

export const ScreenMovieSlide = ({ info }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${info.backdrop_path}`;

  return (
    <div
      className=" h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="movie-slider"
    >
      <div className=" absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70  flex items-end justify-start p-10">
        <div className=" max-w-[600px] space-y-6">
          <h2 className=" text-2xl font-extrabold text-white">{info.title}</h2>
          <p className=" hidden text-lg text-white min-[500px]:block">
            {info.overview}
          </p>

          <div className=" flex flex-col items-center gap-4 w-fit">
            <Link className=" font-bold bg-white py-2 px-8 rounded-md flex items-center gap-2 w-fit">
              More Info
              <InfoIcon size={22} />
            </Link>

            <div className=" flex gap-2">
              <p className=" text-white">Save to watchlist?</p>
              <SavedIcon color=" white" size={25}></SavedIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
