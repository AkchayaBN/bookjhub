import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderTracking: React.FC = () => {
  const orders = [
    {
      id: 'ORD-2024-001234',
      date: 'January 15, 2024',
      status: 'Delivered',
      items: ['The Great Gatsby', 'To Kill a Mockingbird'],
      total: 34.98,
    },
    {
      id: 'ORD-2024-001189',
      date: 'January 10, 2024',
      status: 'In Transit',
      items: ['1984', 'Brave New World', 'Fahrenheit 451'],
      total: 47.97,
    },
    {
      id: 'ORD-2024-001156',
      date: 'January 5, 2024',
      status: 'Processing',
      items: ['Pride and Prejudice'],
      total: 14.99,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'In Transit':
        return <Truck className="w-5 h-5 text-blue-600" />;
      case 'Processing':
        return <Clock className="w-5 h-5 text-orange-600" />;
      default:
        return <Package className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Order Tracking</h1>
          <p className="text-muted-foreground mb-8">
            Track the status of your orders and view order history.
          </p>

          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(order.status)}
                      <div>
                        <CardTitle className="text-lg">{order.id}</CardTitle>
                        <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Items:</p>
                      <p className="text-muted-foreground">{order.items.join(', ')}</p>
                    </div>
                    <p className="text-lg font-semibold">${order.total.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;
