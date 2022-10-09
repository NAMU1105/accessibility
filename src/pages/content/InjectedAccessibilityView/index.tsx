import { createRoot } from "react-dom/client";
import Fab from "@src/pages/content/InjectedAccessibilityView/components/fab";
import Menu from "@src/pages/content/InjectedAccessibilityView/components/menu";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content/components/fab");

const root = document.createElement("div");
root.id = "chrome-extension-boilerplate-react-vite-content-view-root";
document.body.append(root);

createRoot(root).render(
  <>
    <Fab />
    <Menu />
  </>
);
