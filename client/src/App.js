import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Q from "./pages/Q";
import Charts from "./pages/Charts";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const submitted = localStorage.getItem("submitted");

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        {submitted ? <Charts /> : <Q />}
      </ApolloProvider>
    </>
  );
}

export default App;
