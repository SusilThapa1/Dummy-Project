"use client";

import { useState } from "react";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <div className="flex  h-screen-minus-128  overflow-hidden">
        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
