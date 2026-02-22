import { useForm } from "react-hook-form";
import { Field } from "../ui/field";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "../ui/combobox";
import {
  cashbackOptions,
  categoryOptions,
  formSchema,
  globalCategoryOptions,
  seoKeywords,
  typeProduct,
  unitOptions,
} from "./constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { formatDataCreateProduct } from "./utils";
import { FormData } from "./types";

const CardProduct = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: {
        label: "",
        value: "",
      },
      code: "",
      description_long: "",
      description_short: "",
      unit: {
        label: "",
        value: null,
      },
      category: {
        label: "",
        value: null,
      },
      cashback_type: {
        label: "",
        value: "",
      },
      marketplace_price: undefined,
      chatting_percent: undefined,
      seo_keywords: [],
      seo_title: "",
      seo_description: "",
      global_category_id: {
        label: "",
        value: null,
      },
      address: "",
      latitude: undefined,
      longitude: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    const newData = formatDataCreateProduct(data);

    fetch(
      "https://app.tablecrm.com/api/v1/nomenclature/?token=af1874616430e04cfd4bce30035789907e899fc7c3a1a4bb27254828ff304a77",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Http error status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Успешно отправлено: ", result);
      })
      .catch((error) => {
        console.error("Ошибка", error);
      });
  };

  return (
    <Form {...form}>
      <form id="form-card" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <Field orientation="horizontal">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Код</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4 w-full">
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Введите название товара"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Field>

        <Field orientation="horizontal" className="items-center">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Тип</FormLabel>
                <Combobox
                  items={typeProduct}
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <ComboboxInput />
                  <ComboboxContent>
                    <ComboboxEmpty>Нет данных</ComboboxEmpty>
                    <ComboboxList>
                      {(type) => (
                        <ComboboxItem key={type.value} value={type}>
                          {type.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Единица измерения</FormLabel>
                <Combobox
                  items={unitOptions}
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <ComboboxInput />
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(unit) => (
                        <ComboboxItem key={unit.value} value={unit}>
                          {unit.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Категория</FormLabel>
                <Combobox
                  items={categoryOptions}
                  value={field.value}
                  onValueChange={(v) => field.onChange(v)}
                >
                  <ComboboxInput />
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(category) => (
                        <ComboboxItem key={category.value} value={category}>
                          {category.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="global_category_id"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Глобальная категория</FormLabel>
                <Combobox
                  items={globalCategoryOptions}
                  value={field.value}
                  onValueChange={(v) => field.onChange(v)}
                >
                  <ComboboxInput />
                  <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList>
                      {(cashback) => (
                        <ComboboxItem key={cashback.value} value={cashback}>
                          {cashback.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <FormMessage />
              </FormItem>
            )}
          />
        </Field>

        <FormField
          control={form.control}
          name="description_short"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Краткое описание товара</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description_long"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Длинное описание товара</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Tabs defaultValue="characteristics" className="mb-10">
          <TabsList>
            <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
            <TabsTrigger value="price">Цена</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardContent className="text-muted-foreground text-sm">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Адрес</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Field orientation="horizontal">
                  <FormField
                    control={form.control}
                    name="latitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Широта</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            onChange={(e) => {
                              const value =
                                e.target.value === ""
                                  ? undefined
                                  : Number(e.target.value);

                              field.onChange(value);
                            }}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="longitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Долгота</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => {
                              const value =
                                e.target.value === ""
                                  ? undefined
                                  : Number(e.target.value);

                              field.onChange(value);
                            }}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Field>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="price">
            <Card>
              <CardContent className="text-muted-foreground text-sm">
                <FormField
                  control={form.control}
                  name="cashback_type"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Тип кешбека</FormLabel>
                      <Combobox
                        items={cashbackOptions}
                        value={field.value}
                        onValueChange={(v) => field.onChange(v)}
                      >
                        <ComboboxInput />
                        <ComboboxContent>
                          <ComboboxEmpty>No items found.</ComboboxEmpty>
                          <ComboboxList>
                            {(cashback) => (
                              <ComboboxItem
                                key={cashback.value}
                                value={cashback}
                              >
                                {cashback.label}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="marketplace_price"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Цена для маркетплейса</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => {
                            const value =
                              e.target.value === ""
                                ? undefined
                                : Number(e.target.value);

                            field.onChange(value);
                          }}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="chatting_percent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Комиссия маркета</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => {
                            const value =
                              e.target.value === ""
                                ? undefined
                                : Number(e.target.value);

                            field.onChange(value);
                          }}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="seo">
            <Card>
              <CardContent className="text-muted-foreground text-sm">
                <FormField
                  control={form.control}
                  name="seo_title"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>SEO Загаловок</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seo_description"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>SEO Описание</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seo_keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Ключевые слова</FormLabel>
                      <FormControl>
                        <Combobox
                          items={seoKeywords}
                          multiple
                          value={field.value}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <ComboboxChips>
                            <ComboboxValue>
                              {field?.value &&
                                field.value.map((item) => (
                                  <ComboboxChip key={item}>{item}</ComboboxChip>
                                ))}
                            </ComboboxValue>
                            <ComboboxChipsInput />
                          </ComboboxChips>
                          <ComboboxContent>
                            <ComboboxEmpty>No items found.</ComboboxEmpty>
                            <ComboboxList>
                              {(item) => (
                                <ComboboxItem key={item} value={item}>
                                  {item}
                                </ComboboxItem>
                              )}
                            </ComboboxList>
                          </ComboboxContent>
                        </Combobox>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Button type="submit" form="form-card" className="self-end">
          Создать
        </Button>
      </form>
    </Form>
  );
};

export default CardProduct;
