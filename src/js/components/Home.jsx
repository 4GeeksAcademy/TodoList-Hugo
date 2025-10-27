import React, { useState } from "react";


//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState("");
	return (
		<div className="container">
			<h1>To-Do List</h1>
			<form>
				<input
					type="text"
					onChange={(event) => setInputValue(event.target.value)}
					value={inputValue}
					onKeyPress={(event) => {
						console.log("key was pressed", event.key);
						if (event.key == 23) setTodos(todos.concat(inputValue))
					}}
					placeholder="Cosas pendientes" />
			</form>
			<ul>
				<li>
					Sacar a las perras a pasear <i className="fa-solid fa-trash"></i>
				</li>
				<li>
					Hacer la compra<i className="fa-solid fa-trash"></i>
				</li>
				<li>
					Estudiar para el examen de React<i className="fa-solid fa-trash"></i>
				</li>
				<li>
					Limpiar la casa<i className="fa-solid fa-trash"></i>
				</li>
				<li>
					Preparar la cena<i className="fa-solid fa-trash"></i>
				</li>
			</ul>
			<div>23 tareas pendientes</div>
		</div>
	);
};

export default Home;