const data = {
	title: "LEU O LIVRO E FEZ SENTIDO PARA VOCÊ?",
	call: "Compartilhe sua experiência e resultados!",
	description: "",
	cards: [{
		icon: ".",
		title: "Sua experiência com o livro",
		call: "Responder à pesquisa",
		description: "",
		buttonicon: "."
	},
	{
		icon: ".",
		title: "Fale com a autora",
		call: "Deixar uma mensagem",
		description: "",
		buttonicon: "."
	}]
}


export default function Share() {
	return (
		<div className="share-wrapper">
			<div className="section-title">
				<h1>{data.title}</h1>
				<div className="separation-bar"/>
				<h2>{data.call}</h2>
				<p>{data.description}</p>
			</div>
			<div className="cards-wrapper">
				{data.cards.map((card, index) => (
					<div className="card" key={index}>
						<div className="card-title">
							<img src={card.icon}/>
							<div className="card-title-text">
								<h1>{card.title}</h1>
								<div className="card-bar"/>
								<h2>{card.call}</h2>
							</div>
						</div>
						<p>{card.description}</p>
						<button className="card-button">
							<img src={card.buttonicon} alt="" />
							<p>{card.call}</p>
							<img src="button-icon" alt="" />	
						</button>		
					</div>
				))}

			</div>
		</div>
	)
}
