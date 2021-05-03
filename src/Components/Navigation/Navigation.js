const Navigation = ({ route, isSignedIn, onRouteChange }) => {
	if(isSignedIn){
		return(
			<nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
				<p 
					onClick={() => onRouteChange('signin')}
					className='f3 link dim black underline pa3 pointer'
				>
				Sign Out
				</p>
			</nav>
		);
	} else {
		if(route === 'register'){
			return(
				<nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
					<p 
						onClick={() => onRouteChange('signin')}
						className='f3 link dim black underline pa3 pointer'
					>
					Signin
					</p>
				</nav>
		 	);
		} else{
			return(
				<nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
					<p 
						onClick={() => onRouteChange('register')}
						className='f3 link dim black underline pa3 pointer'
					>
					Register
					</p>
				</nav>
			);
		}
	}
}

export default Navigation;