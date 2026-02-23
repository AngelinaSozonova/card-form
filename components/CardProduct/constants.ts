import z from "zod";
import { IOptionsCombobox } from "./types";

export const typeProduct: IOptionsCombobox[] = [
  {
    value: "product",
    label: "Товар",
  },
  {
    value: "service",
    label: "Услуга",
  },
  {
    value: "offer",
    label: "Предложение",
  },
  {
    value: "resource",
    label: "Ресурс",
  },
  {
    value: "rent",
    label: "Аренда",
  },
  {
    value: "realestate",
    label: "Недвижимость",
  },
  {
    value: "job",
    label: "Работа",
  },
];

export const unitOptions: IOptionsCombobox[] = [
  {
    value: 116,
    label: "Штука",
  },
  {
    value: 117,
    label: "Килограмм",
  },
  {
    value: 118,
    label: "Литр",
  },
];

export const categoryOptions: IOptionsCombobox[] = [
  { value: 2477, label: "Электроника" },
  { value: 2478, label: "Одежда" },
  { value: 2479, label: "Продукты" },
];

export const globalCategoryOptions: IOptionsCombobox[] = [
  { value: 2477, label: "Электроника" },
  { value: 2478, label: "Одежда" },
  { value: 2479, label: "Продукты" },
];

export const cashbackOptions = [
  { value: "lcard_cashback", label: "Cashback L-Card" },
  { value: "other_type", label: "Другое" },
];

export const seoKeywords = [
  "SEO", "Ключи"
];

export const formSchema = z.object({
  name: z
    .string()
    .min(5, "Минимум 5 символов"),
  type: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .optional(),
  code: z.string().optional(),
  description_long: z.string().optional(),
  description_short: z.string().optional(),
  unit: z
    .object({
      label: z.string(),
      value: z.number().nullable(),
    })
    .optional(),
  category: z
    .object({
      label: z.string(),
      value: z.number().nullable(),
    })
    .optional(),
  cashback_type: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .optional(),
  marketplace_price: z.number().optional(),
  chatting_percent: z.number().optional(),
  seo_keywords: z.array(z.string()).optional(),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  global_category_id: z
    .object({
      label: z.string(),
      value: z.number().nullable(),
    })
    .optional(),
  address: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});