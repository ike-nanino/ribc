/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control } from "react-hook-form";
import type { E164Number } from "libphonenumber-js/core";
import { FormFieldType } from "./PaymentTransferForm";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  dateFormat?: string;
  showTimeSelect?: boolean;
  renderSkeleton?: (field: any) => React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    placeholder,
    renderSkeleton,
  } = props;





  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex border rounded items-center">

          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="CA"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="p-2 outline-none border rounded-md w-full focus:ring-0 focus:ring-offset-0 focus:border-gray-200"
          />
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
      default:
      break;
  }
};

function CustomFormField(props: CustomProps) {
  const { control, fieldType, name, label } = props;




  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;