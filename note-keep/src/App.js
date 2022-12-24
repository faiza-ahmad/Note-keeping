import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Trash from "./Components/Trash";
import Archieve from "./Components/Archieve";
import Label from "./Components/Label";
import Reminder from "./Components/Reminder";
import './Components/Side.css';
import Side from "./Components/Side";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import './App.css';
import './Components/Side.css';
function App() {
    return ( 
        <>
        <Header/>
        {/* <Sidebar/> */}
        <BrowserRouter>
        <Routes>
            <Route index element={<Sidebar/>}/>
                <Route path="*" element={<Side/>}/>
                <Route path="Reminders" element={<Reminder/>} />
                 <Route path="edit" element={<Label/>} />
                 <Route path="archive" element={<Archieve/>} />
                 <Route path="trash" element={<Trash/>} />
                 
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>
     );
}

export default App;