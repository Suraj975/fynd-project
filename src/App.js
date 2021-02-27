import "./styles.css";
import Dropdown from "./dropdown";
import { colors, countryOptions } from "./constant";
export default function App() {
  const getValue = (data) => {
    console.log("Outputs all the selected data ========>", data);
  };
  return (
    <div className="App">
      <h1>Dropdown</h1>
      <Dropdown
        dropdownValue={countryOptions}
        getValue={getValue}
        name="Country"
      />
    </div>
  );
}
