import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <a className="fab" id="accessibilityFab" href="#accessibilityMenu">
      fab
    </a>
  );
}
