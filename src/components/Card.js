import './cards.css'

const Card = (props) => {
  return ( 
    <div className="card text-center bg-dark ">
      <img src={props.image} alt="img"/>
      <div className="card-body text-light">
        <h4 className="card-title"> {props.title} </h4>
        <p className="card-text text-white" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <a href={props.url} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer"> Navigate </a>
      </div>
    </div>
   );
}
 
export default Card;