import { Button } from "@material-tailwind/react";
import Modal from "../../components/modal";
import Table from "../../components/Table";
import Title from "../../components/Title";
import { useList } from "../../hooks/list.hooks";
export default function Form() {
  const { userList, tableHeader, nav, userListIsEmpty, modal, modalHandler } =
    useList();
  if (!userListIsEmpty)
    return (
      <div className="w-screen p-10 animate-fade-in">
        <Modal
          form={"form"}
          modalHeaderText="Family Members"
          modalHandler={modalHandler}
          modal={modal}
        >
          <Table header={modal?.length > 0 && modal[0]} list={modal} />
        </Modal>

        <div className="flex justify-between w-full">
          <Title text="User List" />
          <Button onClick={() => nav("/form")}>Create New User</Button>
        </div>
        <br />
        <Table action={modalHandler} header={tableHeader} list={userList} />
      </div>
    );
}
