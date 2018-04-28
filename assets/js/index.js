import XMLLoader from "./XMLLoader.js"
import CatalogSection from "./CatalogSection.js";
import VendorsSection from "./VendorsSection.js";

function init()
{
    console.log("::Page initialized");
    const objXMLLoader = new XMLLoader();

    // Load the page components
    objXMLLoader.setComponents(
        new CatalogSection(),
        new VendorsSection()
    );

    objXMLLoader.triggerModal();
}

export default init;