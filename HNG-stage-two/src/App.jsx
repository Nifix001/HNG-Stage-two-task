import { useEffect, useState } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Homepage from "./Pages/Homepage"
import Movie from "./Pages/Movie"



function App() {

  const [film, setFilm] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=59c757f8cfc2f4a0b033a50e188ae82c&page=1&primary_release_date.gte=2023&sort_by=popularity.desc&vote_average.gte=7.88&year=2023');
      if(response.ok){
        const data = await response.json();
        const movies = data.results;
        setFilm(movies);
      }
    }
    fetchMovies();
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path="/i/movies/:id" element={<Movie />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
