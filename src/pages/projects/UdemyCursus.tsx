import reactImg from "../../assets/react-core-concepts.png";
import componentsImg from "../../assets/components.png";
import TabButton from "../../components/TabButton.js";
import { CORE_CONCEPTS, EXAMPLES } from "../../data/data.js";
import { useState } from "react";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props: CORE_CONCEPTS) {
  return (
    <li>
      <img className="headerUdemyimg" src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header className="headerUdemy">
      <img className="headerUdemyimg" src={reactImg} alt="Stylized atom" />
      <h1 className="headerUdemyh1">React Essentials</h1>
      <p className="headerUdemyp">
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function Udemy() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div className="htmlUdemy">
      <Header />
      <main className="mainUdemy">
        <section id="core-concepts">
          <h2 className="mainUdemyh2">Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2 className="mainUdemyh2">Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3 className="headerUdemyh3">{EXAMPLES[selectedTopic].title}</h3>
            <p className="headerUdemyp">
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Udemy;
