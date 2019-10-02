const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async findAll(req, resp){
        const { page=1 } = req.query; //getting page query info from req and set default page as 1
        const products = await Product.paginate({}, {page, limit: 10});//First {} used to filter query
        return resp.json(products);
    },

    async findById(req, resp){
        const id = req.params.id;
        const product = await Product.findById(id);
        return resp.json(product);
    },

    async create(req, resp){
        const p = await Product.create(req.body);
        return resp.json(p);
    },

    async update(req, resp){
        //new:true -> notify mongoose to return updated object, if don't non updated object will be returned
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return resp.json(product);
    },

    async delete(req, resp){
        await Product.findByIdAndRemove(req.params.id);
        return resp.send();
    }
};