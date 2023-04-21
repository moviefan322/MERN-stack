import Header from "./components/Header";
import { useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Q from "./pages/Q";
import Charts from "./pages/Charts";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const submitted = localStorage.getItem("submitted");

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={submitted ? <Charts /> : <Q />} />
            <Route path="/results" element={<Charts />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
