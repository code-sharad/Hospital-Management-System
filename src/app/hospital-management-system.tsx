"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Hospital, Users, Bed, UserPlus, Pill, BarChart3 } from "lucide-react";

export default function HospitalManagementSystem() {
  const [opdQueue, setOpdQueue] = useState([
    { id: 1, name: "John Doe", department: "Cardiology", waitTime: "30 mins" },
    {
      id: 2,
      name: "Jane Smith",
      department: "Orthopedics",
      waitTime: "45 mins",
    },
    {
      id: 3,
      name: "Alice Johnson",
      department: "Pediatrics",
      waitTime: "15 mins",
    },
  ]);

  const [bedAvailability, setBedAvailability] = useState([
    { ward: "General", total: 50, available: 10 },
    { ward: "ICU", total: 20, available: 3 },
    { ward: "Pediatric", total: 30, available: 8 },
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, name: "Paracetamol", quantity: 5000, reorderLevel: 1000 },
    { id: 2, name: "Antibiotics", quantity: 2000, reorderLevel: 500 },
    { id: 3, name: "Gauze", quantity: 10000, reorderLevel: 2000 },
  ]);

  const handleAdmission = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle admission logic here
    alert("Patient admission form submitted");
  };

  const handleDispenseMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle medicine dispensation logic here
    alert("Medicine dispensed");
  };

  return (
    <div className=" bg-gray-100 ">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <Hospital className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              City General Hospital
            </h1>
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            Integration Status: Local
          </Button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6  lg:px-8">
        <Tabs defaultValue="opd" className="space-y-4 ">
          <TabsList className="flex flex-wrap  justify-start">
            <TabsTrigger value="opd" className="mb-2 mr-2">
              OPD Queue
            </TabsTrigger>
            <TabsTrigger value="beds" className="mb-2 mr-2">
              Bed Availability
            </TabsTrigger>
            <TabsTrigger value="admission" className="mb-2 mr-2">
              Patient Admission
            </TabsTrigger>
            <TabsTrigger value="pharmacy" className="mb-2 mr-2">
              Pharmacy & Inventory
            </TabsTrigger>
          </TabsList>
          <TabsContent value="opd" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>OPD Queue Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Queue Number</TableHead>
                      <TableHead>Patient Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Estimated Wait Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {opdQueue.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>{patient.id}</TableCell>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell>{patient.department}</TableCell>
                        <TableCell>{patient.waitTime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="beds" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bed Availability Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {bedAvailability.map((ward) => (
                    <Card key={ward.ward}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          {ward.ward} Ward
                        </CardTitle>
                        <Bed className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {ward.available} / {ward.total}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Available beds
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admission" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Patient Admission Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdmission} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">Patient Name</Label>
                      <Input
                        id="patientName"
                        placeholder="Enter patient name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patientAge">Patient Age</Label>
                      <Input
                        id="patientAge"
                        type="number"
                        placeholder="Enter patient age"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admissionDepartment">Department</Label>
                      <Input
                        id="admissionDepartment"
                        placeholder="Enter department"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admissionDate">Admission Date</Label>
                      <Input id="admissionDate" type="datetime-local" />
                    </div>
                  </div>
                  <Button type="submit">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Admit Patient
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pharmacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pharmacy & Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <form onSubmit={handleDispenseMedicine} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="medicineName">Medicine Name</Label>
                        <Input
                          id="medicineName"
                          placeholder="Enter medicine name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medicineQuantity">Quantity</Label>
                        <Input
                          id="medicineQuantity"
                          type="number"
                          placeholder="Enter quantity"
                        />
                      </div>
                      <div className="pt-8">
                        <Button type="submit">
                          <Pill className="h-4 w-4 mr-2" />
                          Dispense Medicine
                        </Button>
                      </div>
                    </div>
                  </form>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Medicine/Item Name</TableHead>
                        <TableHead>Current Quantity</TableHead>
                        <TableHead>Reorder Level</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inventory.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.reorderLevel}</TableCell>
                          <TableCell>
                            {item.quantity > item.reorderLevel ? (
                              <span className="text-green-500">Sufficient</span>
                            ) : (
                              <span className="text-red-500">
                                Reorder Required
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
