import './Navbar.scss'
import {Link} from "react-router-dom";
import { FiSearch,} from "react-icons/fi";
import logos from "../../images/logos.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_main">
       <div className={'navbar_container'}>
       <Link to="/" className={'navbar_logo'}>
         <img src={logos} className={'navbar_images'}/>
       </Link>
         <div className={'navbar_searchbar'}>
           <form>
           <input className={'searchbar_input'} placeholder="Қидириш..." type="text"/>
             <button className={'navbar_search_submit'}>
               <FiSearch/>
             </button>
           </form>
         </div>
       </div>
        <div className={'navbar_top_categories'}>
          <ul>
          <li>
           <Link to="/" className={'navbar_categories_item'}>Бош сахифа</Link>
          </li>
            <li>
              <Link to="/Partner" className={'navbar_categories_item'}>Ҳамкорлар</Link>
            </li>
            <li>
              <Link to="/About" className={'navbar_categories_item'}>Биз ҳақимизда</Link>
            </li>
            <li>
              <Link to="/Contact" className={'navbar_categories_item'}>Алоқа</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default  Navbar