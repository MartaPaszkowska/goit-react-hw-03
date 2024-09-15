import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import contactsData from "../contacts.json"; // Importowanie kontaktów z pliku JSON
import "./App.css";

function App() {
	// Inicjalizacja kontaktów
	const [contacts, setContacts] = useState(() => {
		// Sprawdzamy, czy istnieją kontakty w Local Storage
		const savedContacts = localStorage.getItem("contacts");
		// Jeśli są, zwracamy je, a jeśli nie ma, ładujemy dane z pliku JSON
		return savedContacts ? JSON.parse(savedContacts) : contactsData;
	});

	const [filter, setFilter] = useState("");

	// Zapisujemy kontakty do Local Storage przy każdej zmianie
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
		<div className="app-container">
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

export default App;
