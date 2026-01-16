import { RingLoader } from "react-spinners";
import "./Loader.css"; 

export default function Loader() {
  return <div className="loader">
              <RingLoader color="#42a2d2" size={150} />
            </div>;
}
