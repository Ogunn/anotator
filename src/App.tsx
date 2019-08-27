import React from "react";

import WordAnotator from "./components/WordAnotator";

const App: React.FC = () => {
  return (
    <div className="App">
      <WordAnotator
        id={"1"}
        text={
          "Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. "
        }
        labels={["cacilds", "forevis", "mé"]}
      />
    </div>
  );
};

export default App;
