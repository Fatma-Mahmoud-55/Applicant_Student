import * as React from "react";
import img_login from "../../img/pass.png";
import { useState, setState, useEffect } from "react";
import axiosInstance from "../../axiosConfig/instanse";
import style from "./PasswordRecovery.module.css";

import Success from "../../img/student/success3.jpg";
import error from "../../img/student/error.jpg";
import Swal from "sweetalert2";
import { data } from "jquery";

function PasswordRecovery() {
  const [email, setEmail] = useState("");

  function showAlert(message, img) {
    Swal.fire({
      title: message,
      showConfirmButton: true,
      imageUrl: img,
      imageHeight: 150,
      imageAlt: "A tall image",
    });
  }

  async function send(e) {
    e.preventDefault();

    axiosInstance
      .post("user/forget/", {
        email: email,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          let message = "please check your mail";
          showAlert(message, Success);
        } else {
          showAlert(response.data.error, error);
        }
      });
  }

  return (
    <>
      <section
        className={`${style.section} d-flex justify-content-center align-items-center`}
      >
        <div className={` ${style.loginBox} w-75 d-flex align-items-center `}>
          <div className={`row   p-0 m-0  `}>
            <div
              className={` p-o m-0  col-lg-6 d-flex align-items-center justify-content-center `}
            >
              <div
                className={` px-2 m-0  d-flex align-items-center ${style.imgBox} `}
              >
                <img
                  width="100%"
                  className={`${style.login_img}`}
                  src={img_login}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 p-0  row align-items-center ">
              <div
                className={`p-5 mx-2 form col-12  rounded text-start  ${style.textBox}`}
              >
                <h4 className=" text-capitalize text-primary fw-bold">
                  Password recovery{" "}
                </h4>

                <form method="POST" onSubmit={send} className=" w-100 my-3">
                  <label className={`${style.text}   my-2  `}>Email</label>
                  <input
                    name="email"
                    className=" form-control mb-1"
                    type="email"
                    placeholder="bncoas kdswe@gmail.com"
                    required
                    autoFocus
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  />
                  <p className={`${style.p_text} mt-0 mb-3`}>
                    Enter your registered email
                  </p>

                  <button
                    type="submit"
                    className={`btn btn-primary form-control btn   mt-3 w-100`}
                  >
                    send Mail
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PasswordRecovery;
