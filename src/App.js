import {Provider} from "react-redux";
import Test from "./app/main/login/Test";
import store from "./app/store";

function App() {
  return (
      <Provider store={store}>
        <Test />
      </Provider>
  );
}

export default App;
