import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Footer from './components/Footer'
import Nav from './components/Nav';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
        <Nav />
        <Outlet/>
        <Footer />
       

    </ApolloProvider>
  );
}

export default App;
