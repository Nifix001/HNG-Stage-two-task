import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route>

        </Route>
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
