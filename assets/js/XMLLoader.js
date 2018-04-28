class XMLLoader
{
    constructor()
    {
        console.log("::XMLLoader initialized");
        this.strLoadedXMLFile = null;
    }

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
                console.log("::Clicked outside the content of the modal");
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
                reader.onload = (e) => {this.strLoadedXMLFile = e.target.result;};
                console.log(`::Loaded file "${this.constructor.selectedFile.name}"`);
            }
        })
    }
}

export default XMLLoader;