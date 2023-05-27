import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = collection(db, "products");
    const queryRef = categoryId
      ? query(collectionRef, where("category", "==", categoryId))
      : collectionRef;

    getDocs(queryRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{greeting}</h2>
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

//   useEffect(() => {

//     const asyncfunc = categoryId ? getProductByid : getproducts;
//     asyncfunc(categoryId)
//       .then((response) => {
//         if (category) {
//           const filteredProducts = response.filter(
//             (product) => product.category === category
//           );
//           setProducts(filteredProducts);
//         } else {
//           setProducts(response);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [categoryId, category]);

//   return (
//     <div>
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;

// Codigo incorrecto//

// import { useState, useEffect } from "react";
// import { getProducts, getProductById } from "../../asyncMock";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([]);

//   const { priceId } = useParams();

//   useEffect(() => {
//     const asynFunc = priceId ? getProductById : getProducts;

//     asynFunc(priceId)
//       .then((response) => {
//         setProducts(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [priceId]);

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <ItemList products={products} />
//     </div>
//   );
// };
