/*******/
/* Index.js donde se importan el app y se injecta 
/* a el tag root
/*******/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux'
import { store } from './Redux/Store/Store'
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// creando el cliente de apollo para GRaphQl
const client = new ApolloClient({
    uri: 'https://spotify-graphql-server.herokuapp.com/graphql',
    cache: new InMemoryCache()
})
//Añadiendo Provider Redux, Provider Apollo a la App
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
