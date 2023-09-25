
import { Provider } from "react-redux";
import { store } from "./GlobalStore/counterSlice";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello Block</h1>
    </Provider>
  );
}

export default App;
