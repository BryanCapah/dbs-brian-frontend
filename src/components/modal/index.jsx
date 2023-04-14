import Header from "./Header";
import { useModal } from "./modal.hooks";

export default function Modal({
  modal,
  modalHandler,
  form,
  children,
  modalHeaderText,
  modalFooterText,
}) {
  const { modalRef } = useModal({
    modal,
    modalHandler,
  });

  return (
    <div ref={modalRef} id="modal" className="modal-container">
      <div id="modal-content" className="modal-content p-5">
        <Header modalHandler={modalHandler} text={modalHeaderText} />
        <br />
        {children}
      </div>
    </div>
  );
}
