



const Card = (props) => {

    const {largeImageURL, likes, views} = props?.dataInfo;

    return (
        <div className="card-container">
            <img src={largeImageURL} alt="images" />
            <div className="toogle">
            <span class="material-symbols-outlined">
                favorite
            </span> {likes}
            </div>
        </div>
    )
}

export default Card;