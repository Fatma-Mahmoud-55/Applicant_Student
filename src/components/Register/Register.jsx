import * as React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig/instanse";
import style from "./Register.module.css";
import imgRegister from "../../img/img-login.png";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
function Register() {
  function showAlert(message, icon) {
    Swal.fire({
      title: message,
      icon: icon,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data));
    console.log(data.birth_date);
    if (data.password == data.re_password) {
      console.log("data");
      console.log(data);
      axiosInstance
        .post("user/reg/", {
          email: data.email,
          username: data.username.toLowerCase(),
          fullname: data.fullname.toLowerCase(),
          password: data.password,
          re_password: data.re_password,
          phone: data.phone,
        })
        .then((res) => {
          console.log("register response: ", res.data);

          if (res.data.success === "account_created_successfully") {
            showAlert("check your email", "success");
          }
        })
        .catch((err) => {
          console.log("Server respondend with error: ", err);
        });
    } else {
      document.getElementById("confirm").innerHTML =
        "Passwords does not match ";
    }

    return false;
  }

  return (
    <div className={`row  ${style.row} mt-5`}>
      <div className={`${style.registerImg}  col-lg-6`}>
        <div className="">
          <img className="w-100" src={imgRegister} alt="" />
        </div>
      </div>
      <div className="col-lg-6  row align-items-center mt-5">
        <div className={`form px-5 col-12 text-start`}>
          <h4 className=" text-capitalize fw-bold">Sign up to arrowd group</h4>
          <p className="text-muted">
            have an account?
            <Link
              className={`${style.signIn} text-decoration-none mx-2`}
              to="/Login"
            >
              sign in
            </Link>
          </p>

          <Form onSubmit={handleSubmit(onSubmit)} className="reg">
            <Form.Field>
              <label className="text-muted my-2">UserName</label>
              <input
                id="username"
                type="text"
                className="form-control w-75 "
                name="username"
                autoComplete="username"
                placeholder="username"
                {...register("username", { required: true })}
              />
            </Form.Field>
            {errors.username && (
              <p className="text-danger mt-2">Please the Username</p>
            )}

            <Form.Field>
              <label className="text-muted my-2">FullName</label>
              <input
                id="fullname"
                type="text"
                className="form-control w-75 "
                name="fullname"
                autoComplete="fullname"
                placeholder="fullname"
                {...register("fullname", { required: true, minLength: 8 })}
              />
            </Form.Field>
            {errors.fullname && (
              <p className="text-danger mt-2">Please the Fullname</p>
            )}

            <Form.Field>
              <label className="text-muted my-2">E-mail</label>
              <input
                id="email"
                type="email"
                className="form-control w-75"
                name="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </Form.Field>
            {errors.email && (
              <p className="text-danger mt-2">Please the Email</p>
            )}

            <Form.Field>
              <label className="text-muted my-2">Password</label>
              <input
                id="password"
                type="password"
                required
                className={`form-control mb-2 w-75 ${
                  errors.password ? "is-invalid" : ""
                }`}
                name="password"
                placeholder="6 Characters, 1 capital letter"
                {...register("password", {
                  // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
              />
            </Form.Field>
            {errors.password && (
              <p className="text-danger">Please the Password</p>
            )}

            <Form.Field>
              <label className="text-muted my-2">Confirm Password</label>

              <input
                id="password-confirm"
                type="password"
                className={`form-control  mb-2 w-75 ${
                  errors.re_password ? "is-invalid" : ""
                }`}
                name="re_password"
                {...register("re_password")}
                required
                placeholder="6 Characters, 1 capital letter"
              />
            </Form.Field>

            <p id="confirm" className="text-danger"></p>
            <Form.Field>
              <label className="text-muted my-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control mb-3 w-75"
                required
                placeholder="Enter Your Phone"
                {...register("phone")}
              />
            </Form.Field>

            <span className="invalid-feedback" role="alert"></span>

            <Button
              type="submit"
              className={`${style.btnRegister}  form-control btn w-75`}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
