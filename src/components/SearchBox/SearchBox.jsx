import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
	return (
		<div className={css.sContainer}>
			<label>Find contacts by name:</label>
			<input type="text" value={value} onChange={onSearch} />
		</div>
	);
}
