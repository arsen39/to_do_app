import * as Yup from "yup";

const INPUT_SCHEMA = Yup.object({
  input: Yup.string()
  .matches(/^[\w ]{3,100}$/, "Task must content from 3 to 100 characters")
  .required(),
});

export default INPUT_SCHEMA;