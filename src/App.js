import './App.css';
import Film from './Components/Film/Film';
const films = [
  {name:'Joy', genre: 'drama',poster:'../../images/titane.jpg', year: 2016},
  {name:'Joy', genre: 'drama', poster:'joyposter', year: 2016},
  {name:'Joy', genre: 'drama',poster:'joyposter', year: 2016},
  {name:'Joy', genre: 'drama',poster:'joyposter', year: 2016}

]
function App() {
  return (
    <div className="App">
      {
        films.map((film,index)=> (
          <Film name={film.name} genre={film.genre} poster={film.poster} year={film.year}/>


        )
        
        )
      }
    </div>
  );
}

export default App;
