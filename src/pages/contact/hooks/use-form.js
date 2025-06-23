import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useContactForm() {
	const [char, setChar] = useState(0);

	const emailRegex = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;

	const formSchema = z.object({
		email: z
			.string()
			.min(1, { message: "You Should Enter Your Email" })
			.email({ message: "Invalid Email" })
			.regex(emailRegex, { message: "example email: xxxx@xx.xx" }),
		name: z
			.string()
			.min(1, { message: "You Should Enter Your Name" })
			.min(3, { message: "Your Name Should Be At Least 3 Characters" }),
		message: z
			.string()
			.min(1, { message: "Your Message is Empty" })
			.max(500, { message: "Maximum Characters is 500" }),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			name,
			message: "",
		},
	});

	useEffect(() => {
		if (localStorage.name) setValue("name", localStorage.name);
		if (localStorage.email) setValue("email", localStorage.email);
		if (localStorage.message) {
			setValue("message", localStorage.message);
			setChar(localStorage.message.length);
		}
	}, []);

	const onSubmit = (values) => {
		window.alert(`Thank You ${values.name} for your message `);
		reset();
		setChar(0);
	};

	return { char, register, handleSubmit, onSubmit, errors, setChar };
}
