import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <a className="fab" href="#accessibilityMenu">
      fab
    </a>
  );
}
