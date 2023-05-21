import './buttonStyle.scss'

export function setupButton(element: HTMLDivElement, onClick: () => void) {
  const button = document.createElement("button");
  button.classList.add("shuffler-button");
  button.innerText = "Shuffle";
  button.addEventListener("click", () => {
    onClick();
  });
  element.appendChild(button);
}
