import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import { Form, Col, Row, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DataContext from "./DataContext";

function LanguageInfo({ handleChange, touched, errors }) {
  const {
    //LanguageInfo
    Language,
    setLanguage,
    Language2,
    setLanguage2,

    // Language CheckBox
    checkboxValues,
    checkboxValues2,
    //checkbox function
    handleCheckboxChange,
    handleCheckboxChange2
  } = useContext(DataContext);

  // console.log(Language);

  console.log(checkboxValues);

  // checkBox value get function

  return (
    <Container fluid>
      <h3 className="mt-2 infoTitle">5. LANGUAGE PROFICIENCY</h3>
      <Row className="mx-0 mb-3 d-flex justify-content-evenly align-items-center langSelect">
        <Col xs="12" md="4" className="langSelect">
          <Form.Label className="mb-0">
            Language<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              as={Form.Select}
              name="Language"
              value={Language}
              onChange={(e) => {
                setLanguage(e.target.value);
                handleChange(e);
              }}
              isInvalid={touched.Language && !!errors.Language}
            >
              <option value="" disabled>
                Select Language
              </option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Urdu">Urdu</option>
              <option value="Others">Others</option>
            </Field>
            <ErrorMessage
              name="Language"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>
        <Col xs="12" md="5" className="col d-flex mt-4 lang ">
          <Form.Label className="pe-2 pe-sm-5 pe-md-3 label autosized">
            I can
          </Form.Label>
          <Col className="pe-2">
            <Field
              name="read"
              type="checkbox"
              value="Read"
              onChange={handleCheckboxChange}
              checked={checkboxValues.read}
              as={Form.Check}
              label="Read"
            />
          </Col>

          <Col className="pe-2">
            <Field
              name="write"
              type="checkbox"
              value="Write"
              onChange={handleCheckboxChange}
              checked={checkboxValues.write}
              as={Form.Check}
              label="Write"
            />
          </Col>
          <Col className="pe-2">
            <Field
              name="speak"
              type="checkbox"
              value="Speak"
              onChange={handleCheckboxChange}
              checked={checkboxValues.speak}
              as={Form.Check}
              label="Speak"
            />
          </Col>
        </Col>
      </Row>

      <Row className="mx-0 mb-3 d-flex justify-content-evenly align-items-center langSelect">
        <Col xs="12" md="4" className="langSelect">
          <Form.Label className="mb-0">
            Language<span className="required"> *</span>
          </Form.Label>
          <InputGroup hasValidation>
            <Field
              as={Form.Select}
              name="Language2"
              value={Language2}
              onChange={(e) => {
                setLanguage2(e.target.value);
                handleChange(e);
              }}
              isInvalid={touched.Language2 && !!errors.Language2}
            >
              <option value="" disabled>
                Select Language
              </option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Urdu">Urdu</option>
              <option value="Others">Others</option>
            </Field>
            <ErrorMessage
              name="Language"
              component={Form.Control.Feedback}
              type="invalid"
            />
          </InputGroup>
        </Col>
        <Col xs="12" md="5" className="col d-flex mt-4 lang ">
          <Form.Label className="pe-2 pe-sm-5 pe-md-3 label autosized">
            I can
          </Form.Label>
          <Col className="pe-2">
            <Field
              name="read2"
              type="checkbox"
              value="Read"
              onChange={handleCheckboxChange2}
              checked={checkboxValues2.read2}
              as={Form.Check}
              label="Read"
            />
          </Col>

          <Col className="pe-2">
            <Field
              name="write2"
              type="checkbox"
              value="Write"
              onChange={handleCheckboxChange2}
              checked={checkboxValues2.write2}
              as={Form.Check}
              label="Write"
            />
          </Col>
          <Col className="pe-2">
            <Field
              name="speak2"
              type="checkbox"
              value="Speak"
              onChange={handleCheckboxChange2}
              checked={checkboxValues2.speak2}
              as={Form.Check}
              label="Speak"
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default LanguageInfo;

