import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminStudents from "./pages/admin/Students";
import AdminCourses from "./pages/admin/Courses";
import AdminFees from "./pages/admin/Fees";
import AdminReports from "./pages/admin/Reports";
import StudentDashboard from "./pages/student/Dashboard";
import StudentPay from "./pages/student/Pay";
import StudentHistory from "./pages/student/History";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Layout isAdmin><AdminDashboard /></Layout>} />
          <Route path="/admin/students" element={<Layout isAdmin><AdminStudents /></Layout>} />
          <Route path="/admin/courses" element={<Layout isAdmin><AdminCourses /></Layout>} />
          <Route path="/admin/fees" element={<Layout isAdmin><AdminFees /></Layout>} />
          <Route path="/admin/reports" element={<Layout isAdmin><AdminReports /></Layout>} />
          
          {/* Student Routes */}
          <Route path="/student" element={<Layout><StudentDashboard /></Layout>} />
          <Route path="/student/pay" element={<Layout><StudentPay /></Layout>} />
          <Route path="/student/history" element={<Layout><StudentHistory /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;