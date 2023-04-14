import {
  Input,
  Option,
  Radio,
  Select,
  Textarea,
} from "@material-tailwind/react";

export default function CInput({ ...rest }) {
  const errorMessage = rest?.error ? rest.error : rest.label;
  switch (rest.inputtype) {
    case "textArea":
      return <Textarea shrink={true} color="cyan" {...rest} />;
    case "radio":
      return rest.options?.map((option, idx) => (
        <div key={idx} className="flex items-center">
          <Radio
            label={rest.label}
            name={`${rest.name}_${rest.i}`}
            inputtype={rest.inputtype}
            type={rest.type}
            id={rest.id + idx}
            value={option?.value}
            onChange={rest.onChange}
          />
          <label>{option.value}</label>
        </div>
      ));
    case "date":
    case "number":
    case "text":
      return (
        <Input shrink={true} color="cyan" {...rest} label={errorMessage} />
      );
    case "select":
      return (
        <Select shrink={true} color="cyan" {...rest} label={errorMessage}>
          {rest?.options?.map((option, idx) => (
            <Option key={idx}>{option?.name}</Option>
          ))}
        </Select>
      );
    default:
      return (
        <Input
          message
          shrink={true}
          color="cyan"
          {...rest}
          label={errorMessage}
        />
      );
  }
}
