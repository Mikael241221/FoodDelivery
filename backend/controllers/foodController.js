import foodModel from "../models/foodModel.js";
import fs from 'fs'

// const food item
 
 const addFood = async (req,res) => {
  // try{
  //   console.log("req body",req?.body)
  //   const {name,description,image,category,price}=req.body
  //   if(!name|| !description ||!category||!price){
  //     throw new Error("All fields are required")
  //   }
  // console.log("req image",req?.file)

  let image_filename = `${req?.file?.filename}`;

  // if (!image_filename) 
  //  {
  //  throw new Error("Image is required")
  //   }

  const food = new foodModel({
    name: req?.body?.name,
    description:req?.body?.description,
    price:req?.body?.price,
    category:req.body?.category,
    image:image_filename

  })

try {
  await food.save();
  res.json({succes:true,message:"Food Added"})
  
} catch (error) {
  console.log(error)
  res.json({succes:false,message:"Error"})

  
}




  
//     await food.save();
//     res.status(200).json({success:true,message:"Food Added"})
//   } catch (error){
//  console.log("add error",error)
//  res.status(400).json({succes:false,message:error?.message})
//   }
  }
   
  // all listFood list items 
  const listFood = async(req, res) => {
    try {
      const foods = await foodModel.find({})
      res.json({success:true,data:foods})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
    
    }

  }
  // remove food item 
  const removeFood = async(req, res) => {
   try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food Removed"})
   } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
   }
  }
 export {addFood, listFood, removeFood}
 






 
