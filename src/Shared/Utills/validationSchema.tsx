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
  name: Yup.string().trim().required('Name is required'),
  author: Yup.string().trim().required('Author is required'),
  genre: Yup.string().trim().required('Genre is required'),
  year: Yup.string()
    .required('Year is required')
    .matches(/^[0-9]+$/, 'Year must contain only numbers')
    .max(4, 'Year must not exceed 4 digits'),
});
  