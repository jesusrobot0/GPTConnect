import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/router/router";

export function GPTConnect() {
  return <RouterProvider router={router} />;
}
