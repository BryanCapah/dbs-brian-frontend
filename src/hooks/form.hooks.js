import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import * as YUP from "yup";
import { familyMember } from "../static";
import { UserFormValidation } from "../static/formTemplates";
import { submitUser } from "../store/reducers/users.reducer";

export const useForm = ({ form, formValidation, submitHandler }) => {
  const formik = useFormik({
    initialValues: form,
    enableReinitialize: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      submitHandler(values);
    },
    validationSchema: YUP.object(formValidation),
  });
  return {
    formik,
    form,
  };
};

export const useFormInput = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [form, setForm] = useState({
    Name: "",
    Address: "",
    eKtp: "",
    Job: "",
    "Date of Birth": "",
    "Phone Number": [""],
    Family: [{ ...familyMember }],
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const addPhoneNumber = () => {
    setForm((current) => ({
      ...current,
      "Phone Number": [...current["Phone Number"], ""],
    }));
  };

  const removePhoneNumber = (idx) => {
    const currentPhoneNumber = form["Phone Number"];

    if (currentPhoneNumber?.length === 1) return;
    let newPhoneNumber = currentPhoneNumber.filter((p, i) => i !== idx);
    setForm((current) => ({
      ...current,
      "Phone Number": newPhoneNumber,
    }));
  };

  const phoneNumberHandler = (e, idx) => {
    const { value } = e.target;
    let newPhoneNumber = [...form["Phone Number"]];
    newPhoneNumber[idx] = value;
    setForm((current) => ({
      ...current,
      "Phone Number": newPhoneNumber,
    }));
  };

  const removeFamilyMember = (idx) => {
    const currentFamilyMember = form["Family"];

    if (currentFamilyMember?.length === 1) return;
    let newFamilyMember = currentFamilyMember.filter((p, i) => i !== idx);
    setForm((current) => ({
      ...current,
      Family: newFamilyMember,
    }));
  };

  const addFamilyMember = () => {
    setForm((current) => ({
      ...current,
      Family: [...current["Family"], { ...familyMember }],
    }));
  };

  const familyMemberHandler = (e, idx) => {
    const { value, name } = e.target;
    const modifiedName = name?.split("_")[0];
    let newFamilyMember = [...form["Family"]];
    newFamilyMember[idx][modifiedName] = value;
    setForm((current) => ({
      ...current,
      Family: newFamilyMember,
    }));
  };

  const submitHandler = (form) => {
    dispatch(submitUser(form));
    Swal.fire("Success!", "new data has been recorded!", "success").then((_) =>
      nav("/")
    );
  };

  const res = useForm({
    form: form,
    formValidation: UserFormValidation,
    submitHandler,
  });

  const memoizedAddFamilyMember = useCallback((_) => {
    res.formik.handleReset();
    addFamilyMember();
  }, []);

  const memoizedFamilyMemberHandler = useCallback(
    (e, idx) => {
      res.formik.handleReset();
      familyMemberHandler(e, idx);
    },
    [res.formik, form]
  );

  return {
    form,
    onChangeHandler,
    addPhoneNumber,
    phoneNumberHandler,
    removePhoneNumber,
    removeFamilyMember,
    familyMemberHandler: memoizedFamilyMemberHandler,
    addFamilyMember: memoizedAddFamilyMember,
    submitHandler,
    res,
  };
};
