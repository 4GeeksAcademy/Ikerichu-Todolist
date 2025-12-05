import React, { useState } from "react";


//create your first component
const Home = () => {
	const [tarea, setTarea] = useState('');
	const [listaTareas, setListaTareas] = useState([]);

	const updateTarea = (prop) => {
		const newId = listaTareas.length + 1;
		const newTarea = {
			id: newId,
			chore: prop
		}
		setListaTareas([...listaTareas, newTarea]);
		setTarea("");
		console.log(listaTareas);
	}
	const borrarTarea = (id) => {
		setListaTareas(listaTareas.filter(item => item.id !== id));
	};


	return (
		<div className="container-fluid bg-dark">
			<div className="d-flex flex-column justify-content-center align-items-center p-3 m-4 mt-0">
				<input
					className="w-50"
					type="text"
					placeholder="Type your next chore"
					value={tarea}
					onChange={(elem) => setTarea(elem.target.value)} />
				<button
					type="button"
					className="btn btn-secondary w-50 p-1 m-3"
					onClick={() => {
						updateTarea(tarea)
					}
					}>
					Add chore
				</button>


			</div>
			<div className="d-flex flex-column justify-content-center align-items-center p-3 m-4 mt-0">

				{listaTareas.map(item => (

					<div key={item.id} className="d-flex w-50 text-light bg-dark justify-content-between align-items-center m-1">
						<span><strong>{item.chore}</strong></span>
						<button
							type="button"
							className="btn btn-light text-dark p-1 flex-end"
							onClick={()=>borrarTarea(item.id)}>
							x
						</button>
					</div>
				))}



			</div>
		</div >
	);
};

export default Home;