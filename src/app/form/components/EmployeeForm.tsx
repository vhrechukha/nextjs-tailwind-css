"use client";

import * as Form from "@radix-ui/react-form";
import { Card, Stack, Switch } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { employeeValidationSchema } from "@/app/form/utils/employeeValidationSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFInput from "@/components/Input/RHFInput";
import { RHFSelect } from "@/components/Select";
import { mockedOptions } from "@/utils/mocks";

interface Props {
  onComplete: (success: boolean) => void;
}

const EmployeeForm = ({ onComplete }: Props) => {
  const employeeSchema = useMemo(() => employeeValidationSchema(), []);

  const [contractStartSame, setContractStartSame] = useState<boolean>(false);
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(employeeSchema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      // TODO: format dates into ISO format

      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await response.json();

      console.log("json :", json);

      onComplete(true);
    } catch (error) {
      console.error(error);
      onComplete(false);
    }
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
          error={errors?.contractStartDay?.message}
          required
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
          error={errors?.contractStartDay?.message}
          required
        />
      </Card>
      <Card title="Employee Data">
        <Stack direction="row" gap="1rem">
          <RHFInput
            name="firstName"
            label="First name"
            control={control}
            error={errors?.firstName?.message}
            required
          />
          <RHFInput
            name="lastName"
            label="Last name"
            control={control}
            error={errors?.lastName?.message}
            required
          />
        </Stack>
        <RHFInput
          name="givenBirthName"
          label="Given birth name"
          error={errors?.givenBirthName?.message}
          control={control}
        />
        <RHFInput
          name="socialId"
          label="Social ID"
          control={control}
          error={errors?.socialId?.message}
        />
        <Stack direction="row" gap="1rem">
          <RHFSelect
            options={mockedOptions}
            name="cityOfBirth"
            label="City of birth"
            control={control}
            error={errors?.cityOfBirth?.message}
            required
          />
          <RHFSelect
            options={mockedOptions}
            name="countryOfBirth"
            label="Country of birth"
            control={control}
            error={errors?.countryOfBirth?.message}
            required
          />
        </Stack>
        <RHFInput
          name="birthdate"
          label="Birthdate"
          control={control}
          error={errors?.birthdate?.message}
          required
        />
        <RHFSelect
          options={mockedOptions}
          name="nationality"
          label="Nationality"
          control={control}
          error={errors?.nationality?.message}
          required
        />
      </Card>
      <Card title="Address Details">
        <RHFSelect
          options={mockedOptions}
          name="addressCountry"
          label="Country"
          control={control}
          error={errors?.addressCountry?.message}
          required
        />
        <Stack direction="row" gap="1rem">
          <RHFSelect
            options={mockedOptions}
            name="addressStreet"
            label="Street"
            control={control}
            error={errors?.addressStreet?.message}
            required
          />
          <RHFInput
            name="addressHouseNumber"
            label="House number"
            control={control}
            error={errors?.addressHouseNumber?.message}
            required
          />
        </Stack>
        <RHFSelect
          options={mockedOptions}
          name="addressSupplement"
          label="Address supplement"
          control={control}
          error={errors?.addressSupplement?.message}
          required
        />
        <Stack direction="row" gap="1rem">
          <RHFSelect
            options={mockedOptions}
            name="addressCity"
            label="City"
            control={control}
            error={errors?.addressCity?.message}
            required
          />
          <RHFInput
            name="addressPostCode"
            label="Post code"
            control={control}
            error={errors?.addressPostCode?.message}
            required
          />
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
