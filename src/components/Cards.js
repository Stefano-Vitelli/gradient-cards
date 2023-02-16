import Card from "./Card";
import image1 from "../assets/ImageN1.jpg";
import image2 from "../assets/ImageN2.jpg";
import image3 from "../assets/ImageN3.jpg";

const Cards = () => {
  const cards = [
    {
      id: "1",
      title: "Stef Web",
      image: image1,
      url: "http://www.stefano-vitelli.com"
    },
    {
      id: "2",
      title: "Marcos Web",
      image: image2,
      url: "http://www.stefano-vitelli.com"
    },
    {
      id: "3",
      title: "Daro Web",
      image: image3,
      url: "http://www.stefano-vitelli.com"
    },
  ];
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) =>
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} image={card.image} url={card.url} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
