import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Activate.module.css";
import Swal from "sweetalert2";
import axiosInstance from "../../axiosConfig/instanse";
import { useEffect } from "react";
function Activate() {
  const { token } = useParams();
  const navigate = useNavigate();

  console.log(token);

  function showAlert(message, icon) {
    Swal.fire({
      title: message,
      icon: icon,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  async function check() {
    await axiosInstance
      .post(`user/chk_active`, {
        token: token,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          console.log("activate", res);
          sendActivate();
        } else {
          document.getElementById(
            "form"
          ).innerHTML = `<div className="text-center ">
        <h4 className="text-capitalize fw-bold">
         ${res.data.error}
        </h4>
        </div>`;
        }
      });
  }

  async function sendActivate() {
    await axiosInstance
      .post(`user/activate`, {
        token: token,
      })
      .then((res) => {
        if (res.data.success) {
          showAlert("account activated successfully", "success");
          navigate("/login", { replace: true });
        } else {
          navigate("/activate", { replace: true });
          showAlert(res.data.error, "error");
          console.log(document.getElementById("form"));
          document.getElementById(
            "form"
          ).innerHTML = `<div className="text-center ">
          <h4 className="text-capitalize fw-bold">
           ${res.data.error}
          </h4>
          </div>`;
        }
      });
  }

  function checkUser() {
    if (localStorage.getItem("token")) {
      navigate("/home");
    } else {
      check();
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <section className={`${style.login}`}>
        <div className="d-flex align-items-center">
          <div className="w-100">
            <div className={`${style.row} row  mt-5`}>
              <div className=" my-5 form ">
                <div className="forText">
                  <div className="form-contain">
                    <form id="form" className="my-3 "></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Activate;
