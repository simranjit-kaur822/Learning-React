const mainContainer = document.getElementById("root");

const createElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank",
    },
    children : "Go to Google",
}

ReactRender(createElement, mainContainer);

function ReactRender(element, container) {
    const newElement = document.createElement(element.type);

    newElement.innerHTML = element.children;

    for(const prop in element.props) { 
        newElement.setAttribute(prop, element.props[prop]);  
    }

    // newElement.setAttribute("href", element.props.href);
    // newElement.setAttribute("target", element.props.target);    

    container.appendChild(newElement);
}