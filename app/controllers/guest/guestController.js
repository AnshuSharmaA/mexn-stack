/**
 * Guest Controller
 * 
 */

const index = (req,resp)=>{
    try {
        resp.render('guest/index.ejs');
    } catch (error) {
        
    }
}
const contact = (req,resp)=>{
    try {
        resp.render('guest/contact.ejs');
    } catch (error) {
        
    }
}
const about = (req,resp)=>{
    try {
        resp.render('guest/about.ejs');
    } catch (error) {
        
    }
}
const product = (req,resp)=>{
    try {
        resp.render('guest/product.ejs');
    } catch (error) {
        
    }
}

module.exports = {
    index,
    contact,
    about,
    product
}