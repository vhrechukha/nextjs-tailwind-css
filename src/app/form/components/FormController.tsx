"use client";

import SubmitConfirmation from "@/app/form/components/SubmitConfirmation";
import EmployeeForm from "@/app/form/components/EmployeeForm";
import { useState } from "react";

const FormController = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onComplete = (success: boolean) => setIsSubmitted(success);
  const onReset = () => setIsSubmitted(false);

  return isSubmitted ? (
    <SubmitConfirmation onButtonClick={onReset} />
  ) : (
    <EmployeeForm onComplete={onComplete} />
  );
};

export default FormController;
