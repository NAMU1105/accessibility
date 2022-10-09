import { createRoot } from "react-dom/client";
import App from "@src/pages/content/components/menu/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content/components/menu");

const root = document.createElement("div");
root.id = "chrome-extension-boilerplate-react-vite-content-view-menu";
document.body.append(root);

createRoot(root).render(<App />);
