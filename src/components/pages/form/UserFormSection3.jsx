import { useMemo } from "react";
import { UserFormTemplate } from "../../../static/formTemplates";
import Trash from "../../Trash";
import CInput from "./CInput";

export default function UserFormSection3({
  res,
  familyMemberHandler,
  removeFamilyMember,
  form,
}) {
  const familyMember = useMemo((_) => form["Family"], [form]);
  const totalFamilyMember = useMemo(
    (_) =>
      familyMember.filter(
        (member) =>
          member.Name &&
          member["Date of Birth"] &&
          member["Relationship Status"]
      ).length,
    [familyMember, form]
  );
  return (
    <div className="max-w-[500px] lg:max-w-[100vw] overflow-auto">
      <div className="mb-3 font-semibold text-blue-300">{`Family ( ${totalFamilyMember} )`}</div>
      <table align="center" className=" ">
        <thead className="font-normal text-sm tracking-wider text-blue-300">
          <tr>
            <td>Name</td>
            <td>Date of Birth</td>
            <td>Relationship Status</td>
          </tr>
        </thead>
        <tbody>
          {familyMember.map((family, i) => (
            <tr key={i}>
              {UserFormTemplate.familyMember.map((field, idx) => (
                <td
                  key={idx}
                  height={60}
                  className={`pr-3 last:pr-0 ${idx === 2 && "flex"}`}
                >
                  <CInput
                    error={
                      res.formik?.errors?.["Family"] &&
                      res.formik?.errors?.["Family"][i][field.name]
                    }
                    {...field}
                    id={field.name + i + idx}
                    i={i}
                    value={family[field.name]}
                    onChange={(e) => familyMemberHandler(e, i)}
                    label=""
                    variant="standard"
                  />
                </td>
              ))}
              <td>
                <Trash onClick={() => removeFamilyMember(i)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
