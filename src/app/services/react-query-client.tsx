"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryclient = new QueryClient();

function ReactQueryClient({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryclient} contextSharing={true}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
export default ReactQueryClient;
