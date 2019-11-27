import React from "react";
//import Split from "./composition/Split";
import "./App.css";
//import Tooltip from "./composition/Tooltip";
//import Messages from "./snapShotTest/Messages";
//import TheDate from "./state/TheDate";
//import Counter from "./state/Counter";
import HelloWorld from "./state_drills/HelloWorld";
import Bomb from "./state_drills/Bomb";
import Gun from "./state_drills/RouletteGun";
import Tabs from "./state/Tabs";
import Accordion from "./state_drills/Accordion";
/*
const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    ipsum
  </Tooltip>
);
const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiis
  </Tooltip>
);

function App() {
  return (
    <main className="App">
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
      <TheDate />
      <Counter step={2} />
      <Split className="left" flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} dolor sit
        amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere
        officia?
        <br />
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo
        possimus id soluta aspernatur.
      </Split>
    </main>
  );
}
*/
//Tabs test prop
const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  }
];

//Accordion test prop
const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];

function App() {
  return (
    <main className="App">
      <div>
        <h1>HELLO WORLD</h1>
        <HelloWorld />
      </div>
      <div>
        <h1>BOMB</h1>
        <Bomb />
      </div>
      <div>
        <h1>ROULETTEGUN</h1>
        <Gun bulletInChamber={Math.ceil(Math.random() * 8)} />
      </div>
      <div>
        <h1>TABS</h1>
        <Tabs tabs={tabsProp} />
      </div>
      <div>
        <h1>ACCORDION</h1>
        <Accordion sections={sections} />
      </div>
    </main>
  );
}

export default App;
