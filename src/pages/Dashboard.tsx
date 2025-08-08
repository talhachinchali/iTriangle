import React, { useState } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stats = [
  { label: "Total Suppliers", value: 128 },
  { label: "Active Orders", value: 42 },
  { label: "Revenue (MoM)", value: "$24,300" },
  { label: "Pending Tickets", value: 7 },
]
const purchaseInvoices = [
  { id: 1, invoiceNo: "INV-1001", supplier: "Acme Corp", amount: "$1,200", date: "2025-08-05", status: "Paid" },
  { id: 2, invoiceNo: "INV-1002", supplier: "Globex Inc", amount: "$850", date: "2025-08-06", status: "Pending" },
  { id: 3, invoiceNo: "INV-1003", supplier: "Initech Ltd", amount: "$2,100", date: "2025-08-07", status: "Paid" },
]

const purchaseOrders = [
  { id: 1, orderNo: "PO-2001", supplier: "Acme Corp", amount: "$1,500", date: "2025-08-05", status: "Shipped" },
  { id: 2, orderNo: "PO-2002", supplier: "Globex Inc", amount: "$950", date: "2025-08-06", status: "Processing" },
  { id: 3, orderNo: "PO-2003", supplier: "Umbrella Corp", amount: "$3,100", date: "2025-08-07", status: "Delivered" },
]


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("pi")
  const renderTable = () => {
    if (activeTab === "pi") {
      return (
        <Table className="w-full mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Invoice No</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              {/* <TableHead>Status</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseInvoices.map((pi) => (
              <TableRow key={pi.id}>
                <TableCell>{pi.invoiceNo}</TableCell>
                <TableCell>{pi.supplier}</TableCell>
                <TableCell>{pi.amount}</TableCell>
                <TableCell>{pi.date}</TableCell>
                {/* <TableCell>{pi.status}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }
  
    if (activeTab === "po") {
      return (
        <Table className="w-full mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Order No</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              {/* <TableHead>Status</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseOrders.map((po) => (
              <TableRow key={po.id}>
                <TableCell>{po.orderNo}</TableCell>
                <TableCell>{po.supplier}</TableCell>
                <TableCell>{po.amount}</TableCell>
                <TableCell>{po.date}</TableCell>
                {/* <TableCell>{po.status}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }
  
    return null
  }
  

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full max-w-screen">
        <AppSidebar />
        <main className="flex-1 p-8 pt-4 w-screen">
          <SidebarTrigger />
          <h2 className="text-4xl font-bold mb-6">Dashboard</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((s) => (
              <Card key={s.label}>
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-semibold">{s.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            {/* <CardHeader>
              {/* <CardTitle>Data Tables</CardTitle> */}
            {/* </CardHeader> */}
            <CardContent>
            <Tabs defaultValue={activeTab} className="w-[40%]" onValueChange={setActiveTab}>
  <TabsList className="bg-muted p-1 rounded-md flex gap-2">
    <TabsTrigger
      value="pi"
      className="bg-transparent text-muted-foreground data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md shadow-none"
    >
      Purchase Invoice (3)
    </TabsTrigger>
    <TabsTrigger
      value="po"
      className="bg-transparent text-muted-foreground data-[state=active]:bg-white data-[state=active]:text-black px-4 py-2 rounded-md shadow-none"
    >
      Purchase Order (3)
    </TabsTrigger>
  </TabsList>
</Tabs>



              {renderTable()}
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  )
}
