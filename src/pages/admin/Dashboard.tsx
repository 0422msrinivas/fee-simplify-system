import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, CreditCard, AlertCircle } from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "2,345",
    icon: Users,
    trend: "+5.2%",
    trendUp: true,
  },
  {
    title: "Active Courses",
    value: "48",
    icon: BookOpen,
    trend: "+2.4%",
    trendUp: true,
  },
  {
    title: "Total Fees Collected",
    value: "$123,456",
    icon: CreditCard,
    trend: "+12.5%",
    trendUp: true,
  },
  {
    title: "Pending Payments",
    value: "$24,789",
    icon: AlertCircle,
    trend: "-3.8%",
    trendUp: false,
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8 page-transition">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
                <Icon className="w-5 h-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-sm mt-1 ${
                  stat.trendUp ? "text-success" : "text-destructive"
                }`}>
                  {stat.trend} from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
};

export default AdminDashboard;