import EmployeeForm from "@/app/form/components/EmployeeForm";
import { StatusBar } from "@/components/StatusBar";
import { Stack } from "@/components/Stack";
import LogoutButton from "@/components/LogoutButton";

const FormPage = () => {
  return (
    <Stack direction="row" justifyContent="center" gap={5} className="my-10">
      <Stack direction="column">
        <StatusBar>Immediate registration</StatusBar>
        <Stack direction="column" justifyContent="center" className="my-auto">
          <LogoutButton />
        </Stack>
      </Stack>
      <EmployeeForm />
      {/* Language button */}
    </Stack>
  );
};

export default FormPage;
