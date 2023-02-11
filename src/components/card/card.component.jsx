import '../card/card.styles.css'

const Card = ({ cat }) => {
    const { id, name, username } = cat;
  
    return (
      <div className='card-container'>
        <img
          alt={`cat ${name}`}
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{username}</p>
      </div>
    );
  };
  
  export default Card;