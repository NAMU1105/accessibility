import { render, screen } from "@testing-library/react";
import Fab from "@src/pages/content/InjectedAccessibilityView/components/fab";

describe("Fab Test", () => {
  test("render text", () => {
    // given
    const text = "fab";

    // when
    render(<Fab />);

    // then
    screen.getByText(text);
  });
});
