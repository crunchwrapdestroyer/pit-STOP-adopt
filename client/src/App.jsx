import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
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
        <Footer />
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} /> */}
      </Routes>

    </ApolloProvider>
  );
}

export default App;
