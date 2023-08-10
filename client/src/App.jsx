import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Transactions from './pages/Transactions';
import Transaction from './pages/Transaction';
import Trips from './pages/Trips';
import Trip from './pages/Trip';
import Friends from './pages/Friends';
import Manage from './pages/Manage';
import Inbox from './pages/Inbox';

function App() {
  return (
    <>
      <div className="app-container">
        <nav>
            <ul className='nav-list'>
              <li>
                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M22.971 13.287 12.514 2.829a.829.829 0 0 0-1.2 0L.857 13.287l1.2 1.2L4.2 12.344v8.228a.86.86 0 0 0 .857.857h13.715a.86.86 0 0 0 .857-.857v-8.228l2.142 2.143 1.2-1.2Zm-5.057 6.428h-12V10.63l6-6 6 6v9.086Z"></path></svg>
                <Link to="/">Home</Link>
              </li>
              <li>
                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M2.576 4a.861.861 0 0 0-.862.861v11.135c0 .475.386.861.862.861h4.71v-1.714H5.143a1.714 1.714 0 0 0-1.714-1.714v-6a1.714 1.714 0 0 0 1.714-1.715h13.714a1.715 1.715 0 0 0 1.715 1.715V5.714v9.429-1.714a1.713 1.713 0 0 0-1.715 1.714h-2.143v1.714h4.71a.861.861 0 0 0 .862-.861V4.86A.861.861 0 0 0 21.424 4H2.576Zm7.71 6.429a1.714 1.714 0 1 1 3.428 0 1.714 1.714 0 0 1-3.428 0ZM12 7a3.429 3.429 0 1 0 0 6.857A3.429 3.429 0 0 0 12 7Zm-.857 12.288-1.751-1.751-1.212 1.212 3.211 3.211a.862.862 0 0 0 1.218 0l3.211-3.211-1.212-1.212-1.75 1.75v-4.144h-1.715v4.145Z"></path></svg>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M16.286 6.856V8.57H18V6.856h2.571v12H3.43v-12H6V8.57h1.714V6.856h8.572ZM2.576 5.142H6V2.57h1.714v2.572h8.572V2.57H18v2.572h3.424c.476 0 .862.386.862.861V19.71a.861.861 0 0 1-.862.861H2.576a.861.861 0 0 1-.862-.861V6.003c0-.476.386-.861.862-.861Zm14.567 11.571a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z"></path></svg>
                <Link to="/trips">Trips</Link>
              </li>
              <li>
                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M17.186 12.3a5.114 5.114 0 0 0 2.1-4.157C19.286 5.314 16.97 3 14.143 3a5.168 5.168 0 0 0-4.457 2.571c-2.743.086-4.972 2.358-4.972 5.143 0 1.715.815 3.215 2.1 4.157A6.796 6.796 0 0 0 3 21h1.714c0-2.014 1.2-3.771 2.872-4.629.643-.3 1.328-.514 2.1-.514h.171C12.686 15.857 15 18.171 15 21h1.714c0-2.7-1.543-5.014-3.814-6.129a5.61 5.61 0 0 0 1.414-1.585c2.743.085 4.972 2.357 4.972 5.143H21c0-2.7-1.543-5.015-3.814-6.129Zm-8.272 1.714C7.5 13.586 6.43 12.3 6.43 10.714c0-1.628 1.114-2.957 2.614-3.343.257-.042.514-.085.814-.085.343 0 .643.043.943.128 1.457.429 2.486 1.715 2.486 3.3 0 .257-.043.472-.086.729-.343 1.543-1.714 2.7-3.343 2.7-.343 0-.643-.043-.943-.129Zm6.043-2.528c.043-.257.043-.515.043-.772 0-2.228-1.414-4.114-3.429-4.843a3.376 3.376 0 0 1 2.572-1.157 3.439 3.439 0 0 1 3.428 3.429c0 1.628-1.114 2.957-2.614 3.343Z"></path></svg>
                <Link to="/friends">Friends</Link>
              </li>
              <li>
                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M9 4.284a2.571 2.571 0 0 1 2.571-2.571h6.858A2.571 2.571 0 0 1 21 4.284v15.429a2.571 2.571 0 0 1-2.571 2.571h-2.966l-.039.001H2.576a.861.861 0 0 1-.862-.861v-9.42c0-.476.386-.862.862-.862h12.848c.476 0 .862.386.862.862v8.566h2.143a.857.857 0 0 0 .857-.857V4.284a.857.857 0 0 0-.857-.857h-1.83a.857.857 0 0 1-.742 1.286h-1.714a.857.857 0 0 1-.743-1.286h-1.829a.857.857 0 0 0-.857.857v6.858H9V4.284ZM3.429 20.571v-6.092l4.651 3.544a1.518 1.518 0 0 0 1.84 0l4.651-3.544v6.092H3.43ZM9 16.434l-4.696-3.577h9.392L9 16.434Z"></path></svg>
                <Link to="/inbox">Inbox</Link>
              </li>
              <li>
                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M4.286 11.144h6a.86.86 0 0 0 .857-.857v-6a.86.86 0 0 0-.857-.857h-6a.86.86 0 0 0-.857.857v6a.86.86 0 0 0 .857.857ZM9.429 9.43H5.143V5.144h4.286V9.43Zm4.285 1.714h6a.86.86 0 0 0 .858-.857v-6a.86.86 0 0 0-.857-.857h-6a.86.86 0 0 0-.858.857v6a.86.86 0 0 0 .857.857Zm5.143-1.714h-4.285V5.144h4.285V9.43Zm-8.571 11.142h-6a.86.86 0 0 1-.857-.857v-6a.86.86 0 0 1 .857-.858h6a.86.86 0 0 1 .857.858v6a.86.86 0 0 1-.857.857Zm-5.143-1.715h4.286v-4.285H5.143v4.285Zm8.572 1.715h6a.86.86 0 0 0 .857-.857v-6a.86.86 0 0 0-.857-.858h-6a.86.86 0 0 0-.858.858v6a.86.86 0 0 0 .858.857Zm5.142-1.715h-4.285v-4.285h4.285v4.285Z"></path></svg>
                <Link to="/manage">Manage</Link>
              </li>
            </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} >
            <Route path=":id" element={<Transaction/>} />
          </Route>
          <Route path="/trips" element={<Trips/>} />
          <Route path="/friends" element={<Friends/>} />
          <Route path="/inbox" element={<Inbox/>} />
          <Route path="/manage" element={<Manage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
