import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon, Home, Users, BookOpen, CreditCard, FileText, LogOut } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const adminNavItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/admin" },
  { icon: Users, label: "Students", path: "/admin/students" },
  { icon: BookOpen, label: "Courses", path: "/admin/courses" },
  { icon: CreditCard, label: "Fees", path: "/admin/fees" },
  { icon: FileText, label: "Reports", path: "/admin/reports" },
];

const studentNavItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/student" },
  { icon: CreditCard, label: "Pay Fees", path: "/student/pay" },
  { icon: FileText, label: "History", path: "/student/history" },
];

interface LayoutProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

const Layout = ({ children, isAdmin = false }: LayoutProps) => {
  const location = useLocation();
  const navItems = isAdmin ? adminNavItems : studentNavItems;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-primary">Fee Management</h1>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => {/* Add logout logic */}}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-100 w-full mt-auto"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;