import XMLLoader from "./XMLLoader.js";

import CatalogSection from "./CatalogSection.js";
import VendorsSection from "./VendorsSection.js";
import OverviewSection from "./OverviewSection.js";

function init()
{
    console.log("::Page initialized");
    const objXMLLoader = new XMLLoader();

    // Load the page components
    objXMLLoader.setComponents(
        new CatalogSection(),
        new VendorsSection(),
        new OverviewSection()
    );

    objXMLLoader.triggerModal();
}

export default init;