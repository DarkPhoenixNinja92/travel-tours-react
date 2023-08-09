const TourCard = ( { tours } ) => {
    const { id, title, text, price, img } = tours;
    return (
        <section className="card">
            <img src={img} alt="" />
            <p className={`cost cost-${id}`}>{price}</p>
            <h2 className="title">{title}</h2>
            <p className="txt">{text}</p>
        </section>
    )
}

export default TourCard;