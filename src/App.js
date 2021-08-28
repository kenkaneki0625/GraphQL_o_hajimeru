import ApolloClient from "apollo-client";
import {ApolloProvider}  from "@apollo/react-hooks";


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.sh'
  });

  return (
    <p>Pokedex here!</p>
  );
}

export default App;
