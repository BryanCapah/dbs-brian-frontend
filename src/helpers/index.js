import { Button } from "@material-tailwind/react";

export const isStringsArray = (arr) =>
  typeof arr === "object" && arr.every((i) => typeof i === "string");
export const isObjectArray = (arr) =>
  typeof arr === "object" && arr.every((i) => typeof i === "object");

export const rowComponent = (key, action) => {
  const isStrArray = isStringsArray(key);
  const isObjArray = isObjectArray(key);

  if (isStrArray) return key.map((item) => <div>{item}</div>);
  else if (isObjArray)
    return (
      <Button
        onClick={() => action && action(key)}
        className="px-16 h-10"
      >{`Show ( ${key?.length} )`}</Button>
    );
  else return key;
};
