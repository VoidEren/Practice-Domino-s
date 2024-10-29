import GuestLayout from "@/Layouts/GuestLayout";
import { Head, router } from "@inertiajs/react";
import { useEffect } from "react";
import PizzaStatus from "@/Pages/Pizzas/Partials/PizzaStatus.jsx";

export default function Show({ pizza }) {
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ["pizza"] });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg rounded-lg">
            <div className="flex flex-col items-center justify-center py-8">
                <svg
                    className="w-24 h-24 animate-bounce text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M0 0h512v512H0z"
                        fill="currentColor"
                        fillOpacity="0.1"
                    ></path>
                    <g transform="translate(0,0)">
                        <path
                            d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
                            fill="currentColor"
                            fillOpacity="1"
                        ></path>
                    </g>
                </svg>
                <h1 className="text-2xl font-bold text-gray-700 mt-4">
                    Order #{pizza.id}
                </h1>
            </div>

            <Head title={`Order #${pizza.id}`} />

            <div className="mt-6">
                <PizzaStatus currentStatus={pizza.status}></PizzaStatus>
            </div>

            <div className="mt-8 text-center">
                <p className="text-lg text-gray-600">
                    <span className="font-bold text-blue-700">
                        {pizza.chef}
                    </span>{" "}
                    started
                    <span className="font-semibold text-indigo-600 mx-1">
                        {pizza.status.toLowerCase()}
                    </span>
                    your order on{" "}
                    <span className="underline text-blue-500 font-medium">
                        {pizza.last_updated}
                    </span>
                </p>
            </div>
        </div>
    );
}
