import { UserFormTemplate } from "../../../static/formTemplates";
import CInput from "./CInput";

export default function UserFormSection1({ res, onChangeHandler }) {
  return (
    <div className=" w-full">
      {UserFormTemplate.user.map((field, idx) => (
        <div key={idx}>
          <CInput
            error={res.formik.errors[field.name]}
            onChange={onChangeHandler}
            key={field.label}
            {...field}
            className="w-full"
          />
          <br />
        </div>
      ))}
    </div>
  );
}
