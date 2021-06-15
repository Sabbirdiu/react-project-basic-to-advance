import React,{useState} from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import menu from './data'
function App() {
  const [menuItems, setMenuItems] = useState(menu)
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories  />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
