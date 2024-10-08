import { adatLista } from './adatok';
import {useState} from "react"
import './App.css';
import Kartyak from './components/Kartyak';

function App() {
  // state az egy változó,a program állapotát írja le
  // usestate függvénnyel tudjuk beállítani az értékét
  // react figyeli, hogy a stateknek mikor változik az állapota
  // amikor változik, akkor automatikusan frissíteni fogja az oldalnak ezen részét


  //const kivalasztottLista=[]
  const [kivalasztottLista, setKivalasztottLista]=useState([])
  function kattKez(adat){
    // ez a függvény fogja lekezelni a gyerekkomponenstől kapott infókat
    console.log(adat)
    // a statek értékét közvetlenül nem módosíthatjuk, csak a hozzájuk rendelt függvények segítségével
    const ujlista=[...kivalasztottLista]
    ujlista.push(adat)
    setKivalasztottLista(...ujlista)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Helló React!
        </h1>
      </header>
      <main>
        <article>
          <Kartyak lista={adatLista} kattKez={kattKez} />
        </article>
        <aside>
          <h3>Kiválasztott könyvek</h3>
          <Kartyak lista={kivalasztottLista} kattKez={kattKez} />
        </aside>
        <footer>Lukács Alexandra</footer>
      </main>
    </div>
  );
}

export default App;
