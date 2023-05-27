import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;

// import { useEffect, useState } from "react";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../services/firebase/firebaseConfig";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const { itemId } = useParams();

//   useEffect(() => {
//     setLoading(true);

//     const docRef = doc(db, "products", itemId);

//     getDoc(docRef)
//       .then((response) => {
//         const data = response.data();
//         const productAdapted = { id: response.id, ...data };
//         setProduct(productAdapted);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [itemId]);

//   return (
//     <div className="ItemDetailContainer">
//       {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
//     </div>
//   );
// };

// export default ItemDetailContainer;

/// uno mas

// import { useEffect, useState } from "react";
// import { getProductByid } from "../../asyncMock";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState(null);

//   const { itemId } = useParams();

//   useEffect(() => {
//     getProductByid(itemId)
//       .then((response) => {
//         setProduct(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [itemId]);

//   return (
//     <div className="ItemDetailContainer">
//       <ItemDetail {...product} />
//     </div>
//   );
// };

// export default ItemDetailContainer;

// Codigo incorrecto//

// import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncMock";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState(null);

//   const { itemId } = useParams();

//   useEffect(() => {
//     getProductById("itemId")
//       .then((response) => {
//         setProduct(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [itemId]);

//   return (
//     <div className="ItemDetailContainer">
//       <ItemDetail {...product} />
//     </div>
//   );
// };

// export default ItemDetailContainer;
