import * as yup from "yup";
export const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  mail: yup.string().email().required(),
  number: yup.string().min(10, "Phone Number is not valid").required(),
  password: yup.string().min(6).max(20).required(),
});
