import foodModel from "../models/FoodModel.js";


// const food item
 
const addFood = async (req,res) => {
  try{
    console.log("req body",req?.body)
  console.log("req image",req?.file)
  let image_filename = req?.file?.filename

  if (!image_filename) 
   {
    res.status(400).json({
    "Success":false,
    "Message ":"please provide an image"
    })
    }

  const food = new foodModel({
    name: req?.body?.name,
    description:req?.body?.description,
    price:req?.body?.price,
    category:req.body?.category,
    image:image_filename

  })
  
    await food.save();
    res.json({success:true,message:"Food Added"})
  } catch (error){
 console.log("add error",error)
 res.json({succes:false,message:error?.message})
  }

}
 export {addFood}
 