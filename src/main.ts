import { setupButton } from "./components/button.ts";
import { addCard } from "./components/card.ts";
import { activities, type Activity } from "./data.ts";
import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id='card-stack'></div>
  <div id="shuffle"></div>
`;

activities.forEach((activity: Activity) =>
  addCard(document.querySelector<HTMLDivElement>("#card-stack")!, activity)
);

const nextCard = () => {
  const cards = document.querySelectorAll<HTMLDivElement>(`#card-stack .card`);
  const lastItem = cards[cards.length - 1];
  const newFirstItem = lastItem.cloneNode(true);
  lastItem.parentNode?.removeChild(lastItem);
  document.querySelector<HTMLDivElement>(`#card-stack`)!.prepend(newFirstItem);

  return new Promise((resolve) => {
    setTimeout(resolve, 50);
  });
};

setupButton(document.querySelector<HTMLDivElement>("#shuffle")!, async () => {
  document.querySelector<HTMLDivElement>("#card-stack")!.classList.remove('open');
  await new Promise((resolve) => {
  setTimeout(resolve, 200);
  });
  for (let i = 0; i < Math.round(Math.random() * 100); i++) {
    await nextCard();
  }
  document.querySelector<HTMLDivElement>("#card-stack")!.classList.add('open');
});
