import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
	name: Yup.string()
		.matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
		.min(3, "Too short")
		.max(50, "Too long")
		.required("Required"),
	number: Yup.string()
		.matches(
			/^[0-9\-]{7,}$/,
			"Number must contain at least 7 digits and may include dashes"
		)
		.required("Required"),
});

export default function ContactForm({ onAddContact }) {
	const nameId = useId();
	const numberId = useId();

	const generateId = () => {
		return Date.now();
	};

	return (
		<Formik
			initialValues={{ name: "", number: "" }}
			validationSchema={validationSchema}
			onSubmit={(values, { resetForm }) => {
				const newContact = { id: generateId(), ...values };
				onAddContact(newContact);
				resetForm();
			}}
		>
			{({ isSubmitting }) => (
				<Form className={css.formContainer}>
					<label htmlFor={nameId}>Name:</label>
					<Field type="text" id={nameId} name="name" />
					<ErrorMessage name="name" component="div" />

					<label htmlFor={numberId}>Number:</label>
					<Field type="text" id={numberId} name="number" />
					<ErrorMessage name="number" component="div" />

					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Adding..." : "Add contact"}
					</button>
				</Form>
			)}
		</Formik>
	);
}
