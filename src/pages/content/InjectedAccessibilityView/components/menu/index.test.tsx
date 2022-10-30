import { render, screen } from "@testing-library/react";
import Menu from "@src/pages/content/InjectedAccessibilityView/components/menu";

describe("menu test", () => {
  test("render 'meny' text on the screen", () => {
    // given
    const text = "menu";

    // when
    render(<Menu />);

    // then
    screen.getByText(text);
  });
});
