
import { Formik } from "formik";
import { signupSchema } from "../Shared/Utills/validationSchema";
import "../assets/css/auth/login.css"
import { Link, useNavigate } from "react-router-dom";
import { successToast } from "../Shared/helper";
import PasswordInput from "../Shared/generic/passwordInput";
import { FormValues } from "../types/global";

function Signup() {
  const navigate = useNavigate()
  const handleFormSubmit = (values: FormValues) => {
    const data = JSON.stringify({ email: values.email, password: values.password })
    localStorage.setItem("userProfile", data)
    successToast("Account Created Successfully")
    navigate("/")
  }
  return (
    <>
      <Formik
        validationSchema={signupSchema}
        initialValues={{ email: "", password: "", confirm_password: "" }}
        onSubmit={(values, { resetForm }) => handleFormSubmit(values)}
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
                <span>Sign Up</span>
                <input
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
                <input
                  type="password"
                  name="confirm_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                  placeholder="Re-enter password"
                  className="form-control"
                />
                <p className="error">
                  {errors.confirm_password && touched.confirm_password && errors.confirm_password}
                </p>
                <button type="submit" className="submit-btn">Sign Up</button>
                <div className="mt-3 flex">
                  Already have an account{' '}
                  <Link to="/" className="sign-up-btn ms-2 fw-bold">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup;