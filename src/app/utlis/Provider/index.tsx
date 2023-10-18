import React, { ReactNode, Suspense } from "react";
import { Theme } from "../../../../public/Theme";
import { DashboardLayout } from "@src/app/layouts";
import { Loader } from "@src/app/Components";
// import ReactQueryClient from "@src/app/services/react-query-client";
import { AuthProvider } from "@src/app/context";
import CartProvider from "@src/app/context/CartContext";
function Provider({ children }: { children: ReactNode }) {
    return (
        <div>
            <Theme>
                <CartProvider>
                    <AuthProvider>
                        <DashboardLayout>
                            <Suspense fallback={<Loader />}>{children}</Suspense>
                        </DashboardLayout>
                    </AuthProvider>
                </CartProvider>
            </Theme>
        </div>
    );
}

export default Provider;
