import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Receipt, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 page-transition">
      <div>
        <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
        <p className="text-gray-500 mt-2">Student ID: ST12345</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Fees
            </CardTitle>
            <CreditCard className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,000</div>
            <div className="text-sm text-gray-500 mt-1">Academic Year 2024</div>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Paid Amount
            </CardTitle>
            <Receipt className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,000</div>
            <div className="text-sm text-success mt-1">66% paid</div>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Next Payment Due
            </CardTitle>
            <Clock className="w-5 h-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,000</div>
            <div className="text-sm text-warning-dark mt-1">Due in 15 days</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Receipt className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Tuition Fee Payment</div>
                    <div className="text-sm text-gray-500">March 15, 2024</div>
                  </div>
                </div>
                <div className="text-success font-medium">$2,000</div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={() => navigate("/student/history")}
          >
            View All Transactions
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-warning-light/20 border-warning">
        <CardContent className="flex items-center space-x-4 py-4">
          <AlertCircle className="w-6 h-6 text-warning-dark flex-shrink-0" />
          <div>
            <div className="font-medium text-warning-dark">Payment Reminder</div>
            <div className="text-sm text-warning-dark/80">
              Your next payment of $2,000 is due on April 1, 2024. Please ensure timely payment to avoid late fees.
            </div>
          </div>
          <Button
            className="ml-auto flex-shrink-0"
            onClick={() => navigate("/student/pay")}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;