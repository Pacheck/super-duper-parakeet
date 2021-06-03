import React from "react";

import { Form } from "formik";

const FormikForm = ({ children, ...props }) => {
  return <Form {...props}>{children}</Form>;
};

export default FormikForm;
