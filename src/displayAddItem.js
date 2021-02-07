import { removeItem } from "./removeItem";

function displayAddedItem(id, timestamp) {
  const container = document.createElement("div");
  container.innerHTML = "Hola";
  const div = container.firstChild;
  div.setAttribute("id", id);

  timestamp = timestamp ? timestamp.toMillis() : Date.now();
  div.setAttribute("timestamp", timestamp);
}

export { displayAddedItem }

