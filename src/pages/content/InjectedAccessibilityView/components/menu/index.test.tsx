import { render, screen } from "@testing-library/react";
import Menu from "@src/pages/content/InjectedAccessibilityView/components/menu";

describe("menu test", () => {
  test("render text", () => {
    // given
    const text = "fab";

    // when
    render(<Menu />);

    // then
    screen.getByText(text);
  });
});
