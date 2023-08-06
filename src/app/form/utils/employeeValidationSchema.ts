import * as yup from "yup";

// TODO: investigate localization possibilities with "yup"
const employeeValidationSchema = () =>
  yup.object({
    contractStartDay: yup
      .string()
      .min(4, "Write at least 4 symbols")
      .required("Property is required"),
    firstDayOfWork: yup.string().required("Property is required"),
    firstName: yup.string().required("Property is required"),
    lastName: yup.string().required("Property is required"),
    birthName: yup.string(),
    socialId: yup.string(),
    cityOfBirth: yup.string().required("Property is required"),
    countryOfBirth: yup.string().required("Property is required"),
    birthdate: yup.string().required("Property is required"),
    nationality: yup.string().required("Property is required"),
    givenBirthName: yup.string(),
    addressCountry: yup.string().required("Property is required"),
    addressStreet: yup.string().required("Property is required"),
    addressHouseNumber: yup.string().required("Property is required"),
    addressSupplement: yup.string(),
    addressCity: yup.string().required("Property is required"),
    addressPostCode: yup
      .string()
      .min(2, "Write at least 2 symbols")
      .required("Property is required"),
  });

export { employeeValidationSchema };
