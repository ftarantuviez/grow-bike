import { FormValues } from "@/pages/bikes/[bikeId]";
import { DateValidationError } from "@mui/x-date-pickers";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";

export type BookingFormProps = {
  form: FormValues;
  amountOfDaysRented: number;
  priceCalculated: number;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleDateChange: (
    val: string
  ) => (
    value: string | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};
