import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personal: {},
    education: [],
    experience: [],
    photo: null,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (step, data) => {
    //here step is a string which equal to personal, education, experience or photo
    setFormData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const updateCurrentStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <RegisterContext.Provider
      value={{ formData, updateFormData, currentStep, updateCurrentStep }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
