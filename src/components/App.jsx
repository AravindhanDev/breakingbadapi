import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("https://breakingbadapi.com/api/characters/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setItems(data);
			});
	}, []);

	return (
		<>
			<header className="alert alert-secondary">
				<i class="far fa-id-badge"></i> The Breaking Bad API
			</header>
			<div className="App">
				{items.map((item, index) => {
					return <Card item={item} key={index} />;
				})}
			</div>
			<footer>Made with Love by Noobie</footer>
		</>
	);
}

export default App;
