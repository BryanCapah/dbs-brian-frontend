import { Button } from "@material-tailwind/react";
import { useFormInput } from "../../../hooks/form.hooks";
import PhoneNumberSection from "./UserFormSection2";
import UserFormSection1 from "./UserFormSection1";
import UserFormSection3 from "./UserFormSection3";
import Title from "../../Title";

export default function FormInput() {
  const {
    onChangeHandler,
    form,
    addPhoneNumber,
    removePhoneNumber,
    removeFamilyMember,
    familyMemberHandler,
    addFamilyMember,
    res,
    phoneNumberHandler,
  } = useFormInput();
  return (
    <form
      onSubmit={res.formik.handleSubmit}
      className="px-5 py-10 lg:px-12 lg:py-8 w-full overflow-auto"
    >
      <Title text="Create New User" />
      <br />
      <div className="grid lg:grid-cols-2 gap-5 w-full">
        <UserFormSection1 res={res} onChangeHandler={onChangeHandler} />
        <PhoneNumberSection
          res={res}
          phoneNumberHandler={phoneNumberHandler}
          addPhoneNumber={addPhoneNumber}
          form={form}
          removePhoneNumber={removePhoneNumber}
        />
      </div>
      <br />
      <UserFormSection3
        res={res}
        familyMemberHandler={familyMemberHandler}
        form={form}
        removeFamilyMember={removeFamilyMember}
      />
      <br />
      <div className="flex flex-col lg:flex-row w-full justify-between lg:pr-6">
        <Button className="mb-3 lg:mb-0 " onClick={addFamilyMember}>
          Add Family
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
