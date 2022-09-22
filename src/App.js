import { Route } from "wouter";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
    return (
        <>
            <Route path="/" component={Dashboard} />
            <Route path="/transactions" component={Transactions} />
        </>
    );
}

export default App;
