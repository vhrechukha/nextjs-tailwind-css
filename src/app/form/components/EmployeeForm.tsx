"use client";

import * as Form from "@radix-ui/react-form";
import { Card, Stack, Switch } from "@/components";
import { useMemo } from "react";
import { employeeValidationSchema } from "@/app/form/utils/employeeValidationSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFInput from "../../../components/Input/RHFInput";

const EmployeeForm = () => {
  const employeeSchema = useMemo(() => employeeValidationSchema(), []);

  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(employeeSchema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <Form.Root className="w-2/5" onSubmit={handleSubmit(onSubmit)}>
      <Card title="Company Data">
        <RHFInput
          name="contractStartDay"
          label="Contract start"
          control={control}
        />
        <Switch name="same" />
        <RHFInput
          name="firstDayOfWork"
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
          className="mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px] bg-blue-600 px-[15px] font-medium leading-none text-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-blue-500 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default EmployeeForm;
