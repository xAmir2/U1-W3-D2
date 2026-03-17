/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (str) {
  const newTitle = document.querySelector("h1");
  newTitle.innerText = str;
};
changeTitle("This is a new title!");

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function (str) {
  const title = document.querySelector("h1");
  title.classList.add(str);
};
addClassToTitle("myHeading");

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function (str) {
  const childP = document.querySelectorAll("div > p");
  for (let i = 0; i < childP.length; i++) {
    childP[i].innerText = str;
  }
};
changePcontent("This is a new p content.");

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function (str) {
  const childA = document.querySelectorAll("div > a");
  for (let i = 0; i < childA.length; i++) {
    childA[i].setAttribute("href", str);
  }
};
changeUrls("https://www.google.com");
/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function (str) {
  const li4th = document.createElement(str);
  const secondList = document.querySelector("#secondList");
  li4th.innerText = "4th";
  secondList.appendChild(li4th);
};
addToTheSecond("li");
/* const addToTheSecond = function () {
  const secondList = document.querySelector("#secondList");
  secondList.innerHTML = secondList.innerHTML + "<li>4th</li>";
};
addToTheSecond(); */

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function (str) {
  const firstP = document.createElement(str);
  const divFirstP = document.querySelectorAll("Body > div")[0];
  firstP.innerText = "Loremipsum";
  divFirstP.appendChild(firstP);
};
addParagraph("p");

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const firstUl = document.querySelector("#firstList");
  firstUl.remove();
};
hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const allUl = document.querySelectorAll("ul li");
  for (let i = 0; i < allUl.length; i++) {
    allUl[i].style.backgroundColor = "green";
  }
};
paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const title = document.querySelector("h1");
  title.addEventListener("click", () => {
    title.textContent = title.textContent.slice(0, -1);
  });
};
makeItClickable();

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", () => {
    alert(
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
    );
  });
};
revealFooterLink();

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

/* const generateTable = function () {
  const data = [
    {
      image: "N/A",
      productName: "Basketballs",
      quantity: 2,
      price: "10",
    },
    {
      image: "N/A",
      productName: "Football",
      quantity: "5",
      price: "80",
    },
    {
      image: "N/A",
      productName: "Tennis balls",
      quantity: "10",
      price: "35",
    },
    {
      image: "N/A",
      productName: "Pingpong balls",
      quantity: "20",
      price: "50",
    },
    {
      image: "N/A",
      productName: "Golf balls",
      quantity: "30",
      price: "90",
    },
  ];
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  const headers = ["Image", "Product Name", "Quantity", "Price"];
  const headerRow = document.createElement("tr");

  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);
  data.forEach((item) => {
    const row = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  const tablePlace = document.getElementById("tableArea");
  tablePlace.appendChild(table);
};
generateTable(); */

const generateTable = function () {
  const tableArea = document.createElement("table");
  const table = document.getElementById("tableArea");
  table.appendChild(tableArea);
  table.innerHTML = `
  <table>
  <thead>
  <tr>
  <th>Image</th>
  <th>Product Name</th>
  <th>Quantity</th>
  <th>Price</th>
  </tr>
  
  </thead>
  <tbody>
  <tr>
  <td><img width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZA3EnMQLT0ousS1Nr-v-89d8cM_fbt2uMug&s" alt"basketball"></td>
  <td>Basketball</td>
  <td>40</td>
  <td>10</td>
  </tr>
  <tr>
  <td><img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/960px-Football_%28soccer_ball%29.svg.png" alt"footbal"></td>
  <td>Football</td>
  <td>90</td>
  <td>15</td>
  </tr>
  <tr>
  <td><img width="50px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrZFVzNTB6Cb0_mief28XginLyrn_l4vmJ635TVkL8LfkPoNzSy96jq7Ky7wtne51MNq_PtTXwh5ftHlHsgv2ryj2PenfMTI2nsFB9LVEm1MlqQ23NywCY4TC1vEo6tkA7pWKMLf4&usqp=CAc" alt"golfball"></td>
  <td>Golf ball</td>
  <td>1000</td>
  <td>5</td>
  </tr>
  <tr>
  <td><img width="50px" src="https://makerbazar.in/cdn/shop/products/1ttball.jpg?v=1679558634" alt"pingpong"></td>
  <td>Pingpong</td>
  <td>800</td>
  <td>3</td>
  </tr>
  <tr>
  <td><img width="50px"src="https://i5.walmartimages.com/asr/d907e4b5-3bea-4f43-a20a-772448a443d7_2.ed2c3a70cd93f3633650740aabedcd0d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt"tennis ball"></td>
  <td>Tennis ball</td>
  <td>500</td>
  <td>12</td>
  </tr>
  </tbody>
  <table/>
  `;
};
generateTable()

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {};

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
  const h2Rainbow = document.getElementById("changeMyColor");
  h2Rainbow.addEventListener("click", () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    h2Rainbow.style.color = bgColor;
  });
};
changeColorWithRandom();
