
import { Formik } from "formik";
import { signupSchema } from "../Shared/Utills/validationSchema";

function Signup() {
  return (
    <>
      <Formik
        validationSchema={signupSchema}
        initialValues={{ email: "", password: "", confirm_password: "" }}
        onSubmit={(values) => {
          const data = JSON.stringify({email:values.email,password:values.password})
          localStorage.setItem("userProfile",data)
        }}
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
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
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
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup;