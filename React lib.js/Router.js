// Роуте используется для перехода по страницам без их загрузки
// Он подтягивает только те компоненты что нужны и получается мега плавно


// Index.js:
import { BrowserRouter } from "react-router";
// ^ Ипорт самого модуля роутера

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // ^ так же его нунжо разметить перед самими страницами
);


// App.js:
import { Routes, Route, Link } from 'react-router'
// Импорт роутера

// Импорт страниц из соседней папки того же уровня от корня
import Home from '../Pages/Homepage'
import About from '../Pages/About';
import User from '../Pages/User';
import Notfound from '../Pages/Notfound';

function App() {
    return (
        <>
            <main>
                <nav>
                    <Link to='/' >Home</Link>
                    {/* Link используется вместо обычно <a href='/'> */}

                    <Link to='/User' >User</Link>
                    <Link to='/About' >About</Link>
                </nav>
            </main>

            {/* Настройка самих маршрутов для перехода */}
            <Routes>
                <Route path='/' element={<Home />} />
                {/*                         ^ страница что будет открываться */}
                {/*     ^ ссылка к странице */}
                {/* ^ сам объект роутера как ни странно, нужен для создания маршрута */}
                <Route path='/User' element={<User />} />
                <Route path='/About' element={<About />} />
                <Route path='/*' element={<Notfound />} />
                {/*           ^ * - значит всё остальное после, например:
                                    /sgasgs если не задано конкретно - будет учитываться здесь   */}
            </Routes>
        </>
    )
}