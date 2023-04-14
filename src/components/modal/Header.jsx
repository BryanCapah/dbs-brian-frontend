import { memo } from "react";
import Title from "../Title";

const Header = memo(({ modalHandler, text }) => {
  return (
    <div className="modal-header component-padding border-bottom text-gray">
      <Title text={text} />
      <span onClick={() => modalHandler(false)} className="btn-close">
        ✕
      </span>
    </div>
  );
});

export default Header;
