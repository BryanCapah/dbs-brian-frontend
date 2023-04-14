import * as YUP from "yup";

export const UserFormTemplate = {
  user: [
    {
      label: "Name",
      name: "Name",
      inputtype: "text",
      type: "string",
    },

    {
      label: "eKtp",
      name: "eKtp",
      inputtype: "number",
      type: "number",
    },
    {
      label: "Address",
      name: "Address",
      inputtype: "textArea",
      type: "string",
    },

    {
      label: "Job",
      name: "Job",
      inputtype: "text",
      type: "string",
    },
    {
      label: "Date of Birth",
      name: "Date of Birth",
      inputtype: "date",
      type: "date",
    },
  ],
  familyMember: [
    {
      label: "Name",
      name: "Name",
      inputtype: "text",
      type: "string",
    },
    {
      label: "Date of Birth",
      name: "Date of Birth",
      inputtype: "date",
      type: "date",
    },

    {
      label: "Relationship Status",
      name: "Relationship Status",
      inputtype: "radio",
      type: "radio",
      options: [
        {
          name: "Relationship Status",
          value: "Brother",
        },
        {
          name: "Relationship Status",
          value: "Sister",
        },
        {
          name: "Relationship Status",
          value: "Parent",
        },
        {
          name: "Relationship Status",
          value: "Child",
        },
      ],
    },
  ],
};

export const UserFormValidation = {
  Name: YUP.string().required("Name cannot be empty"),
  Address: YUP.string().required("Address cannot be empty"),
  eKtp: YUP.string()
    .required("eKtp cannot be empty")
    .min(13, "eKtp should be 16 digits in minimum"),
  Job: YUP.string().required("Job cannot be empty"),
  "Date of Birth": YUP.string().required("Date of Birth cannot be empty"),
  "Phone Number": YUP.array()
    .min(1, "At least one row is required.")
    .of(
      YUP.number("Phone number must be a number")
        .required("Phone number cannot be empty")
        .min(11, "Phone number should be 11 digits in minimum")
    ),
  Family: YUP.array().of(
    YUP.object({
      Name: YUP.string().required("Name cannot be empty"),
      "Date of Birth": YUP.string().required("Date of Birth cannot be empty"),
      "Relationship Status": YUP.string().required(
        "Relationship Status cannot be empty"
      ),
    })
  ),
};
