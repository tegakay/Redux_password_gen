import "./App.css";
//import { useState } from "react";
import { PasswordDetails } from "./components/PasswordDetails";
import { PasswordField } from "./components/PasswordField";
import Header from "./components/Header";
import store from './store/store'
import { Provider } from "react-redux";

function App() {


  return (
    <Provider store={store}>

      <div className="flex flex-col gap-2 content-center justify-center align-center mx-auto w-72 text-center ">
      <Header/>
      <PasswordField  />
      <PasswordDetails />
    </div>

    </Provider>
  );
}

export default App;
