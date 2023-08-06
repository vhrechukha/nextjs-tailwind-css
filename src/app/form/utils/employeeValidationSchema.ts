import * as yup from "yup";

// TODO: investigate localization possibilities with "yup"
const employeeValidationSchema = () =>
  yup.object({
    contractStartDay: yup.string().min(4).required("Property is required"),
    firstDayOfWork: yup.string().required("Required"),
    firstName: yup.string().min(4).required("Required"),
    lastName: yup.string().required("Required"),
    birthName: yup.string(),
    socialId: yup.string(),
    cityOfBirth: yup.string().required("Required"),
    countryOfBirth: yup.string().required("Required"),
    birthdate: yup.string().required("Required"),
    nationality: yup.string().required("Required"),
    addressCountry: yup.string().required("Required"),
    addressStreet: yup.string().required("Required"),
    addressHouseNumber: yup.string().required("Required"),
    addressSupplement: yup.string(),
    addressCity: yup.string().required("Required"),
    addressPostCode: yup.string().required("Required"),
  });

export { employeeValidationSchema };
