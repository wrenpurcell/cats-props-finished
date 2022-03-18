import Contact from "./Contact";
import mrWhiskerson from "./images/mr-whiskerson.png"
import felix from './images/felix.png'
import fluffykins from './images/fluffykins.png'
import pumpkin from './images/pumpkin.png'
import styles from './style.css'

function App() {
  return (
    <div className="contacts">
      <Contact 
        img={mrWhiskerson} 
        name={'Mr. Whiskerson'}
        phone={'(212) 555-1234'}
        email={'mr.whiskaz@catnap.meow'}
        />
      <Contact 
        img={felix}
        name={'Felix'}
        phone={'(212) 555-4567'}
        email={'thecat@hotmail.com'}
        />
      <Contact 
        img={fluffykins}
        name={'Fluffykins'}
        phone={'(212) 555-2345'}
        email={'fluff@me.com'}
        />
      <Contact 
        img={pumpkin}
        name={'Pumpkin'}
        phone={'(0800) CAT KING'}
        email={'pumpkin@scrimba.com'}
        />
    </div>
  );
}
export default App;

