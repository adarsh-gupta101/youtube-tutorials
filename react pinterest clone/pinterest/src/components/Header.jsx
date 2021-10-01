import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CommentIcon from "@mui/icons-material/Comment";
import FaceIcon from "@mui/icons-material/Face";
import api from "../axios";
import { useState } from "react";
import Pin from "./pin";
function Header() {
  const [input, setInput] = useState("");
  const [Pins, setPins] = useState();

  function imageFunction(e) {
    e.preventDefault();
    api
      .get(
        `/search/collections?query=${input}&client_id=9v35xsxl9_LWZELs90KI-00-JkJoEQe80fDUcF01uu0`
      )
      .then((res) => {
        setPins(res.data.results);
        console.log(res.data.results);
      });
  }

  return (
    <>
      <div className='header'>
        <img
          src='https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png'
          alt='pinterst'
          id='icon'
        />
        <p>Home</p>
        <p>Today</p>
        <div className='header__input'>
          <SearchIcon />
          <form onSubmit={imageFunction}>
            <input
              type='text'
              placeholder='search'
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
        <NotificationsActiveIcon className='icon' />
        <CommentIcon className='icon' />
        <FaceIcon className='icon' />

        <div></div>
      </div>
      <Pin pins={Pins} />
    </>
  );
}

export default Header;
