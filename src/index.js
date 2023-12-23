import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
