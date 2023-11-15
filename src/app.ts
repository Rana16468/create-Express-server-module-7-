import express, { NextFunction, Request, Response } from 'express'
const app = express();

//parser 
app.use(express.json());
app.use(express.text());

//middleware
const logger=(req:Request,res:Response,next:NextFunction)=>{

    console.log(req.url,req.hostname,req.method);
    next()

}

// router 
const useRouter=express.Router();
const courseRouter=express.Router();

// requested path
app.use('/api/v1/users',useRouter);
app.use('/api/v1/course',courseRouter);

//requested method in user Router
useRouter.get('/create-users',(req:Request,res:Response)=>{

    const user=req.body;
    console.log(user);
    res.json({
        success:true,
        message:'successfuly user Information loaded',
        user
    });

});

// requested method in coursed router

courseRouter.post('/developmentCourse',(req:Request,res:Response)=>{

    const course=req.body;
    console.log(course);
    res.json({
        success:true,
        message:'course post successfully',
        course
    })

})



app.get('/',logger, (req:Request, res:Response,next:NextFunction) => {

   ///error handeling 
   
    try{
        res.send('Ali Mohammad Sohel Rana ');
    }
    catch(error){
       next(error);
    }
  
    
   
   
  
});
app.post('/', logger,(req:Request,res:Response)=>{

    console.log(req.body);
    res.json({
        message:'successfully recivied data'
    });


});

// golbal any types of error handeling 

app.all('*',(req:Request,res:Response)=>{

    res.json({
        success:false,
        message:'Route Not Found'
    })

})

//global error handeling process 
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{

   if(error)
   {
     res.status(500).json({
        success:false,
        message:'Something went Wrong',
        error
     })
   }

})

export default app;

