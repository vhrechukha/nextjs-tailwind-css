"use client";
import { AppIcon, Card, Stack } from "@/components";

interface Props {
  onButtonClick: () => void;
}

const SubmitConfirmation = ({ onButtonClick }: Props) => {
  return (
    <Stack>
      <Card>
        <Stack alignItems="center" gap="1rem">
          <div className="bg-green-100 rounded-full bg-gradient-radial p-10">
            <AppIcon icon="success" />
          </div>
          <h1 className="text-2xl font-bold">Data is submitted</h1>
          <p className="text-grey-300 px-10">
            Your data is successfully submitted to the employer. We&apos;ll
            notify you about the next steps.
          </p>
        </Stack>
      </Card>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onButtonClick}
      >
        Logout and back
      </button>
    </Stack>
  );
};

export default SubmitConfirmation;
