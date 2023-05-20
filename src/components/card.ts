import { Activity } from "../data";
import "./cardStyle.scss";

const fillTemplate = (data: Activity) => `
<div class="image-container">
  <img width="240" height="240" src="${data?.imageUrl || data?.image}"/>
</div>
<div class="information">
  <div class="title">${data.title}</div>
  <div class="description">${data.description}</div>
</div>
`;

export function addCard(element: HTMLDivElement, data: Activity) {
  const cardElem = document.createElement("div");
  cardElem.classList.add("card");
  cardElem.setAttribute("data-id", data.id);
  cardElem.innerHTML = fillTemplate(data);
  element.appendChild(cardElem);
}

export function updateCard(element: HTMLDivElement, data: Activity) {
  // console.log(
  //   `try to update card ${element.getAttribute("data-id")} with ${data.id} `
  // );
  if (element.getAttribute("data-id") === data.id) {
    return;
  }

  element.innerHTML = fillTemplate(data);
  element.setAttribute("data-id", data.id);
}
