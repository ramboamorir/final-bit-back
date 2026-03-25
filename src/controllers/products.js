// import productModel from '../controllers/products.js';

const productsController = {
    create: async (req,res)=>{
            try {
                const {name, category, price, instock} = req.body;
                const newProduct = new productModel({
                    name,
                    category,
                    price,
                    instock,
                });
                await newProduct.save();
                res.status(201).json({message: 'Producto Creado'});
            } catch (error) {
                res.status(500).json({message: 'El producto no fue creado.'})
            }
        },

    readAll: async (req,res)=>{
        try {
            const allProducts = await productModel.find();
            res.status(201).json({data: allProducts});
        } catch (error) {
            res.status(500).json({ error: 'Error al encontrar los productos.'})
        }
    },

    read: async (req,res)=>{
        try {
            const {id} = req.params;
            const productFound = await productModel.findById(id);
            if(!productFound){
                res.status(404).json({message: 'Producto no encontrado'})
            }
            res.status(201).json({data: product})
        } catch (error) {
            res.status(500).json({message: 'Error al encontrar el producto'})
        }
    },

    update: async(req,res)=>{
        try{
            const {id} = req.params;
            const {name, category, price, instock} = req.body;
            const productUpdate = await productModel.findByIdAndUpdate(id,{
                name,
                category,
                price,
                instock
            })
            if(!productUpdate){
                res.status(404).json('Producto no encontrado')
            }else{
                res.status(200).json('Producto modificado.')
            }
        }catch(error){
            res.status(500).json({message: 'Error al leer el producto. ', error})
        }
    },
    delete: async (req,res)=>{
        try{
            const {id} = req.params;
            const productDelete = await productModel.findByIdAndDelete(id)
            if(!productDelete){
                res.status(404).json('Producto no encontrado')
            }else{
                res.status(200).json('Producto Eliminado.')
            }
        }catch(error){
            res.status(500).json({message: 'Error al leer el producto. ', error})
        }
    },
}

export default productsController;