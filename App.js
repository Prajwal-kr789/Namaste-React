 const parent = React.createElement("div",{id:"parent"},
 React.createElement("div",{id:"child"},[
 React.createElement("h1",{},"Hello world!!"),
 React.createElement("h1",{},"Hello world2!!"),
])
 )
 
 const heading = React.createElement("h1",{id:"heading"},"Namaste Javascript")

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)