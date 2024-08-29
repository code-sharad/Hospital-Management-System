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

export default function OPDQueueManagement() {
  const [queue, setQueue] = useState([
    { id: 1, name: "John Doe", age: 35, reason: "Fever" },
    { id: 2, name: "Jane Smith", age: 28, reason: "Headache" },
    { id: 3, name: "Bob Johnson", age: 45, reason: "Back pain" },
  ]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    reason: "",
  });

  const addToQueue = (e) => {
    e.preventDefault();
    setQueue([
      ...queue,
      { id: queue.length + 1, ...newPatient, age: Number(newPatient.age) },
    ]);
    setNewPatient({ name: "", age: "", reason: "" });
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">OPD Queue Management</h1>
      <Button className="mb-8">
        <Link href="/">Back</Link>
      </Button>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Queue Number</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {queue.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add to Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addToQueue} className="space-y-4">
              <Input
                placeholder="Patient Name"
                value={newPatient.name}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, name: e.target.value })
                }
              />
              <Input
                placeholder="Age"
                type="number"
                value={newPatient.age}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, age: e.target.value })
                }
              />
              <Input
                placeholder="Reason for Visit"
                value={newPatient.reason}
                onChange={(e) =>
                  setNewPatient({ ...newPatient, reason: e.target.value })
                }
              />
              <Button type="submit">Add to Queue</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
