import { createContext, useContext, useEffect, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    //save data in localstorage
    const saved = localStorage.getItem("registerData");
    return saved
      ? JSON.parse(saved)
      : {
          personal: {},
          education: [],
          experience: [],
          photo: null,
        };
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [globalError, setGlobalError] = useState(null);

  useEffect(() => {
    localStorage.setItem("registerData", JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (step, data) => {
    //here step is a string which equal to personal, education, experience or photo
    setFormData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const clearFormData = () => {
    localStorage.removeItem("registerData");
    setFormData({
      personal: {},
      education: [],
      experience: [],
      photo: null,
    });
    setCurrentStep(1);
  };

  const updateCurrentStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <RegisterContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        updateCurrentStep,
        globalError,
        setGlobalError,
        clearFormData,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
