class XMLLoader
{
    constructor()
    {
        console.log("::XMLLoader initialized");
        this._strLoadedXMLFile = null;
        this._DOMDocument = null;

        this._arrBrands = [];
        this._arrCars = [];

        this._arrSectionComponents = [];
    }

    // Parses the XML file loaded into a DOM document
    processXMLFile()
    {
        console.log("::Processing the loaded XML file.");
        const parser = new DOMParser();

        this._DOMDocument = parser.parseFromString(this._strLoadedXMLFile, "application/xml");
        console.log(this._DOMDocument);

        this._parseXMLDOM(this._DOMDocument);
        this._updateInterface(this._arrCars, this._arrBrands);
    }

    _parseXMLDOM(DOMDocument)
    {
        const arrElBrands = DOMDocument.getElementsByTagName("brand");

        for(let brand of arrElBrands)
        {
            let parsedBrand = this._parseBrand(brand);
            this._arrBrands.push( parsedBrand);
        }

        console.log(this._arrBrands);
    }

    _parseBrand(brand)
    {
        let objNewBrand = {};
        objNewBrand.brandName = brand.getElementsByTagName("brand_name")[0].textContent;
        objNewBrand.worth = brand.getElementsByTagName("worth")[0].textContent;
        objNewBrand.originCountry = brand.getElementsByTagName("origin_country")[0].textContent;
        objNewBrand.numberOfEmployees = brand.getElementsByTagName("number_of_employees")[0].textContent;
        objNewBrand.owner = brand.getElementsByTagName("owner")[0].textContent;
        objNewBrand.imageLogoPath = brand.getElementsByTagName("image_logo")[0].textContent;
    
        objNewBrand.carModels = this._parseModels(
            brand.getElementsByTagName("model"),
            objNewBrand.brandName
        );

        return objNewBrand;
    }

    _parseModels(models, strBrandName)
    {
        const brandCarModels = [];

        for(let model of models)
        {
            let objNewCarModel = {};
            objNewCarModel.name = model.getElementsByTagName("name")[0].textContent;
            objNewCarModel.type = model.getElementsByTagName("type")[0].textContent;
            objNewCarModel.width = model.getElementsByTagName("width")[0].textContent;
            objNewCarModel.length = model.getElementsByTagName("length")[0].textContent;
            objNewCarModel.maxSpeed = model.getElementsByTagName("max_speed")[0].textContent;
            objNewCarModel.numberOfDoors = model.getElementsByTagName("number_of_doors")[0].textContent;
            objNewCarModel.imagePath = model.getElementsByTagName("image")[0].textContent;
            objNewCarModel.brandModel = strBrandName;
    
            brandCarModels.push(objNewCarModel);
            this._arrCars.push(objNewCarModel);
        }

        return brandCarModels;
    }

    /**
     * Loads all resources from uri's provided by the loaded XML document,
     * and updates the interface by calling each section component update function.
     * 
     * @param {Object} objCars
     * @param {Object} objBrands
     */
    _updateInterface(objCars, objBrands)
    {
        this._arrSectionComponents.forEach((section) => {
            section.updateSection(objCars, objBrands, this._DOMDocument);
        });
    }



    /**
     * Loads the modal that blocks all interactions until the XML store file
     * is loaded and pased.
     */
    triggerModal()
    {
        const loadingModal = document.getElementById("loading-modal");
        const closingSpan = document.getElementsByClassName("close")[0];
        const xmlFileSelectorButton = document.getElementById("xml-file-selector");
        const xmlFileLoaderButton = document.getElementById("load-button");
        const reader = new FileReader();;

        loadingModal.style.display = "block";
        
        closingSpan.addEventListener("click", function(){
            loadingModal.style.display = "none";
            console.log("::Clicked on the X");
        });

        window.addEventListener("click", function(event){
            if(event.target == loadingModal)
            {
                // loadingModal.style.display = "none";
                console.log("::Clicked outside the content of the modal.");
            }
        });

        xmlFileSelectorButton.addEventListener("change", function(){
            console.log(this.files[0]);
            XMLLoader.selectedFile = this.files[0];
            xmlFileLoaderButton.style.display="block";
            document.getElementById("file-name-label").innerText = XMLLoader.selectedFile.name;
        });

        xmlFileLoaderButton.addEventListener("click", () => {
            if(this.constructor.selectedFile != null)
            {
                reader.readAsText(this.constructor.selectedFile);
                reader.onload = (e) => {
                    this._strLoadedXMLFile = e.target.result;

                    // Parse and load the necessary informations
                    this.processXMLFile();

                    console.log(`::Loaded file ${this.constructor.selectedFile.name}.`);
                    loadingModal.style.display = "none";
                };
            }
        })
    }

    setComponents(...arrComponents)
    {
        this._arrSectionComponents = arrComponents;
    }
}

export default XMLLoader;