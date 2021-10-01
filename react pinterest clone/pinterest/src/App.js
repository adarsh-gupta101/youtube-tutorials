import axios from "axios";
import { useEffect, useState } from "react";
import api from "./axios";
import Header from "./components/Header";
import "./App.css";
import Pin from "./components/pin";

const acces = "9v35xsxl9_LWZELs90KI-00-JkJoEQe80fDUcF01uu0";
const secret = "GhIJx4Wyove_k8DRlGZYlkO7bM68le7ZCGaSaRJsI34";

function App() {
  return (
    <div className='App'>
      <Header />
      <Pin />
    </div>
  );
}

export default App;
