import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, TrendingUp, Activity, Brain } from "lucide-react";
import { Button } from "./button";

interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  status: "approved" | "blocked" | "flagged";
  riskScore: number;
  timestamp: string;
}

export default function InteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [stats, setStats] = useState({
    approved: 0,
    blocked: 0,
    flagged: 0,
    totalProcessed: 0,
  });

  const merchants = ["Amazon", "Netflix", "Uber", "Apple", "Spotify", "PayPal", "Stripe", "Square"];
  
  const generateTransaction = (): Transaction => {
    const amount = Math.floor(Math.random() * 2000) + 10;
    const riskScore = Math.random();
    const merchant = merchants[Math.floor(Math.random() * merchants.length)];
    
    let status: "approved" | "blocked" | "flagged" = "approved";
    if (riskScore > 0.8) status = "blocked";
    else if (riskScore > 0.6) status = "flagged";
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      amount,
      merchant,
      status,
      riskScore,
      timestamp: new Date().toLocaleTimeString(),
    };
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newTransaction = generateTransaction();
      
      setTransactions(prev => {
        const updated = [newTransaction, ...prev].slice(0, 5);
        return updated;
      });

      setStats(prev => ({
        ...prev,
        [newTransaction.status]: prev[newTransaction.status] + 1,
        totalProcessed: prev.totalProcessed + 1,
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, [isRunning]);

  const resetDemo = () => {
    setTransactions([]);
    setStats({ approved: 0, blocked: 0, flagged: 0, totalProcessed: 0 });
    setIsRunning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "blocked": return <Shield className="w-4 h-4 text-red-500" />;
      case "flagged": return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "border-green-200 bg-green-50";
      case "blocked": return "border-red-200 bg-red-50";
      case "flagged": return "border-yellow-200 bg-yellow-50";
      default: return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="bg-fintech-blue/10 rounded-lg p-3">
            <Brain className="w-6 h-6 text-fintech-blue" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Live Fraud Detection Demo</h3>
            <p className="text-gray-600">Watch AI analyze transactions in real-time</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button 
            onClick={() => setIsRunning(!isRunning)}
            className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-fintech-blue hover:bg-fintech-blue/90"}
          >
            {isRunning ? "Stop Demo" : "Start Demo"}
          </Button>
          <Button variant="outline" onClick={resetDemo}>
            Reset
          </Button>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div 
          className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
          <div className="text-sm text-green-600">Approved</div>
        </motion.div>
        <motion.div 
          className="bg-red-50 border border-red-200 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl font-bold text-red-600">{stats.blocked}</div>
          <div className="text-sm text-red-600">Blocked</div>
        </motion.div>
        <motion.div 
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl font-bold text-yellow-600">{stats.flagged}</div>
          <div className="text-sm text-yellow-600">Flagged</div>
        </motion.div>
        <motion.div 
          className="bg-fintech-blue/5 border border-fintech-blue/20 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl font-bold text-fintech-blue">{stats.totalProcessed}</div>
          <div className="text-sm text-fintech-blue">Total</div>
        </motion.div>
      </div>

      {/* Live Transaction Feed */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="w-5 h-5 text-fintech-blue" />
          <h4 className="font-semibold text-gray-900">Live Transaction Feed</h4>
          {isRunning && (
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
        
        <AnimatePresence mode="popLayout">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={`border rounded-lg p-4 ${getStatusColor(transaction.status)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(transaction.status)}
                  <div>
                    <div className="font-medium text-gray-900">
                      ${transaction.amount.toLocaleString()} - {transaction.merchant}
                    </div>
                    <div className="text-sm text-gray-500">{transaction.timestamp}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium capitalize ${
                    transaction.status === 'approved' ? 'text-green-600' :
                    transaction.status === 'blocked' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {transaction.status}
                  </div>
                  <div className="text-xs text-gray-500">
                    Risk: {(transaction.riskScore * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {transactions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            {isRunning ? "Processing transactions..." : "Click 'Start Demo' to see live fraud detection"}
          </div>
        )}
      </div>
    </div>
  );
}