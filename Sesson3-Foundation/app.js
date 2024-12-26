import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = <h1 id="heading1">Namaste React</h1>;
const Heading2 = () => <h2 id="heading2">How are you doing?</h2>;
const hello = "helloWorld!"
const Heading3 = () => <h3 id="heading3">Bye</h3>;
const Container = function() {
    return (<div id="container">{Heading1} {hello} {Heading2()} <Heading3/></div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Container/>)

