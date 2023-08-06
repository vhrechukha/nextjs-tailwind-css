"use client";

import * as Form from "@radix-ui/react-form";
import { Card, Stack, Switch } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { employeeValidationSchema } from "@/app/form/utils/employeeValidationSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFInput from "../../../components/Input/RHFInput";

const EmployeeForm = () => {
  const employeeSchema = useMemo(() => employeeValidationSchema(), []);

  const [contractStartSame, setContractStartSame] = useState<boolean>(false);
  const { handleSubmit, watch, setValue, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(employeeSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };
  const handleContractStartSame = () =>
    setContractStartSame((prevState) => !prevState);

  const contractStartDayValue = watch("contractStartDay");
  useEffect(() => {
    if (contractStartSame) {
      setValue("firstDayOfWork", contractStartDayValue, {
        shouldValidate: true,
      });
    }
  }, [contractStartSame, watch, setValue, contractStartDayValue]);

  return (
    <Form.Root className="w-2/5" onSubmit={handleSubmit(onSubmit)}>
      <Card title="Company Data">
        <RHFInput
          name="contractStartDay"
          label="Contract start"
          control={control}
        />
        <Switch
          onChange={handleContractStartSame}
          label="Contract start and first day of work differ"
        />
        <RHFInput
          disabled={contractStartSame}
          name={"firstDayOfWork"}
          label="First day of work"
          control={control}
        />
      </Card>
      <Card title="Employee Data">
        <Stack direction="row" gap="1rem">
          <RHFInput name="firstName" label="First name" control={control} />
          <RHFInput name="lastName" label="Last name" control={control} />
        </Stack>
        <RHFInput
          name="givenBirthName"
          label="Given birth name"
          control={control}
        />
        <RHFInput name="socialId" label="Social ID" control={control} />
        <Stack direction="row" gap="1rem">
          <RHFInput
            name="cityOfBirth"
            label="City of birth"
            control={control}
          />
          <RHFInput
            name="countryOfBirth"
            label="Country of birth"
            control={control}
          />
        </Stack>
        <RHFInput name="birthdate" label="Birthdate" control={control} />
        <RHFInput name="nationality" label="Nationality" control={control} />
      </Card>
      <Card title="Address Details">
        <RHFInput name="addressCountry" label="Country" control={control} />
        <Stack direction="row" gap="1rem">
          <RHFInput name="addressStreet" label="Street" control={control} />
          <RHFInput
            name="addressHouseNumber"
            label="House number"
            control={control}
          />
        </Stack>
        <RHFInput
          name="addressSupplement"
          label="Address supplement"
          control={control}
        />
        <Stack direction="row" gap="1rem">
          <RHFInput name="addressCity" label="City" control={control} />
          <RHFInput name="adresspostCode" label="Post code" control={control} />
        </Stack>
      </Card>
      <Form.Submit asChild>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Submit
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default EmployeeForm;
