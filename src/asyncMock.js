const products = [
  {
    id: "1",
    name: "PC KELYX AMD RYZEN 3-3200G 8G SSD 240GB",
    price: "1700",
    category: "PC",
    img: "https://cbafederal.net/wp-content/uploads/2023/05/pc-kelyx-ryzen-320x320.jpg",
    stock: "25",
    descripcion:
      "Mother GIGABYTE A520M H 1.0 DDR4 sAM4 (9683), Proces. AMD Ryzen 3 3200G 3gen AM4 C/VIDEO (9851), Memoria DDR4 Markvision 8Gb 2400 MHz 1.20V BULK (6327)",
  },
  {
    id: "2",
    name: "PC KELYX INTEL CORE I3-10105 8G SSD 240GB (MSI)",
    price: "1199",
    category: "PC",
    img: "https://cbafederal.net/wp-content/uploads/2023/05/kelly-i3-2-320x320.jpg",
    stock: "25",
    descripcion:
      "GABINETE	409205	Kit Kelyx Modelo LC727-14 Fuente 500W T/M/P/C. Reader, MOTHER	413844	Mother MSI H510M-A PRO s1200 DDR4 (11va Gen) (2905) PROCESADOR	413666	Proces. Intel CometLake Core I3 10105 s1200 (4841), MEMORIA	414474	Memoria DDR4 Markvision 8Gb 2400 MHz 1.20V BULK (6327), DISCO	414461	Disco SSD Markvision 240GB Sata Interno BULK",
  },
  {
    id: "3",
    name: "PC KELYX INTEL CORE I3-10105 8G SSD 480GB",
    price: "1399",
    category: "PC",
    img: "https://cbafederal.net/wp-content/uploads/2023/05/kelyx-i3-320x320.jpg",
    stock: "25",
    descripcion:
      "Kit Kelyx Modelo LC728-12 Fuente 500W Tec/Mouse, Mother MSI PRO H410M-B s1200 DDR4 (10ma Gen) (7395), Proces. Intel CometLake Core I3 10105 s1200 (4841), Memoria DDR4 Markvision 8Gb 2400 MHz 1.20V BULK (6327), 	Disco SSD Markvision 480Gb Sata Interno BULK(6228)",
  },

  {
    id: "4",
    name: "PC KELYX RYZEN 5-5600G 8G SSD 960GB (MSI)",
    price: "1199",
    category: "PC",
    img: "https://cbafederal.net/wp-content/uploads/2023/05/kelyx-ryzen-5-320x320.jpg",
    stock: "25",
    descripcion:
      "Kit Kelyx Modelo LC728-12 Fuente 500W Tec/Mouse, Proces. AMD Ryzen 5 5600G 5gen AM4 CON VIDEO (3414), Memoria DDR4 Markvision 8Gb 2400 MHz 1.20V BULK (6327) ",
  },

  {
    id: "5",
    name: "PC KELYX INTEL CORE I5-11400 8G SSD 960GB (MSI)",
    price: "1150",
    category: "PC",
    img: "https://cbafederal.net/wp-content/uploads/2023/05/kely-i5-960gb-320x320.jpg",
    stock: "25",
    descripcion:
      "Kit Kelyx Modelo LC728-12 Fuente 500W Tec/Mouse, Mother MSI H510M PRO-E s1200 DDR4 (11va Gen) (3447), Proces. Intel Rocket Lake Core I5 11400 s1200 (4902), Memoria DDR4 Kingston 8Gb 3200 MHz FURY BEAST (9910), 	Disco SSD Markvision 960Gb Sata Interno BULK (9397)",
  },

  {
    id: "6",
    name: "Tablet2000",
    price: "300",
    category: "Tablets",
    img: "https://cbafederal.net/wp-content/uploads/2022/05/1CAMA1421-320x320.webp",
    stock: "25",
    descripcion: "Tablets",
  },

  {
    id: "7",
    name: "ASUS 15.6″ CELERON N4000 4GB 1TB",
    price: "1380",
    category: "Notebook",
    img: "https://cbafederal.net/wp-content/uploads/2022/06/X543MA-13-1-320x320.jpg",
    stock: "8",
    descripcion:
      "Modelo	90NB0IR6-M003S0 Nº Parte X543MA-GQ1381 Pantalla	15.6 HD (1366 x 768) 16 Procesador	Intel® Celeron® N4020 Processor 1.1 GHz (4M Cache, up to 2.8 GHz, 2 cores) Memoria	4GB DDR4 (on board) NO PERMITE AMPLIACION Disco	1TB SATA 5400RPM 2.5 HDDVGA	no posee S.O.	Endless Otros	posee teclado numerico Otros	NO tiene puerto de re Otros	NO tiene puerto m.2",
  },
  {
    id: "8",
    name: "Lenovo ThinkPad T14 14″ i5-1135G7 8GB RAM 256SSD WIN 10P",
    price: "1400",
    category: "Notebook",
    img: "https://cbafederal.net/wp-content/uploads/2022/09/23n4234er-320x320.png",
    stock: "8",
    descripcion:
      "ProcesadorCore I5 Mod. procesador1135G7 Memoria Disco rígidoNO Disco SSDSI Memoria ram8 GB Tipo de discoSSD Sistema Operativo Sistema operativoWINDOWS 10 PRO Imagen Tamaño de pantalla14 pulgadas Resolución de pantalla1920 X 1080",
  },
  {
    id: "9",
    name: "Lenovo ThinkPad T14 14″ i5-1135G7 8GB RAM 256SSD WIN 10P",
    price: "1480",
    category: "Notebook",
    img: "https://cbafederal.net/wp-content/uploads/2022/09/23n4234er-320x320.png",
    stock: "8",
    descripcion:
      "ProcesadorCore I5 Mod. procesador1135G7 Memoria Disco rígidoNO Disco SSDSI Memoria ram8 GB Tipo de discoSSD Sistema Operativo Sistema operativoWINDOWS 10 PRO Imagen Tamaño de pantalla14 pulgadas Resolución de pantalla1920 X 1080",
  },
  {
    id: "10",
    name: "ASUS 15.6 i5-11300H 16GB 512GB SSD RTX3050 4GB",
    price: "1750",
    category: "Notebook",
    img: "https://cbafederal.net/wp-content/uploads/2022/04/01ac43741c7816117cc4bcca5992.webp",
    stock: "8",
    descripcion:
      "Modelo	90NR05U1-M000K0 Nº Parte	FX516PC-HN023 Pantalla	15.6 FHD (1920 x 1080) 16  Procesador Intel® Core i5-11300H Processor 3.1 GHz (8M Cache, up to 4.4 GHz, 4 cores) Memoria	16GB DDR4 (on board) + slot libre Disco	512GB M.2 NVMe PCIe® 3.0 SSD VGA	NVIDIA® GeForce RTX 3050 Laptop GPU 4GB GDDR6 S.O.	Endless 3",
  },

  {
    id: "11",
    name: "TABLET LENOVO YOGA YT11 SMART X705F 11″ 4GB 128GB",
    price: "1680",
    category: "Tablet",
    img: "https://cbafederal.net/wp-content/uploads/2021/12/D_NQ_NP_968665-MLA43825273901_102020-O-320x303.jpg",
    stock: "8",
    descripcion:
      "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.",
  },

  {
    id: "12",
    name: " ",
    price: "1680",
    category: "Tablet",
    img: "https://cbafederal.net/wp-content/uploads/2022/09/images-19.jpg",
    stock: "8",
    descripcion:
      "Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones wi-fi direct, usb 2.0, wi-fi, bluetooth, smart switch te permiten potenciar sus funciones al máximo.  Gracias a su cámara principal de 8 Mpx y frontal de 5 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.",
  },
];

export const getproducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductByid = (productid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productid));
    }, 500);
  });
};
