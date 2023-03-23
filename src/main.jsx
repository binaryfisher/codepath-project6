import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './routes/layout';
import DetailView from './components/detailView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} path="/" element={ <App />} />
        </Route>
        <Route index={false} path="/breweryDetails/:id" element={<DetailView />}/>
      </Routes>
     
    </BrowserRouter>
   
  </React.StrictMode>,
)
