import { Button } from "@material-tailwind/react";
import Trash from "../../Trash";
import CInput from "./CInput";

export default function UserFormSection2({
  form,
  res,
  phoneNumberHandler,
  addPhoneNumber,
  removePhoneNumber,
}) {
  return (
    <div className=" w-full flex flex-col items-end">
      {form["Phone Number"].map((p, idx) => (
        <div key={idx} className="w-full flex items-center mb-6">
          <CInput
            error={
              res.formik?.errors?.["Phone Number"] &&
              res.formik?.errors?.["Phone Number"][idx]
            }
            type="number"
            value={p}
            label={`Phone Number ${idx + 1}`}
            onChange={(e) => phoneNumberHandler(e, idx)}
          />
          <Trash onClick={() => removePhoneNumber(idx)} />
          <br />
        </div>
      ))}
      <Button onClick={addPhoneNumber} className="mr-6">
        Add Phone Number
      </Button>
    </div>
  );
}
