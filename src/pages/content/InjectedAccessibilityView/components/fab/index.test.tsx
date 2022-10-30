import { fireEvent, render, screen } from "@testing-library/react";
import Fab from "@src/pages/content/InjectedAccessibilityView/components/fab";

describe("Fab Test", () => {
  test("render 'fab' text on the screen", () => {
    // given
    const text = "fab";

    // when
    render(
      <Fab
        onClick={() => {
          console.log("");
        }}
      />
    );

    // then
    screen.getByText(text);
  });

  test("component should be clickable", () => {
    // given
    const handleClick = jest.fn();

    // when
    render(<Fab onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));

    // then
    expect(handleClick).toBeCalled();
  });

  // TODO: have to do it on E2E test
  test.todo("must show it on the right bottom screen");
});
