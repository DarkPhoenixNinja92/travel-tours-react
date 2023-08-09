const TourCard = ( { tours } ) => {
    const { title, text, price, img } = tours;
    return (
        <section className="card">
            <img src={img} alt="" />
            <p className="cost">{price}</p>
            <h2 className="title">{title}</h2>
            <p className="txt">{text}</p>
        </section>
    )
}

export default TourCard;