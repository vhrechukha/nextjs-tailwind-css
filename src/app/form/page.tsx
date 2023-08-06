import { StatusBar } from "@/components/StatusBar";
import { Stack } from "@/components/Stack";
import LogoutButton from "@/components/LogoutButton";
import FormController from "@/app/form/components/FormController";

const FormPage = () => {
  return (
    <Stack direction="row" justifyContent="center" gap={20} className="m-10">
      <Stack direction="column">
        <StatusBar>Immediate registration</StatusBar>
        <Stack direction="column" justifyContent="center" className="my-auto">
          <LogoutButton />
        </Stack>
      </Stack>
      <FormController />
      {/* TODO: Add global LanguageContext */}
      {/* Language button */}
    </Stack>
  );
};

export default FormPage;
