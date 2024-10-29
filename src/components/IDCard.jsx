import '../assets/css/IDCard.css';

function IDCard({ lastName, firstName, gender, height, birth, picture }) {
	return (
		<div className='id-card-container'>
			<div className='image-container'>
				<img src={picture} alt='' />
			</div>
			<ul className='info-container'>
				<li>
					<p>
						First name: <span>{firstName}</span>
					</p>
				</li>
				<li>
					<p>
						Last name: <span>{lastName}</span>
					</p>
				</li>
				<li>
					<p>
						Gender: <span>{gender}</span>
					</p>
				</li>
				<li>
					<p>
						Height: <span>{height}m</span>
					</p>
				</li>
				<li>
					<p>
						Birth: <span>{birth.toDateString()}</span>
					</p>
				</li>
			</ul>
		</div>
	);
}

export default IDCard;