import { Provider } from "react-redux";
import JobListing from "./screens/JobListing";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobListing />
      </div>
    </Provider>
  );
}
