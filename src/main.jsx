import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { persistor, store } from "./App/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import {Toaster}from 'sonner'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}>
          </RouterProvider>
      </PersistGate>
      <Toaster position="top-right" richColors />
  </Provider>
);
