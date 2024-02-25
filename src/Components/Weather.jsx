import "./Weather.css";
import sunImg from "../assets/sun.png";
export default function Weather() {
  return (
    <div
      class="card text-center"
      style={{
        border: "none",
        background: "rgb(48, 105, 167)",
        background:
          "linear-gradient(270deg, rgba(48, 105, 167, 1) 0%, rgba(88, 137, 194, 1) 100%)",
      }}
    >
      <div class="card-body">
        <input
          type="text"
          class="form-control w-50"
          placeholder="Search"
          id="search"
        />
        <div class="d-flex justify-content-center align-items-center">
        <img src={sunImg} width='200px' />
        <h1>15°C</h1>

        </div>


      </div>
    </div>
  );
}
