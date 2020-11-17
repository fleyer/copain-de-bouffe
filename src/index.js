import './style';
import App from './components/app';
import {makeServer} from "./server"

if (process.env.MIRAGE_ENABLED) {
    makeServer()
}

export default App;
