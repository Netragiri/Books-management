
import { Field, Formik } from "formik";
import "../assets/css/auth/login.css"
import { loginschema } from "../Shared/Utills/validationSchema";
import { Link, useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../Shared/helper";
import { FormValues } from "../types/global";
import PasswordInput from "../Shared/generic/passwordInput";

function Login() {
  const navigate = useNavigate()
  const userProfile = localStorage.getItem("userProfile") && JSON.parse(localStorage.getItem("userProfile") || "null")

  const handleFormSubmit = (values: FormValues) => {
    if (userProfile && userProfile.email === values.email && userProfile.password === values.password) {
      successToast('Login Successfully');
      localStorage.setItem("isLoggdIn", "true")
      setTimeout(() => {
        navigate('/dashboard');
      }, 500)
    } else {
      errorToast('Invalid credentials!');
    }
  };
  return (
    <>
      <Formik
        validationSchema={loginschema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id"
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <PasswordInput handleBlur={handleBlur} handleChange={handleChange} value={values.password} />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit" className="submit-btn">Login</button>
              </form>
              <div className="mt-3 flex">
                Don&apos;t have an account yet?{' '}
                <Link to="/sign-up" className="sign-up-btn ms-2 fw-bold">
                  Sign-up
                </Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Login;