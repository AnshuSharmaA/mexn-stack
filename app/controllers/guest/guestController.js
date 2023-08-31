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

module.exports = {
    index,
}