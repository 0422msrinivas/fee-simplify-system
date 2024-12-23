import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Receipt } from "lucide-react";

const StudentHistory = () => {
  return (
    <div className="space-y-8 page-transition">
      <div>
        <h1 className="text-3xl font-bold">Payment History</h1>
        <p className="text-gray-500 mt-2">View your payment records and download receipts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="w-5 h-5" />
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Fee Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>TXN123456</TableCell>
                <TableCell>Tuition Fee</TableCell>
                <TableCell>$2,000</TableCell>
                <TableCell className="text-success">Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-02-15</TableCell>
                <TableCell>TXN123455</TableCell>
                <TableCell>Hostel Fee</TableCell>
                <TableCell>$1,000</TableCell>
                <TableCell className="text-success">Paid</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentHistory;