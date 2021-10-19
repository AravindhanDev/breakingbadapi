import React from "react";

const Card = ({ item }) => {
	return (
		<div className="card">
			<img src={item.img} className="card-img-top" alt="Avatar" />
			<div className="card-body">
				<h4 className="card-title">
					<span className="badge bg-secondary">{item.name}</span>
				</h4>
				<p className="card-text">{item.occupation[0]}</p>
				<p className="card-text">{item.nickname}</p>
				<p className="card-text">{item.portrayed}</p>
			</div>
		</div>
	);
};

export default Card;
