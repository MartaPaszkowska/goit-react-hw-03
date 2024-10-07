import ContactList from "../ContactList/ContactList.jsx";
import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import css from "./App.module.css";
import { useEffect, useState } from "react";

export default function App() {
	const [contacts, setContacts] = useState(() => {
		const savedContacts = localStorage.getItem("contacts");

		return savedContacts ? JSON.parse(savedContacts) : initialContacts;
	});

	const [filter, setFilter] = useState("");

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const addContact = (newContact) => {
		setContacts([...contacts, newContact]);
	};

	const deleteContact = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	const handleSearch = (event) => {
		setFilter(event.target.value);
	};

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className={css.appContainer}>
			<h1>Phonebook</h1>
			<ContactForm onAddContact={addContact} />
			<SearchBox value={filter} onSearch={handleSearch} />
			<ContactList
				contacts={filteredContacts}
				onDeleteContact={deleteContact}
			/>
		</div>
	);
}
