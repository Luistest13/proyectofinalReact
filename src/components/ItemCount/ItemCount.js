import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity < stock) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <Button variant="primary" className="decrement" onClick={decrement}>
          -
        </Button>
        <h4 className="Number">{quantity}</h4>
        <Button variant="primary" className="increment" onClick={increment}>
          +
        </Button>
      </div>

      <div>
        <Button
          variant="primary"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;

// Codigo incorrecto//

// import { useState } from "react";
// import { Button } from "react-bootstrap";

// const ItemCount = ({ stock, initial, onAdd }) => {
//   const [quantity, setQuantity] = useState(initial);
//   const increment = () => {
//     if (quantity < stock) {
//       setQuantity(quantity + 1);
//     }
//   };
//   const decrement = () => {
//     if (quantity < stock) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="Counter">
//       <div className="Controls">
//         <Button variant="dark" onClick={decrement}>
//           -
//         </Button>
//         <h4 className="Number">{quantity}</h4>
//         <Button variant="dark" onClick={increment}>
//           +
//         </Button>
//       </div>

//       <div>
//         <Button
//           variant="dark"
//           onClick={() => onAdd(quantity)}
//           disabled={!stock}
//         >
//           agregar al carrito
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ItemCount;
