//*LEFT BAR CALLS
const content = document.querySelector(".content");
const Bar = document.createElement("div");
const leftBMenu = document.createElement("h1");

const Pizza = document.createElement("h2");
const Hamburger = document.createElement("h2");
const Chips = document.createElement("h2");
const Pasta = document.createElement("h2");

const elements = [leftBMenu, Pizza, Hamburger, Chips, Pasta];
const elements2 = [Pizza, Hamburger, Chips, Pasta];

//*MAIN MENU CALLS
const Page = document.createElement("section");

const Title = document.createElement("h1");

const Recomended = document.createElement("h1");

//!ALL FOOD CALLS

const foodSquare = document.createElement("section");
//
const foodPictureSquare = document.createElement("section");

//
const foodName = document.createElement("h1");
const foodPicture = document.createElement("img");
const foodDescription = document.createElement("p");

Bar.className = "LeftBarDiv";

function leftBar() {
  //~APPENDCHILD
  const elementText = ["MENU", "PIZZA", "HAMBURGER", "CHIPS", "PASTA"];

  content.appendChild(Bar);

  //!CLASS NAME
  for (let i = 0; i < elements.length; i++) {
    Bar.appendChild(elements[i]);
    elements[i].className = "h1Style";
    elements[i].textContent = elementText[i];
  }

  //&ELEMENT TEXT

  pressElement();
}

function pressElement() {
  let textCont = [
    [
      "PIZZA",
      "NEAPOLITAN PIZZA",
      "Also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese, one is enough for 4 persons.",
      "pizza",
    ],
    [
      "HAMBURGER",
      "BIC MAC WITH CHEESE",
      "This food is one of the most popular Bcs it have the best flavour in the market for a low price.",
      "foodPicture",
    ],
    [
      "CHIPS",
      "CHIPS WITH KETCHUP",
      "What can we say about the chips?, they are the food liked for everyone, our own recipe have extra crunchines and infinite amounts of ketchup.",
      "chips",
    ],
    [
      "PASTA",
      "PASTA WITH MEAT BALLS",
      "The pasta in convination with some ultra flavored meat balls are an exquisite food who you can't stop eating",
      "carbonara",
    ],
  ];

  for (let i = 0; i < elements2.length; i++) {
    elements2[i].addEventListener("click", function () {
      Recomended.textContent = textCont[i][0];
      foodName.textContent = textCont[i][1];
      foodDescription.textContent = textCont[i][2];
      foodPicture.classList = textCont[i][3];
      //!FALTARIA AGREGAR LA FOTO
    });
  }
}

function mainContent() {
  leftBar();
  phoneMenu();

  //~APPENDCHILD

  content.appendChild(Page);
  Page.appendChild(Title);

  Page.appendChild(Recomended);

  Page.appendChild(foodSquare);
  foodSquare.appendChild(foodName);

  //
  foodSquare.appendChild(foodPictureSquare);
  foodPictureSquare.appendChild(foodPicture);
  foodSquare.appendChild(foodDescription);

  //!CLASS NAME

  Page.className = "mainSite";
  Title.className = "Title";

  Recomended.className = "recomended";

  foodSquare.className = "foodSquare";
  foodName.className = "foodName";
  foodPictureSquare.className = "foodPictureSquare";
  foodPicture.className = "foodPicture";
  foodDescription.className = "foodDescription";

  //&ELEMENT TEXT

  Title.textContent = "FOODIE";

  Recomended.textContent = "Food of the Week";

  foodName.textContent = "BIC MAC WITH CHEESE";
  foodDescription.textContent =
    "This food is one of the most popular Bcs it have the best flavour in the market for a low price.";
}

function phoneMenu() {
  const menuButton = document.createElement("div");
  menuButton.className = "menuButton";
  menuButton.textContent = ">";
  content.appendChild(menuButton);

  menuButton.addEventListener("click", function () {
    if (menuButton.textContent === ">") {
      Bar.style.display = "inline";
      menuButton.textContent = "<";
    } else {
      Bar.style.display = "none";
      menuButton.textContent = ">";
    }
  });
}

export default mainContent;
