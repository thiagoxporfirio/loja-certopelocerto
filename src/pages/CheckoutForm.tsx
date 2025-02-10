import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm: React.FC = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		// Fetch the client secret from your backend
		axios.post("http://localhost:443/create-payment-intent", {
			items: [{ id: "xl-tshirt" }]
		})
		.then((response) => {
			setClientSecret(response.data.clientSecret);
		})
		.catch((error) => {
			console.error("Error fetching client secret:", error);
		});
	}, []);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: "https://your-website.com/order/123/complete",
			},
		});

		if (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{clientSecret && (
				<PaymentElement options={{ layout: "accordion" }} />
			)}
			<button type="submit" disabled={!stripe}>
				Pagar
			</button>
		</form>
	);
};

export default CheckoutForm;
