import SectionComponentBase from "./SectionComponentBase.js"

class OverviewSection extends SectionComponentBase
{
    constructor()
    {
        super();

        this._selectedFile = null;
        this._strXSLFile = null;

        this._XSLDOMDocument = null;
        this._XMLDOMDocument = null;
    }

    /**
     * @param {Object} objCars
     * @param {Object} objBrands
     */
    updateSection(objCars, objBrands, XMLDOMDocument)
    {
        console.log("::Updating Overview Section");
        this._XMLDOMDocument = XMLDOMDocument;

        const elOverviewContainer = document.getElementById("overview-container");
        const elXLSFileSelector = document.getElementById("xls-file-selector");;
        const elButtonLoadXSL = document.getElementById("xls-load-button");
        const reader = new FileReader();

        elXLSFileSelector.addEventListener("change", function(){
            console.log("::Loaded XSL File");
            this._selectedFile = this.files[0];

            document.getElementById("xls-name-label").innerText = this._selectedFile.name;
            // TODO make load button visible only after we select a xsl file
        });


        elButtonLoadXSL.addEventListener("click", () => {
            console.log(this._selectedFile);
            if(this._selectedFile != null)
            {
                console.log("hereeweqweqweqe");
                
                reader.readAsText(this._selectedFile);
                reader.onload = (e) => {
                    this._strXSLFile = e.target.result;

                    console.log(`::Loaded file ${this._selectedFile.name}.`);
                    this._generateElement(objBrands, elOverviewContainer);
                };
            }
        });
    }

    /**
     * @param {Object} objCarData 
     * @param {Object} elContainer 
     */
    _generateElement(objCarData, elContainer)
    {
        const parser = new DOMParser();
        this._XSLDOMDocument = parser.parseFromString(this._strXSLFile, "application/xml");

        const xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(this._XSLDOMDocument);

        const resultDocument = xsltProcessor.transformToFragment(this._XMLDOMDocument, document);

        elContainer.appendChild(resultDocument);
    }
}

export default OverviewSection;