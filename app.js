const express = require("express")
const users = require('./userDetails')
const app = express()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/user',(req,res)=>{
    res.status(200).json({
        success:true,
        result:users.userData.user
    })
    //res.send('user data');
})

app.get('/user/:id',(req,res)=>{
    try{
        const data = users.userData.user
        const result  =data.filter((res)=> res.id==req.params.id)
        console.log(result," my result",result.length)
        if(result.length>0){
            res.status(200).json({
                success:true,
                result
            })
        }else{
            res.status(404).json({
                success:false,
                msg:'Result not found'
            })
        }
        //res.send(`user details for id ${req.params.id}`)

    }catch(error){
        res.status(404).json({
            success:false,
            msg:'Result not found'
        })
        //res.send(`Error ${error}`)
    }
})
app.listen(port,()=>{
    console.log(`Server Connect Succefully on port:${port}`)
})