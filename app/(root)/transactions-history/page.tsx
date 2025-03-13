'use client'

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDownUp,
  Banknote,
  Briefcase,
  Car,
  CheckCircle2,
  Coffee,
  DollarSign,
  Gift,
  Home,
  Music,
  ShoppingCart,
  Tv,
  Utensils,
  Wifi
} from 'lucide-react';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  status: 'Success' | 'Pending' | 'Failed'; // Changed to 'Success'
  date: string;
  type: 'Income' | 'Withdrawal' | 'Transfer' | 'Payment' | 'Subscription' | 'Utilities';
}

// Icon mapping
const transactionIcons = {
  Income: <Banknote className="w-5 h-5 mr-2" />,
  Withdrawal: <DollarSign className="w-5 h-5 mr-2" />,
  Transfer: <ArrowDownUp className="w-5 h-5 mr-2" />,
  Payment: <CheckCircle2 className="w-5 h-5 mr-2" />,
  Subscription: <Tv className="w-5 h-5 mr-2" />,
  Groceries: <ShoppingCart className="w-5 h-5 mr-2" />,
  Salary: <Briefcase className="w-5 h-5 mr-2" />,
  Entertainment: <Music className="w-5 h-5 mr-2" />,
  Utilities: <Wifi className="w-5 h-5 mr-2" />,
  Transportation: <Car className="w-5 h-5 mr-2" />,
  Dining: <Utensils className="w-5 h-5 mr-2" />,
  Coffee: <Coffee className="w-5 h-5 mr-2" />,
  Rent: <Home className="w-5 h-5 mr-2" />,
  Bonus: <Gift className="w-5 h-5 mr-2" />,
};

// Sample transactions
const initialTransactions: Transaction[] = [
  { id: '1', description: 'Withdrawal', amount: -450000, status: 'Failed', date: '2024-03-01', type: 'Withdrawal' },
  { id: '2', description: 'Deposit', amount: 5768900, status: 'Success', date: '2024-03-02', type: 'Income' },
  { id: '3', description: 'Deposit', amount: 32980622, status: 'Success', date: '2024-03-02', type: 'Income' },
  { id: '4', description: 'Electricity Bill', amount: -3285.50, status: 'Success', date: '2024-03-04', type: 'Utilities' },
  { id: '5', description: 'Freelance Payment', amount: -23500, status: 'Success', date: '2024-03-05', type: 'Payment' },
  { id: '6', description: 'Groceries', amount: 1234.75, status: 'Success', date: '2024-03-05', type: 'Dining' },
  { id: '7', description: 'Car Maintenance', amount: -450, status: 'Pending', date: '2024-03-06', type: 'Withdrawal' },
  { id: '8', description: 'Investment Transfer', amount: 100000, status: 'Success', date: '2024-03-07', type: 'Transfer' },
  { id: '9', description: 'Bonus Payment', amount: 11500, status: 'Success', date: '2024-03-08', type: 'Income' },
  { id: '10', description: 'Internet Bill', amount: -75, status: 'Failed', date: '2024-03-09', type: 'Utilities' },
  { id: '11', description: 'Deposit', amount: 1267575, status: 'Failed', date: '2024-03-09', type: 'Income' },
  // ...Array.from({ length: 11 }, (_, i) => ({
  //   id: (i + 11).toString(),
  //   description: `Transaction ${i + 11}`,
  //   amount: Math.random() * 1000 * (Math.random() > 0.5 ? 1 : -1),
  //   status: ['Success', 'Pending', 'Failed'][Math.floor(Math.random() * 3)] as 'Success' | 'Pending' | 'Failed',
  //   date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
  //   type: ['Deposit', 'Withdrawal', 'Transfer', 'Payment', 'Subscription'][Math.floor(Math.random() * 5)] as any
  // }))
];

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = initialTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(initialTransactions.length / transactionsPerPage);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border shadow-sm">
            <Table>
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="w-[300px]">Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        {transactionIcons[transaction.type] || <DollarSign className="w-5 h-5 mr-2" />}
                        {transaction.description}
                      </div>
                    </TableCell>
                    <TableCell className={transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={`
                          capitalize cursor-default
                          ${transaction.status === 'Success' ? 'bg-green-500/20 text-green-600' :
                            transaction.status === 'Pending' ? 'bg-blue-500/20 text-blue-600' :
                            'bg-red-500/20 text-red-600'}
                        `}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {transaction.type}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-between items-center gap-4">
            <Button
              variant="outline"
              className="shadow-sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  className="h-8 w-8 p-0 shadow-sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              className="shadow-sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}