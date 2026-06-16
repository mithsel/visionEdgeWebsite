import App from "../App";
import Layout from "../Layout/Layout";
import ServiceViewPage from "../pages/ServiceViewPage";

export const mainRoute = [
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Layout,
      },
      {
        path: "services/:slug",
        Component: ServiceViewPage,
      },
    ],
  },
];