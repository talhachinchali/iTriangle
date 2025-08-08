import React, { useState } from "react"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddSupplierForm from "@/components/addSupplierForm"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"

const initialSuppliers = [
  { id: 1, name: "Acme Corp", email: "acme@example.com", phone: "123-456-7890", address: "123 Main St" },
  { id: 2, name: "Globex Inc", email: "globex@example.com", phone: "987-654-3210", address: "456 Elm St" },
]

export default function Home() {
  const [suppliers, setSuppliers] = useState(initialSuppliers)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault()
    setSuppliers([
      ...suppliers,
      { id: suppliers.length + 1, ...form },
    ])
    setForm({ name: "", email: "", phone: "", address: "" })
    setOpen(false)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full max-w-screen">
        <AppSidebar />
        <main className="flex-1 p-8 pt-4 w-screen">
          <SidebarTrigger />
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold">SUPPLIER</h2>
            <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
      <Button style={{background:'oklch(34.5% 19.3% 215.3)'}}>
  Add Supplier
</Button>

      </SheetTrigger>
      <SheetContent side="right">
                  
<AddSupplierForm
  open={open}
  setOpen={setOpen}
  form={form}
  handleInput={handleInput}
  handleAddSupplier={handleAddSupplier}
  handleCheckbox={()=>
    {
      setForm((prev)=>({...prev,sameAsBilling:!form.sameAsBilling}))
    }
  }
  handleFile={()=>{}}
  handleSelect={()=>{}}
/>
      </SheetContent>
    </Sheet>
          </div>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((s) => (
                <TableRow key={s.id}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.phone}</TableCell>
                  <TableCell>{s.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </SidebarProvider>
  )
}
