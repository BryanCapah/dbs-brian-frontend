import FormBanner from "../../components/pages/form/FormBanner";
import FormInput from "../../components/pages/form/FormInput";

export default function Form() {
  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center lg:px-32 lg:py-20 p-7 animate-fade-in">
      <div className=" w-full bg-white shadow-lg rounded-3xl h-full flex">
        <FormBanner />
        <FormInput />
      </div>
    </div>
  );
}
