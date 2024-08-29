"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PharmacyManagement() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", stock: 500, price: 5 },
    { id: 2, name: "Amoxicillin", stock: 200, price: 10 },
    { id: 3, name: "Ibuprofen", stock: 300, price: 8 },
  ]);
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    stock: "",
    price: "",
  });

  const addMedicine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMedicines([
      ...medicines,
      {
        id: medicines.length + 1,
        name: newMedicine.name,
        stock: Number(newMedicine.stock),
        price: Number(newMedicine.price),
      },
    ]);
    setNewMedicine({ name: "", stock: "", price: "" });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Pharmacy Management</h1>
      <Button className="mb-8">
        <Link href="/">Back</Link>
      </Button>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Medicine Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicines.map((medicine) => (
                  <TableRow key={medicine.id}>
                    <TableCell>{medicine.name}</TableCell>
                    <TableCell>{medicine.stock}</TableCell>
                    <TableCell>${medicine.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add New Medicine</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addMedicine} className="space-y-4">
              <Input
                placeholder="Medicine Name"
                value={newMedicine.name}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, name: e.target.value })
                }
              />
              <Input
                placeholder="Stock"
                type="number"
                value={newMedicine.stock}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, stock: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                type="number"
                value={newMedicine.price}
                onChange={(e) =>
                  setNewMedicine({ ...newMedicine, price: e.target.value })
                }
              />
              <Button type="submit">Add Medicine</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
