import { Input } from "@material-tailwind/react";

export default function CInput({ ...rest }) {
  return (
    <Input
      shrink={true}
      color="cyan"
      label="Name"
      placeholder="ie: John Wick"
      icon={<i className="fas fa-heart" {...rest} />}
    />
  );
}
