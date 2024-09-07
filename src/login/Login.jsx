import React from "react";
import loginCSS from "../login/Login.module.css";
import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";
import Swal from "sweetalert2";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters can be entered")
    .min(3, "Value length must be min 3!")
    .max(10, "Value length must be max 10!")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters can be entered")
    .min(3, "Value length must be min 3!")
    .max(10, "Value length must be max 10!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  agreement: Yup.boolean().required("Required").oneOf([true], "  !"),
  phone: Yup.string()
    .required("Phone number required!")
    .matches(/^\+994(50|51|55|70|77)/, "Phone number code is invalid")
    .test(
      "len",
      "Phone number must be 13 digits!",
      (val) => val && val.length === 13
    ),
  password: Yup.string()
    .required("Required")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter!")
    .matches(/[A-Z]/, "Password must contain at least one capital letter!")
    .matches(/^[A-Za-z0-9]+$/, "Password must not contain symbols!")
    .matches(/\d/, "Password must contain at least one number!")
    .matches(/^\S*$/, "Password must not contain spaces!")
    .min(8, "Password must be at least 8 characters!"),
  cpassword: Yup.string()
    .required("Password repeat required!")
    .oneOf([Yup.ref("password"), null], "Passwords don't match!"),
  remember: Yup.boolean(),
});
function Login() {
  return (
    <>
      <div className={loginCSS.container}>
        <div className={loginCSS.div1}>
          <h2>Social media shared today,tomorrow or by location</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhIu7sFAGz-2YmFswmqEQKIajw0nR0ihrUA&s
          "
            alt="login"
          />
        </div>
        <div className={loginCSS.div2}>
          {" "}
          <h2>Create Account</h2>
          <span>For business, band or celebrity</span>
          <br />
          <br />
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              agreement: false,
              phone: "",
              password: "",
              cpassword: "",
              remember: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                window.location.href = "/";
              }, 1500);
              if (values.remember) {
                localStorage.setItem("logedUser", JSON.stringify(values));
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={loginCSS.inputs}>
                  {" "}
                  <div>
                    {" "}
                    <label htmlFor="" style={{ fontSize: "13px" }}>
                      First Name
                    </label>
                    <Field name="firstName" className={loginCSS.input} />
                    {errors.firstName && touched.firstName ? (
                      <i style={{ color: "red", fontSize: "13px" }}>
                        {errors.firstName}
                      </i>
                    ) : null}
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="" style={{ fontSize: "13px" }}>
                      Last Name
                    </label>
                    <Field name="lastName" className={loginCSS.input} />
                    {errors.lastName && touched.lastName ? (
                      <i style={{ color: "red", fontSize: "13px" }}>
                        {errors.lastName}
                      </i>
                    ) : null}
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="" style={{ fontSize: "13px" }}>
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className={loginCSS.input}
                    />
                    {errors.email && touched.email ? (
                      <i style={{ color: "red", fontSize: "13px" }}>
                        {errors.email}
                      </i>
                    ) : null}{" "}
                  </div>
                  <div>
                    <label htmlFor="" style={{ fontSize: "13px" }}>
                      Phone number
                    </label>
                    <Field name="phone" type="tel" className={loginCSS.input} />
                    {errors.phone && touched.phone ? (
                      <i style={{ color: "red", fontSize: "13px" }}>
                        {errors.phone}
                      </i>
                    ) : null}{" "}
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="" style={{ fontSize: "13px" }}>
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className={loginCSS.input}
                    />
                    {errors.password && touched.password ? (
                      <i style={{ color: "red", fontSize: "13px" }}>
                        {errors.password}
                      </i>
                    ) : null}{" "}
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="" style={{ fontSize: "13px" }}>
                      Confirm Password
                    </label>
                    <Field
                      name="cpassword"
                      type="password"
                      className={loginCSS.input}
                    />
                    {errors.cpassword && touched.cpassword ? (
                      <i style={{ color: "red", fontSize: "13px" }}>
                        {errors.cpassword}
                      </i>
                    ) : null}
                  </div>
                </div>
                <Field type="checkbox" name="remember" />
                <label htmlFor="">Remember me</label>
                <br />
                <Field type="checkbox" name="agreement" />
                <label htmlFor="">
                  I agree to all the <a href="">Terms</a> and{" "}
                  <a href="">Privacy policy</a>
                </label>
                {errors.agreement && touched.agreement ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: "13px",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    {errors.agreement}
                  </span>
                ) : null}{" "}
                <a href="/login/forgetpass" style={{ marginLeft: "150px" }}>
                  Forgot password?
                </a>
                <div className={loginCSS.buttons}>
                  <button type="submit" className={loginCSS.createAcc}>
                    Create Account
                  </button>
                  <button
                    className={loginCSS.signinGg}
                    type="button"
                    onClick={() => {
                      window.location.href = "https://www.google.com/";
                    }}
                  >
                    Sign in with Google
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
