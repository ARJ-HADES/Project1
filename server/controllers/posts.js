import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'


 export const getPosts = async(req,res)=>{
    try {
        const postMessages = await PostMessage.find()

      

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
 }



 export const createPost= async (req,res)=>{

    const post=req.body


    const newPost =new PostMessage(post)

     try {
         await newPost.save()


         
// https://www.restapitutorial.com/httpstatuscodes.html
         res.status(201).jason(newPost)
         
     } catch (error) {
         res.status(401).jason({message: error.message})
         
     }
 }


 export const updatePost = async (res, req) =>{
     const {id : _id} = req.params
     const post =req.body

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id')

     
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {... post, _id}, {new :true}) 

     res.jason(updatedPost)

 }
