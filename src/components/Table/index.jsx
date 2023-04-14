import { rowComponent } from "../../helpers";
import TBody from "./TBody";
import TContainer from "./TContainer";
import Td from "./Td";
import Th from "./Th";
import THead from "./THead";
import Tr from "./Tr";

export default function Table({ action, header, list }) {
  if (header && list)
    return (
      <TContainer>
        <THead>
          <Tr>
            {Object.keys(header).map((key) => (
              <Th>{key}</Th>
            ))}
          </Tr>
        </THead>
        <TBody>
          {list?.map((user) => (
            <Tr>
              {Object.keys(user)?.map((key) => (
                <Td>{rowComponent(user[key], action)}</Td>
              ))}
            </Tr>
          ))}
        </TBody>
      </TContainer>
    );
}
