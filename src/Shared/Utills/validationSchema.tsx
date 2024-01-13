import * as Yup from 'yup'
// Creating schema
export const loginschema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });


// Creating schema
export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .min(8, "Password must be at least 8 characters"),
    confirm_password: Yup.string()
    .required("Confirm Password is a required field")
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});


export const bookSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  author: Yup.string().required('Author is required'),
  price: Yup.string().required('Price is required'),
});
  