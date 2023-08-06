import EmployeeForm from "@/app/form/components/EmployeeForm";
import { StatusBar } from "@/components/StatusBar";
import { Stack } from "@/components/Stack";

const FormPage = () => {
  return (
    <Stack direction="row" justifyContent="center" gap={5} className="my-10">
      <Stack direction="column">
        <StatusBar>Immediate registration</StatusBar>
        {/* Logout button */}
      </Stack>
      <EmployeeForm />
      {/* Language button */}
    </Stack>
  );
};

export default FormPage;
