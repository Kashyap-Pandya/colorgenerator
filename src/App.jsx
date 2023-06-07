import { useState } from "react";
import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";

function App() {
	const [colors, setColors] = useState(new Values("#a4a4db").all(10));
	console.log(new Values("#E6E6FA").all(10));

	const addColor = (color) => {
		try {
			const newColors = new Values(color).all(10);
			setColors(newColors);
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<main>
			<Form addColor={addColor} />
			<ColorList colors={colors} />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</main>
	);
}

export default App;
