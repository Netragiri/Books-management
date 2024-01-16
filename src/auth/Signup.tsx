
import { Formik } from "formik";
import { signupSchema } from "../Shared/Utills/validationSchema";
import "../assets/css/auth/login.css"
import { Link, useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../Shared/Helper";
import PasswordInput from "../Shared/Generic/passwordInput";
import { FormValues, UserProfile } from "../types/global";

function Signup() {
  const navigate = useNavigate()
  const handleFormSubmit = (values: FormValues) => {
    const existingProfilesString = localStorage.getItem("userProfiles");
    const existingProfiles: UserProfile[] = existingProfilesString
      ? JSON.parse(existingProfilesString)
      : [];

    const emailAlreadyExists = existingProfiles.some(
      (profile) => profile.email === values.email
    );

    if (emailAlreadyExists) {
      errorToast("User already exist");
    } else {
      const newProfile: UserProfile = { email: values.email, password: values.password };

      // Add the new profile to the existing array
      const updatedProfiles = [...existingProfiles, newProfile];

      localStorage.setItem("userProfiles", JSON.stringify(updatedProfiles));

      successToast("Account Created Successfully");
      navigate("/");
    }
  };
  return (
    <>
      <Formik
        validationSchema={signupSchema}
        initialValues={{ email: "", password: "", confirm_password: "" }}
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