"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Bed, UserPlus, Pill, Package } from "lucide-react";
import Link from "next/link";
import HospitalManagementSystem from "./hospital-management-system";


export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Hospital Management System
      </h1>

      <div>
        <HospitalManagementSystem/>
      </div>
      <div className="grid mt-8 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>OPD Queue Management</CardTitle>
            <CardDescription>
              Manage outpatient department queues efficiently
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Users className="h-12 w-12 mb-4" />
            <Link href="/opd">
              <Button>
                Manage OPD Queue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bed Availability</CardTitle>
            <CardDescription>
              Check and manage hospital bed availability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Bed className="h-12 w-12 mb-4" />
            <Link href="/beds">
              <Button>
                Check Bed Availability
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Patient Admission</CardTitle>
            <CardDescription>
              Admit new patients and manage their information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserPlus className="h-12 w-12 mb-4" />
            <Link href="/admission">
              <Button>
                Admit Patient
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pharmacy Management</CardTitle>
            <CardDescription>
              Manage medicine dispensation and stock
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Pill className="h-12 w-12 mb-4" />
            <Link href="/pharmacy">
              <Button>
                Manage Pharmacy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>
              Track and manage hospital inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Package className="h-12 w-12 mb-4" />
            <Link href="/inventory">
              <Button>
                Manage Inventory
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
