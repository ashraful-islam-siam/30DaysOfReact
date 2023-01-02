import "./cg.css";
const numbers = [
    0,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const ColorGenerator = () => {
  return (
    <div className="container">
      {numbers.map((number) => (
          <div className={`box ${number % 2 == 0 ? "even" : "odd"}`}>
            <h2>{number}</h2>
          </div>
      ))}
    </div>
  );
};

export default ColorGenerator;
