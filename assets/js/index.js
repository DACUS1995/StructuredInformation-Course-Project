import XMLLoader from "./XMLLoader.js"

function init()
{
    console.log("::Page initialized");
    const objXMLLoader = new XMLLoader();

    objXMLLoader.triggerModal();
}

export default init;