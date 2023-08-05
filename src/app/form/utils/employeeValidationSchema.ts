import * as yup from "yup";

// TODO: investigate localization possibilities with "yup"
const employeeValidationSchema = () =>
  yup.object({
    contractStartDay: yup
      .string()
      .min(4)
      .required("Property is required")
      .label("Contract start day"),
    firstDayOfWork: yup
      .string()
      .required("Required")
      .label("First day of work"),
    firstName: yup.string().min(4).required("Required").label("First name"),
    lastName: yup.string().required("Required").label("Last name"),
    birthName: yup.string().label("Given birth name"),
    socialId: yup.string().label("Social ID"),
    cityOfBirth: yup.string().required("Required").label("City of birth"),
    countryOfBirth: yup.string().required("Required").label("Country of birth"),
    birthdate: yup.string().required("Required").label("Birthdate"),
    nationality: yup.string().required("Required").label("Nationality"),
    addressCountry: yup.string().required("Required").label("Country"),
    addressStreet: yup.string().required("Required").label("Street"),
    addressHouseNumber: yup.string().required("Required").label("House number"),
    addressSupplement: yup.string().label("Address supplement"),
    addressCity: yup.string().required("Required").label("City"),
    addressPostCode: yup.string().required("Required").label("Post code"),
  });

export { employeeValidationSchema };
