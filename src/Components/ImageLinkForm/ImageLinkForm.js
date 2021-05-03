import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f3'>
				{'this will detect face from an image.'}
			</p>
			<div className='center'>
				<div className='center form pa3 br3 shadow-5'>
					<input 
						onChange={onInputChange}
						type='text' 
						className='f4 pa2 w-70 center'
					/>
					<button 
						onClick={onButtonSubmit}
						className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple
						'>Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;