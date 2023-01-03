import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("menu view loaded");
  }, []);

  return (
    <section className="accessibility__menu" id="accessibilityMenu">
      <h1>menu</h1>
    </section>
  );
}
