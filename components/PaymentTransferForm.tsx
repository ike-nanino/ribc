"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight, Landmark, WalletCards, BadgeInfo } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { E164Number } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomFormField from "./CustomFormField";


export enum FormFieldType {
  INPUT = 'input',
  PHONE_INPUT = 'phoneInput',
  SKELETON = 'skeleton',
}


const formSchema = z.object({
  amount: z.number().min(1, "Amount must be at least $1").max(20000000000000, "Maximum transfer is Unlimited"),
  recipientEmail: z.string().email("Invalid email address"),
  recipientName: z.string().min(2, "Recipient name is required"),
  accountNumber: z.string().length(13, "Must be a valid 13-digit account number"),
  routingNumber: z.string().length(9, "Must be a valid 9-digit routing number"),
  swiftCode: z.string().max(8, "Swift Code too long").optional(),
  phoneNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  note: z.string().max(140, "Note too long").optional(),
  saveBeneficiary: z.boolean().default(false),
});

interface PaymentTransferFormProps {
  accounts?: any[]; // Update with your actual account type
}

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: undefined,
      recipientEmail: "",
      recipientName: "",
      accountNumber: "",
      routingNumber: "",
      swiftCode: "",
      phoneNumber: "",
      note: "",
      saveBeneficiary: false,
    },
  });

  const submit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    // Simulate API call
    // const promise = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ success: true });
    //   }, 2000);
    // });

    // Simulate API call that always fails
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Transfer failed"));
      }, 2000);
    });

    toast.promise(promise, {
      loading: 'Processing transfer...',
      success: () => {
        // This won't be called since we're rejecting the promise
        setIsLoading(false);
        return `Transfer successful`;
      },
      error: () => {
        setIsLoading(false);
        alert("Temporal Hold On Account By CRA Due To Unpaid Taxes Withheld.");
        return `Transfer of $${data.amount} to ${data.recipientName} failed`;
      },
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Landmark className="w-6 h-6 text-primary" />
          New Money Transfer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
            {/* Amount Input */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <WalletCards className="w-4 h-4" />
                    Transfer Amount
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        placeholder="0.00"
                        className="pl-8 text-sm lg:text-lg font-medium"
                        type="number"
                        step="0.01"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Recipient Details */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <BadgeInfo className="w-4 h-4" />
                <span className="text-sm">Recipient Information</span>
              </div>

              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recipientEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Bank Details */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Landmark className="w-4 h-4" />
                <span className="text-sm">Bank Account Details</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Number</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="routingNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Routing Number</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="swiftCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Swift Code</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <CustomFormField
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder=""
                />
                {/* <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormControl>
                      <PhoneInput
                        defaultCountry="GH"
                        placeholder="Enter phone number"
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                      />

                      <Input {...field} />

                    </FormControl>
                  )}
                /> */}
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-4 border-t pt-6">
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transfer Note</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add a message to the recipient"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="saveBeneficiary"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Save as Beneficiary</FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <Button
                type="submit"
                className="w-full gap-2"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing Transfer...
                  </>
                ) : (
                  <>
                    Confirm Transfer
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PaymentTransferForm;