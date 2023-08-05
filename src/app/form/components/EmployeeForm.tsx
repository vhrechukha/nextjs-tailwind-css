"use client";

import * as Form from "@radix-ui/react-form";
import { Card, Stack } from "@/components";
import Input from "../../../components/Input";

const EmployeeForm = () => {
  return (
    <Form.Root>
      <Card title="Company Data">
        <Input
          // error="ddddfndsjfndskjfnjkdsnf kdjs fgn;kdsjngkjsdfngjkdsfngkdsfng;dskng;dfsgnsl"
          name="contractStart"
          label="Contract start"
          required
        />
        <Input name="firstDayOfWork" label="First day of work" required />
      </Card>
      <Card title="Employee Data">
        <Stack direction="row" gap="1rem">
          <Input name="firstName" label="First name" required />
          <Input name="lastName" label="Last name" required />
        </Stack>
      </Card>
      <Card title="Address Details">
        <Input name="firstName" label="First name" required />
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
