import { render, screen } from "@testing-library/react";
import { rowComponent } from "../../../helpers";

const onClick = () => alert();
describe("rowComponent", () => {
  it("should return a text", () => {
    const method = rowComponent("name", onClick);
    expect(method).toBe("name");
  });

  it("should return div element with text when first parameter is string array", () => {
    const dummy = ["my", "name", "is", "Brian"];
    const method = rowComponent(dummy, onClick);
    expect(method).toHaveLength(4);
    expect(method[0]).toStrictEqual(<div>my</div>);
    expect(method[1]).toStrictEqual(<div>name</div>);
    expect(method[2]).toStrictEqual(<div>is</div>);
    expect(method[3]).toStrictEqual(<div>Brian</div>);
  });

  it("should return button element with text when first parameter is an object", () => {
    const dummy = [
      {
        name: "brian",
      },
    ];
    const expectedText = "Show ( 1 )";
    const method = rowComponent(dummy, onClick);
    render(method);
    const button = screen.getByText(expectedText);
    expect(button).toHaveTextContent(expectedText);
  });
});
