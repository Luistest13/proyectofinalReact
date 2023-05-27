import Card from "react-bootstrap/Card";

import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((prod) => (
          <div key={prod.id} className="col-md-4 mb-4">
            <Item {...prod} />
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={products.find((item) => item.id === prod.id).image}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

// Codigo incorrecto//

// import Item from "../Item/Item";

// const ItemList = ({ products }) => {
//   return (
//     <div className="ListGroup">
//       {products.map((prod) => (
//         <Item key={prod.id} {...prod} />
//       ))}
//     </div>
//   );
// };

// export default ItemList;
