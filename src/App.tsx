// App.tsx
import { useState } from "react";
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const wordCategories = {
  frutas: {
    words: ['manzana', 'pera', 'sandía', 'mango', 'uva', 'kiwi'],
    hints: {
      manzana: 'Es roja o verde y comúnmente asociada con Adán y Eva',
      pera: 'Es de forma similar a una lágrima y de sabor dulce',
      sandía: 'Es una fruta grande y jugosa, de color verde por fuera y rojo por dentro',
      mango: 'Es una fruta tropical, de cáscara de color amarillo o rojo y pulpa jugosa',
      uva: 'Es una pequeña fruta que crece en racimos y se utiliza para hacer vino',
      kiwi: 'Es una fruta pequeña y peluda, de color marrón por fuera y verde por dentro'
    }
  },
  países: {
    words: ['francia', 'italia', 'españa', 'alemania', 'japón', 'brasil'],
    hints: {
      francia: 'Es conocido por la Torre Eiffel y la moda',
      italia: 'Es famoso por la pizza, la pasta y el Coliseo',
      españa: 'Es conocido por la paella, el flamenco y la Sagrada Familia',
      alemania: 'Es famoso por la cerveza, la salchicha y el Oktoberfest',
      japón: 'Es conocido por el sushi, el manga y el Monte Fuji',
      brasil: 'Es famoso por el fútbol, el carnaval y la selva amazónica'
    }
  },
  instrumentos: {
    words: ['guitarra', 'piano', 'violín', 'trompeta', 'batería', 'flauta'],
    hints: {
      guitarra: 'Es un instrumento de cuerda que se toca con los dedos o una púa',
      piano: 'Es un instrumento de teclado que produce sonidos al golpear las teclas',
      violín: 'Es un instrumento de cuerda frotada que se toca con un arco',
      trompeta: 'Es un instrumento de viento-metal que se toca con la boca',
      batería: 'Es un conjunto de tambores y platillos que se toca con baquetas',
      flauta: 'Es un instrumento de viento-madera que se toca soplando por un extremo'
    }
  },
  colores: {
    words: ['rojo', 'azul', 'amarillo', 'verde', 'naranja', 'violeta'],
    hints: {
      rojo: 'Es el color de la sangre y se asocia con el amor y la pasión',
      azul: 'Es el color del cielo y el mar, y se asocia con la calma y la serenidad',
      amarillo: 'Es el color del sol y se asocia con la alegría y la energía',
      verde: 'Es el color de la naturaleza y se asocia con la frescura y la vida',
      naranja: 'Es el color de la fruta y se asocia con la vitalidad y la creatividad',
      violeta: 'Es un color entre azul y rojo, y se asocia con la imaginación y la espiritualidad'
    }
  },
  peliculasDisney: {
    words: ['aladdin', 'frozen', 'moana', 'mulan', 'pocahontas', 'coco'],
    hints: {
      aladdin: 'Es un joven pobre que encuentra una lámpara mágica con un genio dentro',
      frozen: 'Dos hermanas luchan contra el invierno eterno causado por los poderes de una de ellas',
      moana: 'Una joven navegante emprende un viaje para salvar a su isla y descubre su verdadero destino',
      mulan: 'Una joven se disfraza de hombre para luchar en lugar de su padre en el ejército chino',
      pocahontas: 'Una princesa indígena se enamora de un colonizador inglés en los tiempos de la colonización de América',
      coco: 'Un niño mexicano viaja al mundo de los muertos para descubrir la verdad sobre su familia'
    }
  }
};

function App() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const selectRandomCategory = () => {
    const categories = Object.keys(wordCategories);
    const randomIndex = Math.floor(Math.random() * categories.length);
    setCurrentCategory(categories[randomIndex]);
  };

  return (
    <div className="App">
      <Welcome />
      <div className="category-container">
        <button onClick={selectRandomCategory} className="random-button">
          Select Random Category
        </button>
        {currentCategory && (
          <div className="category-animation">
            <h2>{currentCategory}</h2>
            <Hangman
              words={wordCategories[currentCategory].words}
              hints={wordCategories[currentCategory].hints}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

