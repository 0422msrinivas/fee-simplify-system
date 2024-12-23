import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard } from "lucide-react";

const StudentPay = () => {
  return (
    <div className="space-y-8 page-transition">
      <div>
        <h1 className="text-3xl font-bold">Make Payment</h1>
        <p className="text-gray-500 mt-2">Pay your fees securely online</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Fee Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose fee type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tuition">Tuition Fee</SelectItem>
                <SelectItem value="hostel">Hostel Fee</SelectItem>
                <SelectItem value="transport">Transport Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <Input type="number" placeholder="Enter amount" />
          </div>

          <Button className="w-full">Proceed to Pay</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentPay;