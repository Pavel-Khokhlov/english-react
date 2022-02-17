import { configureStore } from "@reduxjs/toolkit";
import appReduser from "./appSlice";

export default configureStore({
  reducer: {
    app: appReduser,
  },
});
