import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
	return (
		<ul className={css.contactList}>
			{contacts.map((contact) => (
				<Contact
					key={contact.id}
					contact={contact}
					onDelete={() => onDeleteContact(contact.id)}
				/>
			))}
		</ul>
	);
}
