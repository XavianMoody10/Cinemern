import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";
import nowPlayingMoviesMockdata from "../../mocks/mockdata/nowPlayingMovies.mockdata";
import axios from "axios";

jest.mock("axios");

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

jest.mock("swiper/css"); // Mock swiper/css

test("Should display now playing movies", async () => {
  axios.get.mockResolvedValue({
    data: nowPlayingMoviesMockdata,
    status: 200,
  });

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  await screen.findAllByRole("movie-slider");
});

test("Should display Failed To Get Movies", async () => {
  axios.get.mockRejectedValue({
    response: {
      status: 404,
      data: "Failed To Get Movies",
    },
  });

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  await screen.findByText("Failed To Get Movies");
});

test("Should display Network Error message", async () => {
  axios.get.mockRejectedValue({
    message: "Network Error",
  });

  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  await screen.findByText("Network Error");
});

test("Should toggle side navigation", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const closeIcon = screen.getByRole("sidenavigation-close-icon");
  const hamburgerIcon = screen.getByLabelText("hamburger-icon");
  const sideNavigation = screen.getByRole("side-navigation");

  fireEvent.click(hamburgerIcon);

  await waitFor(() => {
    const style = window.getComputedStyle(sideNavigation);
    const transform = style.getPropertyValue("transform");

    expect(transform).toBe("none");
  });

  fireEvent.click(closeIcon);

  await waitFor(() => {
    const style = window.getComputedStyle(sideNavigation);
    const transform = style.getPropertyValue("transform");

    expect(transform).toBe("translateX(-100%)");
  });
});

test("Should toggle auth settings", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const authSettings = screen.getByRole("auth-settings");

  fireEvent.click(authSettings);

  await screen.findByRole("auth-settings-box");
});
