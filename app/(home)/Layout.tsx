"use client";

import CardProduct from "@/components/CardProduct/CardProduct";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface IFormData {
  name: string;
}

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-250 p-6">
        <CardHeader>
          <CardTitle>Добавить номенклатуру</CardTitle>
        </CardHeader>
        <CardContent>
          <CardProduct />
        </CardContent>
      </Card>
    </div>
  );
};

export default Layout;
