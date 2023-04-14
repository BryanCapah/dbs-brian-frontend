import { Button } from "@material-tailwind/react";
import Modal from "../../components/modal";
import Table from "../../components/Table";
import TBody from "../../components/Table/TBody";
import Td from "../../components/Table/Td";
import Th from "../../components/Table/Th";
import THead from "../../components/Table/THead";
import Tr from "../../components/Table/Tr";
import Title from "../../components/Title";
import { rowComponent } from "../../helpers";
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
          <Table>
            <THead>
              <Tr>
                {modal?.length > 0 &&
                  Object.keys(modal[0]).map((key) => <Th>{key}</Th>)}
              </Tr>
            </THead>
            <TBody>
              {modal?.length > 0 &&
                modal?.map((user) => (
                  <Tr>
                    {Object.keys(user)?.map((key) => (
                      <Td>{rowComponent(user[key], modalHandler)}</Td>
                    ))}
                  </Tr>
                ))}
            </TBody>
          </Table>
        </Modal>
        <div className="flex justify-between w-full">
          <Title text="User List" />
          <Button onClick={() => nav("/form")}>Create New User</Button>
        </div>
        <br />
        <Table>
          <THead>
            <Tr>
              {Object.keys(tableHeader).map((key) => (
                <Th>{key}</Th>
              ))}
            </Tr>
          </THead>
          <TBody>
            {userList?.map((user) => (
              <Tr>
                {Object.keys(user)?.map((key) => (
                  <Td>{rowComponent(user[key], modalHandler)}</Td>
                ))}
              </Tr>
            ))}
          </TBody>
        </Table>
      </div>
    );
}
