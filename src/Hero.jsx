import heroImg from "./assets/hero.svg";

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Duis duis proident cillum nostrud. Esse exercitation ad ad laborum
						irure sunt non duis sit anim aliqua magna. Duis excepteur excepteur
						officia laborum ipsum nulla laborum enim magna proident esse aliquip
						elit est. Irure commodo commodo non ipsum laboris in qui sit aliquip
						ea.
					</p>
				</div>
				<div className='img-container'>
					<img
						src={heroImg}
						alt='woman and the browser'
						className='img'
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
