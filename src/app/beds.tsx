"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BedAvailability() {
  const [departments, setDepartments] = useState([
    { name: "General Ward", total: 50, available: 15 },
    { name: "ICU", total: 20, available: 5 },
    { name: "Pediatrics", total: 30, available: 10 },
    { name: "Maternity", total: 25, available: 8 },
  ]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Bed Availability</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Bed Availability Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Total Beds</TableHead>
                <TableHead>Available Beds</TableHead>
                <TableHead>Occupancy Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((dept) => (
                <TableRow key={dept.name}>
                  <TableCell>{dept.name}</TableCell>
                  <TableCell>{dept.total}</TableCell>
                  <TableCell>{dept.available}</TableCell>
                  <TableCell>
                    {(
                      ((dept.total - dept.available) / dept.total) *
                      100
                    ).toFixed(2)}
                    %
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bed Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.name} value={dept.name}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Bed Number" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value={`Bed ${i + 1}`}>
                    Bed {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
