import { LuRectangleVertical } from "react-icons/lu";

interface strengthProp {
  strength?: number;
}

export const PasswordStrength = ({ strength }: strengthProp) => {
  console.log('okay',strength)
  return (
    <div
      className={`${
        strength && strength > 2 ? "bg-green-100" : "bg-red-100"
      } border border-gray-400 text-black-700 px-4 py-3 mt-4 rounded relative flex gap-6`}
      role="alert"
    >
      <strong className="font-bold">STRENGTH</strong>
      <p
        className={`flex ${
          strength && strength > 2 ? "text-green-500" : "text-red-500"
        } ${strength && strength > 2 ? "bg-green-500" : "bg-red-500"}`}
      >
        {" "}
        {Array(strength)
          .fill(true)
          .map(() => (
            <LuRectangleVertical />
          ))}
      </p>
    </div>
  );
};
