import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
	const { hex, weight } = color;

	const handleSaveToClipboard = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(hex);
				toast.success(` #${hex} Color saved to clipboard`);
			} catch (error) {
				toast.error(
					"Permission denied, please give permission to clipboard"
				);
			}
		} else {
			toast.error("Couldn't save to the clipboard");
		}
	};
	return (
		<article
			onClick={handleSaveToClipboard}
			style={{ background: `#${hex}` }}
			className={index > 10 ? "color color-light" : "color"}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>#{hex}</p>
		</article>
	);
};
export default SingleColor;
