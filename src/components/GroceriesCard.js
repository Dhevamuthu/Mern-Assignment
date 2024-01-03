const GroceriesCard = (props) => { 

    const{name,price,offer,rating,imageUrl}=props.card_details;
    return (
      <div className='Item'>
        <img src={imageUrl} alt="img1" />
        <div className='Item-details'>
          <h2>{name}</h2>
          <p>{price}</p>
          <h3 className='offer'>{offer}</h3>
          <p>{rating}</p>
        </div>
      </div>
    );
  };

  export default GroceriesCard;