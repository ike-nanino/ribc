'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

interface Transaction {
  id: string;
  date: string;
  title: string;
  amount: number;
  type: "expense" | "income";
  category: string;
  balance: number;
}

 function TransactionSidebar() {
  const [selectedTab, setSelectedTab] = useState<"all" | "expense" | "income">("all");

  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2024-03-1",
      title: "Deposit",
      amount: 5768900,
      type: "income",
      category: "Transfer",
      balance: 5768900,
    },
   
    {
      id: "2",
      date: "2024-03-1",
      title: "Deposit",
      amount: 3298062,
      type: "income",
      category: "Transfer",
      balance: 32980622,
    },
   
    {
      id: "3",
      date: "2024-01-04",
      title: "Car Maintenance",
      amount: 450,
      type: "expense",
      category: "Payment",
      balance: 450,
    },
   
    {
      id: "5",
      date: "2024-01-03",
      title: "Electricity Bill",
      amount: 3280.50,
      type: "expense",
      category: "Utility",
      balance: 3280.50,
    },

    {
      id: "6",
      date: "2022-01-02",
      title: "Groceries",
      amount: 1234.75,
      type: "expense",
      category: "Cafe and Restaurant",
      balance: 1234.75,
    },
   
  ];

  const filteredTransactions = transactions.filter((t) =>
    selectedTab === "all" ? true : t.type === selectedTab
  );

  const groupedTransactions = filteredTransactions.reduce((groups, t) => {
    const date = new Date(t.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    if (!groups[date]) groups[date] = [];
    groups[date].push(t);
    return groups;
  }, {} as Record<string, Transaction[]>);

  return (
    <div className="hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll p-6">

      <div className='flex justify-between items-center'>
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>

       <div className='px-3 py-2 mb-3 rounded-lg border bg-white/50'>
       <h6 className='text-sm font-semibold cursor-pointer'>View All</h6>
       </div>
      
      </div>
      
      
      <Tabs value={selectedTab} onValueChange={(v) => setSelectedTab(v as any)}>
        <TabsList className="grid grid-cols-3 w-full mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="expense">Expenses</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
        </TabsList>

        <div className="space-y-8">
          {Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date}>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {date}
              </h3>
              <div className="space-y-4">
                {transactions.map((t) => (
                  <div key={t.id} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{t.title}</span>
                      <span
                        className={
                          t.type === "expense"
                            ? "text-destructive"
                            : "text-green-600"
                        }
                      >
                        {t.type === "expense" ? "-" : "+"}${t.amount.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.category}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.balance.toLocaleString("en-US", {
                        style: "decimal",
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
export default TransactionSidebar;