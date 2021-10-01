import React, { useEffect, useState } from "react";
import api from "../axios";
function Pin({ pins }) {
  const [state, setstate] = useState([]);

  let pin = pins;
  console.log("pin,pin", pin);
  useEffect(() => {
    api
      .get(
        "/photos/random?count=100&client_id=9v35xsxl9_LWZELs90KI-00-JkJoEQe80fDUcF01uu0"
      )
      .then((res) => {
        console.log(res.data);
        setstate(res.data);
      })

      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className='app__pins'>
      {!pins
        ? state?.map((res) => {
            return (
              <div key={res.urls}>
                <img src={res.urls.regular} className='images' />
              </div>
            );
          })
        : pin?.map((images) => {
            return (
              <div key={images}>
                <img
                  src={images.preview_photos[0].urls.regular}
                  className='images'
                />
              </div>
            );
          })}
    </div>
  );
}

export default Pin;
