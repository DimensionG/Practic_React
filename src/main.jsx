import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import {FirstComponent} from './FirstComponent'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css"
// import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css"
// import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.esm.min.js"
import "../index.css"
import AppContainer from './AppContainer' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContainer valor = {0} />
    {/* <FirstComponent valor1 = "es cadena" valor2 = {250}/> */}
  </StrictMode>,
);

