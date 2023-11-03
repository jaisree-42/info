import{ createContext, useState } from "react";
const DataContext = createContext({});

export const FormDataProvider = ({ children }) => {
  // personal info
  const [fullName, setFullName] = useState("");
  const [sonOrHusbandName, setsonOrHusbandName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  // Address
  //  language select state
  const [Language, setLanguage] = useState("");
  const [Language2, setLanguage2] = useState("");
  const [Language3, setLanguage3] = useState("");
  const [Language4, setLanguage4] = useState("");
  //  language know checkBox state

  const [checkboxValues, setCheckboxValues] = useState({
    read: false,
    write: false,
    speak: false
  });
  const [checkboxValues2, setCheckboxValues2] = useState({
    read2: false,
    write2: false,
    speak2: false
  });

  const [checkboxValues3, setCheckboxValues3] = useState({});
  const [checkboxValues4, setCheckboxValues4] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleCheckboxChange2 = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues2((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <DataContext.Provider
      value={{
        fullName,
        setFullName,
        sonOrHusbandName,
        setsonOrHusbandName,
        gender,
        setGender,
        email,
        setEmail,
        mobile,
        setMobileNumber,
        dateOfBirth,
        setDateOfBirth,

        maritalStatus,
        setMaritalStatus,
        aadharNumber,
        setAadharNumber,
        bloodGroup,
        setBloodGroup,

        Language,
        setLanguage,
        Language2,
        setLanguage2,
        Language3,
        setLanguage3,
        Language4,
        setLanguage4,
        // Language CheckBox
        checkboxValues,
        setCheckboxValues,
        checkboxValues2,
        setCheckboxValues2,
        checkboxValues3,
        setCheckboxValues3,
        checkboxValues4,
        setCheckboxValues4,

        //
        handleCheckboxChange,
        handleCheckboxChange2
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
