import SectionComponentBase from "./SectionComponentBase.js";

class CatalogSection extends SectionComponentBase
{
    constructor()
    {
        super();
    }

    /**
     * @param {Object} objCars
     * @param {Object} objBrands
     */
    updateSection(objCars, objBrands)
    {
        console.log("::Updating Catalog Section");

        const elCatalogContainer = document.getElementById("catalog-container");

        for(let objCarSpec of objCars)
        {
            this._generateElement(objCarSpec, elCatalogContainer);
        }
    }

    /**
     * @param {Object} objCarData 
     * @param {Object} elContainer 
     */
    _generateElement(objCarData, elContainer)
    {
        const elTemplate = document.querySelector("#template-car-model");
        const elDivCard = elTemplate.content.querySelectorAll(".catalog-element")[0];
        
        const strNewElement = `
            <div class="card-image">
                <figure class="image">
                    <img src="${objCarData.imagePath}" alt="Placeholder image">
                </figure>
             </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${objCarData.brandModel}</p>
                        <p class="subtitle is-6">${objCarData.brandModel}</p>
                    </div>
                </div>
                <div class="content">
                    <div>Type: ${objCarData.type}</div>
                    <div>Number of doors: ${objCarData.numberOfDoors}</div>
                    <div>Maximum speed: ${objCarData.maxSpeed}</div>
                    <div>Length: ${objCarData.length}</div>
                    <div>Width: ${objCarData.width}</div>
                    <br>
                </div>
            </div>
        `
        elDivCard.innerHTML  = strNewElement;
        const elNewCarCard = document.importNode(elTemplate.content, true);
        elContainer.appendChild(elNewCarCard);
    }
}

export default CatalogSection;