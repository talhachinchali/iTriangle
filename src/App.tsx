import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import Dashboard from "./pages/dashboard"
import {LoginForm} from "@/components/login-form"
import Suppliers from "./pages/suppliers"
export default function Page() {
  return (
    <Router>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          } as React.CSSProperties
        }
      >
        <Routes>
          {/* Dashboard page */}
          <Route
            path="/"
            element={
              <>
                <AppSidebar variant="inset" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <AppSidebar variant="inset" />
                <Dashboard />
              </>
            }
          />
           <Route
            path="/suppliers"
            element={
              <>
                <AppSidebar variant="inset" />
                <Suppliers />
              </>
            }
          />

          {/* Login page */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </SidebarProvider>
    </Router>
  )
}
