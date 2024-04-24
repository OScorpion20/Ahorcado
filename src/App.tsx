// App.tsx
import { useState } from "react";
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const wordCategories = {
  ciudadesDelMundo: {
    words: ['nuevayork', 'paris', 'tokio', 'roma', 'sidney', 'estambul'],
    hints: {
      nuevayork: 'La ciudad que nunca duerme, conocida por sus rascacielos y la Estatua de la Libertad',
      paris: 'La Ciudad de la Luz, famosa por la Torre Eiffel y el Louvre',
      tokio: 'Una metrópolis vibrante y moderna, conocida por su tecnología y cultura pop',
      roma: 'La Ciudad Eterna, llena de historia antigua y monumentos impresionantes',
      sidney: 'Situada en la costa australiana, conocida por la Ópera de Sídney y el Puente del Puerto',
      estambul: 'Una ciudad única que conecta Europa y Asia, conocida por sus mezquitas y bazares'
    }
  },
  generosMusicales: {
    words: ['rock', 'jazz', 'hiphop', 'electronica', 'clasica', 'reggae'],
    hints: {
      rock: 'Un género de música popular que se caracteriza por el uso de guitarras eléctricas y ritmos fuertes',
      jazz: 'Un estilo musical que se originó en los Estados Unidos, conocido por su improvisación y complejidad armónica',
      hiphop: 'Un género de música y cultura que se originó en las comunidades afroamericanas y latinas de Nueva York',
      electronica: 'Un género de música que se produce utilizando equipos electrónicos y tecnología de sintetizador',
      clasica: 'Un estilo de música que abarca obras de compositores como Beethoven, Mozart y Bach',
      reggae: 'Un género musical jamaicano que se caracteriza por un ritmo relajado y mensajes sociales'
    }
  },
  superheroes: {
    words: ['superman', 'spiderman', 'wonderwoman', 'batman', 'ironman', 'blackpanther'],
    hints: {
      superman: 'Un icónico superhéroe de DC Comics, conocido por su fuerza sobrehumana y su capa roja y azul',
      spiderman: 'Un héroe de Marvel Comics conocido por sus habilidades arácnidas y su sentido de la responsabilidad',
      wonderwoman: 'Una heroína de DC Comics, símbolo de fuerza y justicia con su lazo de la verdad y brazaletes indestructibles',
      batman: 'El Caballero de la Noche, un vigilante de Gotham City conocido por su inteligencia y habilidades de detective',
      ironman: 'Un superhéroe de Marvel, famoso por su armadura tecnológica y su mente ingeniosa',
      blackpanther: 'Un héroe de Marvel Comics y rey de Wakanda, conocido por su fuerza física y su tecnología avanzada'
    }
  },
  cocinaInternacional: {
    words: ['sushi', 'paella', 'curry', 'tacos', 'pasta'],
    hints: {
      sushi: 'Un plato japonés que consiste en arroz sazonado con vinagre y combinado con pescado crudo o mariscos',
      paella: 'Un plato español de arroz cocido con azafrán y una variedad de mariscos, carne y verduras',
      curry: 'Un plato de origen indio que consiste en una mezcla de especias y hierbas con carne, verduras o legumbres',
      tacos: 'Un plato mexicano que consiste en una tortilla de maíz o harina rellena de carne, pescado o verduras',
      pasta: 'Un plato italiano que incluye una variedad de formas de masa con salsas como marinara, alfredo o pesto'
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

