import { fireEvent, render, screen } from "@testing-library/react";
import Fab from "@src/pages/content/InjectedAccessibilityView/components/fab";

// 화면 우측 하단에 보여야 함
// 클릭이 가능해야함

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
    const text = "fab";

    // when
    render(<Fab onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: text }));

    // then
    expect(handleClick).toBeCalled();
  });

  test.todo("must show it on the screen");
});
