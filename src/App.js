import PersonalInfo from "./Personal";
import Language from "./Language";
import { Formik } from "formik";
import * as yup from "yup";

import { FormDataProvider } from "./DataContext";
// import { useState } from "react";

export default function App() {
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters")
      .matches(/^[a-zA-Z\s]+$/, "This field must only contain letters"),
    sonOrHusbandName: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "This field must only contain letters")
      .min(3, "Name must be at least 3 characters")
      .required("Please Enter Father/Husband Name"),
    gender: yup.string().required("Gender must be selected"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Invalid email address"
      )
      .required("Email is required"),
    mobileNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile number must contain 10 digits")
      .required("Mobile number is required"),
    dob: yup.date().required("Date Of Birth is required"),
    maritalStatus: yup.string().required("Marital Status must be selected"),
    aadhar: yup
      .string()
      .matches(
        /^[2-9][0-9]{11}$/,
        "Aadhaar number must contain 12 digits and not start with 0 or 1"
      )
      .required("Aadhaar number is required"),
    bloodgroup: yup.string().required("Blood Group must be selected")
    // Language: yup.string().required("Language must be selected"),
    // Language2: yup.string().required("Language must be selected")
  });
  const initialValues = {
    fullname: "",
    sonOrHusbandName: "",
    gender: "",
    email: "",
    mobileNumber: "",
    dob: "",
    maritalStatus: "",
    aadhar: "",
    bloodgroup: "",
    Language: "",
    Language2: ""
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <FormDataProvider>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, formikProps) => handleSubmit(values, formikProps)}
      >
        {(formikProps) => (
          <>
            <PersonalInfo {...formikProps} />
            <Language
              {...formikProps}
              // checkboxValues={checkboxValues}
              // handleCheckboxChange={handleCheckboxChange}
              // checkboxValues2={checkboxValues2}
              // handleCheckboxChange2={handleCheckboxChange2}
            />

            <button type="submit" onClick={formikProps.handleSubmit}>
              Submit
            </button>
          </>
        )}
      </Formik>
    </FormDataProvider>
  );
}
