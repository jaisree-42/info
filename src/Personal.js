import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import { Form, Col, Row, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DataContext from "./DataContext";

/*   validation schema */

function PersonalInfo({ handleChange, touched, handleBlur, errors }) {
  // state
  const {
    fullName,
    setFullName,
    sonOrHusbandName,
    setsonOrHusbandName,
    gender,
    setGender,
    email,
    setEmail,
    mobileNumber,
    dob,
    setDateOfBirth,
    setMobileNumber,
    maritalStatus,
    setMaritalStatus,
    aadharNumber,
    setAadharNumber,
    bloodGroup,
    setBloodGroup
  } = useContext(DataContext);

  return (
    <Container fluid>
      <h3 className="mt-2  infoTitle">1. PERSONAL INFORMATION</h3>
      <Row className="mb-2 ms-lg-3 d-flex justify-content-evenly">
        <Col
          className="mb-3"
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikUsername"
        >
          <Form.Label htmlFor="fullname" className="mb-0">
            Full Name <span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="fullname"
              type="text"
              name="fullname"
              as={Form.Control}
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                handleChange(e);
              }}
              isInvalid={touched.fullname && !!errors.fullname}
            />

            <ErrorMessage
              name="fullname"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>

        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikGuardianName"
        >
          <Form.Label htmlFor="guardinName" className="mb-0 text-break">
            Father/Husband Name <span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="guardinName"
              type="text"
              name="sonOrHusbandName"
              as={Form.Control}
              value={sonOrHusbandName}
              onChange={(e) => {
                setsonOrHusbandName(e.target.value);
                handleChange(e);
              }}
              isInvalid={touched.sonOrHusbandName && !!errors.sonOrHusbandName}
            />
            <ErrorMessage
              name="sonOrHusbandName"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>

        <Col
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className="mb-3  mb-lg-2"
          controlid="validationFormikGender"
        >
          <Form.Label htmlFor="gender" className="mb-0">
            Gender<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="gender"
              as={Form.Select}
              name="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value); // Update gender state
                handleChange(e); // Handle Formik's change event
              }}
              onBlur={handleBlur}
              isInvalid={touched.gender && !!errors.gender}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Field>
            <ErrorMessage
              name="gender"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="mb-4 ms-lg-3 d-flex justify-content-evenly">
        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikEmail"
        >
          <Form.Label htmlFor="email" className="mb-0">
            Email<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="email"
              type="email"
              aria-describedby="inputGroupPrepend"
              name="email"
              as={Form.Control}
              placeholder="you@wesom.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value); // Update email state
                handleChange(e); // Handle Formik's change event
              }}
              onBlur={handleBlur}
              isInvalid={touched.email && !!errors.email}
            />
            <ErrorMessage
              name="email"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>

        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikMobile"
        >
          <Form.Label htmlFor="mobile" className="mb-0">
            Mobile<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="mobile"
              aria-describedby="inputGroupPrepend"
              name="mobileNumber"
              as={Form.Control}
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value); // Update mobileNumber state
                handleChange(e); // Handle Formik's change event
              }}
              onBlur={handleBlur}
              isInvalid={touched.mobileNumber && !!errors.mobileNumber}
            />
            <ErrorMessage
              name="mobileNumber"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>

        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikDOB"
        >
          <Form.Label htmlFor="dob" className="mb-0">
            Date Of Birth<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="dob"
              type="date"
              aria-describedby="inputGroupPrepend"
              name="dob"
              as={Form.Control}
              value={dob}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
                handleChange(e);
              }}
              onBlur={handleBlur}
              isInvalid={touched.dob && !!errors.dob}
            />
            <ErrorMessage
              name="dob"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="mb-3 ms-lg-3 d-flex justify-content-evenly">
        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikmaritalStatus"
        >
          <Form.Label htmlFor="maritalStatus" className="mb-0">
            Marital Status<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="maritalStatus"
              as={Form.Select}
              name="maritalStatus"
              value={maritalStatus}
              onChange={(e) => {
                setMaritalStatus(e.target.value); // Update maritalStatus state
                handleChange(e); // Handle Formik's change event
              }}
              onBlur={handleBlur}
              isInvalid={touched.maritalStatus && !!errors.maritalStatus}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </Field>
            <ErrorMessage
              name="maritalStatus"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>

        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikAadhar"
        >
          <Form.Label htmlFor="aadhar" className="mb-0">
            Aadhar Number<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="aadhar"
              type="text"
              name="aadhar"
              as={Form.Control}
              value={aadharNumber} // Set the field value to the aadharNumber state
              onChange={(e) => {
                setAadharNumber(e.target.value); // Update aadharNumber state
                handleChange(e); // Handle Formik's change event
              }}
              onBlur={handleBlur}
              isInvalid={touched.aadhar && !!errors.aadhar}
            />
            <ErrorMessage
              name="aadhar"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>

        <Col
          className="mb-3 "
          sm={12}
          md={4}
          lg={4}
          xl={4}
          controlid="validationFormikBloodgroup"
        >
          <Form.Label htmlFor="bloodG" className="mb-0">
            Blood Group<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              id="bloodG"
              as={Form.Select}
              name="bloodgroup"
              value={bloodGroup}
              onChange={(e) => {
                setBloodGroup(e.target.value);
                handleChange(e);
              }}
              onBlur={handleBlur}
              isInvalid={touched.bloodgroup && !!errors.bloodgroup}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Field>
            <ErrorMessage
              name="bloodgroup"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalInfo;
