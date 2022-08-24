import chip from "assets/chip.png";
import visa from "assets/visa.png";

export const Card = () => {
  return (
    <div
      className="rounded-xl w-80 h-52 p-5 flex flex-col justify-between items-center text-white font-mono z-10 shadow-2xl shadow-gray-900/50"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/card.jpeg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between align-top h-1/5 w-full">
        <img src={chip} alt="card chip" />
        <img src={visa} alt="visa logo" />
      </div>
      <div>#### #### #### ####</div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-xxs text-maybe-grey tracking-widest font-bold">
            Card Holder
          </p>
          <p className="text-sm">Muhammad Shehu</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xxs text-maybe-grey tracking-widest font-bold">
            Expires
          </p>
          <p className="text-sm">MM/YY</p>
        </div>
      </div>
    </div>
  );
};
