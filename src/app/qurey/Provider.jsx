"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function RTKProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools /> {/* Optional: Devtools for debugging */}
    </QueryClientProvider>
  );
}

export default RTKProvider;
