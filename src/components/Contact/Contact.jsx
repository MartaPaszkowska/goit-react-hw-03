import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
	return (
		<li className={css.contactItem}>
			<div>
				<p>{contact.name}</p>
				<p>{contact.number}</p>
			</div>
			<button
				onClick={() => {
					onDelete(contact.id);
				}}
			>
				Delete
			</button>
		</li>
	);
}
