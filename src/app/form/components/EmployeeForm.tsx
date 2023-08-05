"use client";

import * as Form from "@radix-ui/react-form";
import { Card } from "@/components";
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
        <div className="flex w-full flex-row gap-x-5">
          <Input name="firstName" label="First name" required />
          <Input name="lastName" label="Last name" required />
        </div>
      </Card>
      <Card title="Address Details">
        <Form.Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Question
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
              required
            />
          </Form.Control>
        </Form.Field>
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
