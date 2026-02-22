import z from "zod";
import { formSchema } from "./constants";

export interface IOptionsCombobox {
    value: string | number;
    label: string;
}

export type FormData = z.infer<typeof formSchema>;