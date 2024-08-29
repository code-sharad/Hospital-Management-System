"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function PatientAdmission() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    department: "",
    doctor: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Patient admitted:", patient);
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Patient Admission</h1>
      <Button className="mb-8">
        <Link href="/">Back</Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Admit New Patient</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Patient Name"
              value={patient.name}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            />
            <Input
              placeholder="Age"
              type="number"
              value={patient.age}
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            />
            <Select
              onValueChange={(value: string) =>
                setPatient({ ...patient, gender: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Contact Number"
              value={patient.contact}
              onChange={(e) =>
                setPatient({ ...patient, contact: e.target.value })
              }
            />
            <Input
              placeholder="Address"
              value={patient.address}
              onChange={(e) =>
                setPatient({ ...patient, address: e.target.value })
              }
            />
            <Select
              onValueChange={(value: string) =>
                setPatient({ ...patient, department: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Ward</SelectItem>
                <SelectItem value="icu">ICU</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="maternity">Maternity</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value: string) =>
                setPatient({ ...patient, doctor: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Assign Doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                <SelectItem value="dr-williams">Dr. Williams</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit">Admit Patient</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
