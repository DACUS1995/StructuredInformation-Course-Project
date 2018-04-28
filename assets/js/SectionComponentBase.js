class SectionComponentBase
{
    constructor()
    {
        
    }

    /**
     * @param {Object} objCars
     * @param {Object} objBrands
     */
    updateSection(objCars, objBrands)
    {
        throw new Error("Must be implemented");
    }

   /**
     * @param {Object} objCarData 
     * @param {Object} elContainer 
     */
    _generateElement(objCarData, elContainer)
    {
        throw new Error("Must be implemented");
    }
}

export default SectionComponentBase;