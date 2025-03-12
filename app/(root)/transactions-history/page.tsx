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

interface Transaction {
  company: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
  category: string;
}

// Generate 21 sample transactions with company names
const companies = ['Netflix', 'Spotify', 'Amazon', 'Google', 'Apple', 'Microsoft', 'Adobe'];
const transactions: Transaction[] = Array.from({ length: 21 }, (_, i) => ({
  company: companies[Math.floor(Math.random() * companies.length)],
  amount: Math.random() * 1000,
  status: ['Completed', 'Pending', 'Failed'][Math.floor(Math.random() * 3)] as 'Completed' | 'Pending' | 'Failed',
  date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }),
  category: ['Subscription', 'Music', 'Shopping', 'Software', 'Services'][Math.floor(Math.random() * 5)]
}));

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Pagination calculations
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

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
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentTransactions.map((transaction, index) => (
                  <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{transaction.company}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge 
                        className={`
                          capitalize cursor-default
                          ${transaction.status === 'Completed' ? 'bg-green-500/20 text-green-600 hover:bg-green-500/20' :
                            transaction.status === 'Pending' ? 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/20' :
                            'bg-red-500/20 text-red-600 hover:bg-red-500/20'}
                        `}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Enhanced Pagination */}
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