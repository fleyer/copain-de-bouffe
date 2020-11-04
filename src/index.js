import './style';
import App from './components/app';
import {makeServer} from "./server"

if (process.env.NODE_ENV === "development") {
    makeServer()
}

export default App;
