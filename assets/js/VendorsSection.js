import SectionComponentBase from "./SectionComponentBase.js";

class VendorsSection extends SectionComponentBase
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
        console.log("::Updating Vendors Section");

        const elVendorsContainer = document.getElementById("vendor-container");

        for(let objBrand of objBrands)
        {
            this._generateElement(objBrand, elVendorsContainer);
        }
    }

    /**
     * @param {Object} objBrand 
     * @param {Object} elContainer 
     */
    _generateElement(objBrand, elContainer)
    {
        const elTemplate = document.querySelector("#template-vendors");
        const elDivCard = elTemplate.content.querySelectorAll(".catalog-element")[0];
        
        const strNewElement = `
            <div class="card-image">
                <figure class="image">
                    <img src="${objBrand.imageLogoPath}" alt="Placeholder image">
                </figure>
             </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${objBrand.brandName}</p>
                    </div>
                </div>
                <div class="content">
                    <div>Origin country: ${objBrand.originCountry}</div>
                    <div>Number of employees: ${objBrand.numberOfEmployees}</div>
                    <div>Owner: ${objBrand.owner}</div>
                    <div>Worth: ${objBrand.worth}</div>
                    <br>
                </div>
            </div>
        `
        elDivCard.innerHTML  = strNewElement;
        const elNewCarCard = document.importNode(elTemplate.content, true);
        elContainer.appendChild(elNewCarCard);
    }
}

export default VendorsSection;