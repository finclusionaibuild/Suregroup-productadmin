import React, { Suspense, lazy } from 'react';

const ProductAdminDashboard = lazy(() => 
  import('../dashboards/ProductAdminDashboard').then(m => ({ default: m.ProductAdminDashboard }))
);

export const DashboardRouter: React.FC = () => {
  return (
    <Suspense fallback={<div className="p-6">Loading dashboard...</div>}>
      <ProductAdminDashboard />
    </Suspense>
  );
};