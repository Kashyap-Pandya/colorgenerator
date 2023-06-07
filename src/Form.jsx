import { useState } from "react";

const Form = ({ addColor }) => {
	const [color, setColor] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor(color);
		console.log("form submitted");
	};
	return (
		<section className='container'>
			<h4>Color Generator</h4>
			<form className='color-form' onSubmit={handleSubmit}>
				<input
					type='color'
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
				<input
					type='text'
					value={color}
					placeholder='#a4a4db'
					onChange={(e) => setColor(e.target.value)}
				/>
				<button
					type='submit'
					style={{ background: color }}
					className='btn'
				>
					Generate
				</button>
			</form>
		</section>
	);
};
export default Form;
