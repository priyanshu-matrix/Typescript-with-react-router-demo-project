import {
    type RouteConfig,
    index,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    index("./routes/home.tsx"),
    route("/askai", "./routes/askai.tsx"),
  ] satisfies RouteConfig;
  