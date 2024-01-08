import * as yup from "yup";
export const loginSchema = yup.object().shape({
  number: yup.string().min(10, "Phone Number is not valid").required(),
  password: yup.string().min(6).max(20).required(),
});
