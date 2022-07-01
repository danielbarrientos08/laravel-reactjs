import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

//importamos nuestros componentes
import ShowProducts from './ShowProducts';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ShowProducts/>}/>
                    <Route path='/create' element={<CreateProduct/>}/>
                    <Route path='/edit/:id' element={<EditProduct/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
