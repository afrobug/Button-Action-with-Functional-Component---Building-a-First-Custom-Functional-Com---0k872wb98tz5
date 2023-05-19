import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
const [showPara, setShowPara] = useState(false);

const handleClick = () => {
setShowPara(true);
};

return (
<div id="main">
<button id="click" onClick={handleClick}>click me</button>
{showPara && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
</div>
);
}

export default App;
