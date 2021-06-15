import React,{useState} from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import data from './data'
const allCategories = ['all',...new Set(data.map((item)=>item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)
  const filterItem=(category)=>{
    if(category==='all'){
      setMenuItems(data)
      return;
    }
  const newItems = data.filter((item)=>item.category===category) 
     setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
