import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom"

export default function Router() {
  const router: RouteObject[] = []

  const browserRouter = createBrowserRouter(router)

  return (
    <RouterProvider router={browserRouter}/>
  )
}