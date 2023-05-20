export function setupButton(element: HTMLDivElement, onClick: () => void) {
  const button = document.createElement("button");
  button.classList.add("shuffler");
  button.innerText = "Shuffle";
  button.addEventListener("click", () => {
    onClick();
  });
  element.appendChild(button);
}
