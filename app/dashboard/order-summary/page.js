import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/Authorization-check";
import OrderSummary from "./order-summary";

export default async function () {
    const session = await auth();
    return (
        <>
        <AuthorizationCheck/>
        <OrderSummary userId = {session?.user?.id} />
        </>
    )
} 