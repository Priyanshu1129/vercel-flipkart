import product from "./model/product.js";
import { Products } from "./Constants/data.js";

const DefalutData = async()=>{
    try {
        await product.insertMany(Products)
        console.log('Data imported successfully...')
    } catch (error) {
        console.log(`Error while inserting default data ---`,error.message)
    }
}

export default DefalutData