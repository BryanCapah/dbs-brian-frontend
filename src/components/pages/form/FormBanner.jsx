export default function FormBanner() {
  return (
    <div className=" min-h-full min-w-[30rem] rounded-l-3xl hidden lg:flex lg:flex-col bg-gradient-to-bl from-light-blue-500 to-cyan-200 justify-center items-center text-white">
      <div className="text-[8rem]">Hallo!</div>
      <div className="text-xl tracking-wider flex items-center animate-pulse">
        Please Create New User
        <i className="fa fa-arrow-right ml-3 text-2xl" />
      </div>
    </div>
  );
}
