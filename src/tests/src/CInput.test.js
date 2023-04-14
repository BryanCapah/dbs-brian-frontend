import { render, fireEvent } from "@testing-library/react";
import CInput from "../../components/pages/form/CInput";

describe("Input", () => {
  it("will appear in document", () => {
    const { getByAltText } = render(<CInput alt="input" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByAltText("input");
    expect(input).toBeInTheDocument();
  });
  it("will update value when typed", () => {
    const { getByAltText } = render(<CInput alt="input" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByAltText("input");
    fireEvent.change(input, { target: { value: "DBS React test" } });
    expect(input.value).toBe("DBS React test");
  });
});
