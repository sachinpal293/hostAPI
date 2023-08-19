const Product = require("../models/productDb");
const getAllProducts = async (req, res) =>{
    const {company,name,sort,select} = req.query;
    const queryObject = {};
    if(company)
    {
        queryObject.company = company;
    }
    if(name)
    {
        queryObject.name = {$regex : name , $options :"i"};
    }
    
    let apidata = Product.find(queryObject);
    if(sort)
    {
        let sortFix = sort.replace(",", " ");        
        apidata = apidata.sort(sortFix);
    }

    if(select)
    {
        let sortFix = select.split(",").join(" ");        
        apidata = apidata.select(sortFix);
    }

     let page = Number(req.query.page)||1;
     let limit =Number(req.query.limit)||10;

     let skip = (page - 1) * limit;

     apidat = apidata.skip(skip).limit(limit);

    // console.log(queryObject);
    const Products = await apidata;
    res.status(200).json({Products, nbHits:Products.length});
}


const getAllProductsTesting = async (req, res) =>{
    const mydata = await Product.find(req.query).select("name company")
    // console.log(req.query);
    res.status(200).json({mydata, nbHits:mydata.length});
}


module.exports = {getAllProducts, getAllProductsTesting};