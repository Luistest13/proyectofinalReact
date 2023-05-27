import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h5 className="ItemHeader">{name}</h5>
      </header>
      <picture>
        <img src={img} alt="name" className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio ${price}</p>
        <p className="id">ID {id}</p>
        <p className="Info">Stock Disponible {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          <Button variant="primary">Ver Detalle</Button>
        </Link>
      </footer>
    </article>
  );
};

export default Item;

// Codigo incorrecto//

// import Card from "react-bootstrap/Card";

// const Item = ({ id, name, img, price, stock }) => {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <img src={img} alt={name} style={{ height: "10rem" }} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>Precio: ${price}</Card.Text>
//         <Card.Text>Codigo: {id}</Card.Text>
//         <Card.Text>Stock disponible: {stock}</Card.Text>
//         <a href={"/item/${Id"} className="Option">
//           ver detalle
//         </a>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Item;

// import Card from "react-bootstrap/Card";

// const Item = ({ id, name, img, price, stock }) => {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{img}</Card.Title>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>Precio : ${price}</Card.Text>
//         <Card.Text>Codigo: {id}</Card.Text>
//         <Card.Text>Stock disponible: ${stock}</Card.Text>
//         <button>Ver detalles</button>
//       </Card.Body>
//     </Card>
//   );
// };
// export default Item;

// const Item = ({ id, name, img, price, stock }) => {
//   return (
//     <article className="CardItem">
//       <header className="Header">
//         <h2 className="ItemHeader">{name}</h2>
//       </header>
//       <picture>
//         <img src={img} alt={name} className="ItemImg" />
//       </picture>
//       <section>
//         <p className="Info">Precio : ${price}</p>
//         <p className="Info">Stock disponible: ${stock}</p>
//       </section>
//       <footer className="ItemFooter">
//         <button className="Option">Ver detalles</button>
//       </footer>
//     </article>
//   );
// };

// export default Item;
