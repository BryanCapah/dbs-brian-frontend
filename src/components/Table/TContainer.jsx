export default function TContainer({ children }) {
  return (
    <div className="border border-gray-300">
      <table className="min-w-full text-left text-sm font-light ">
        {children}
      </table>
    </div>
  );
}
