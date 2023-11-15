# **7-1 What is nodejs , a high level overview of node.js**

V8  engine is runtime  which is working  java Script code  execute in server site.

### Libuv

Libuv is library , it is also development by the c++ and java Script. which is the helping networking and asynchronous programming

There are two types 

1. Even Loop —>  handel by the called abck and Network Input and Output 
2. Thread Pool  —> CPU Intensive task perform , File Access , File Compresstion  and   Cryptography 

# ****7-2 What is module, common js vs esm****

https://nodejs.org/dist/latest-v20.x/docs/api/path.html

1. common js 
2. esm 

common js —→ various types are 

1. require
2. export /module.export

ESM

1. import 
2. export default 
3. .mjs

**Common JS** 

file Name: local-1.js  ——> Local Module 

```jsx
/*const add=(param1,param2)=>param1 + param2;
const a=10
module.exports={add,a};
```

File Name : local-2.js

```jsx
/*const add=(param1,param2,param3)=>param1 + param2 +param3;
const a=20;
module.exports={add,a};
```

File Name : index.js

```jsx
/*const {add,a}=require('./local-1');
const {add:add1,a:a1}=require('./local-2');
console.log(add(2,3));
console.log(a);
console.log(add1(10,20,30));
console.log(a1);
```

Built -in module 

```jsx
/*const path=require('path');
console.log(path.parse);
```

```jsx
/*const path=require('path');
console.log(path.parse('E:\Learning-Nodes\index.js'));
```

# ****7-3 File System Module , synchronous vs asynchronous****

Node js File System https://nodejs.org/dist/latest-v20.x/docs/api/fs.html

1. ****synchronous means blocking threads**** 

1. https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fsreadfilepath-options-callback  read File (****asynchronous)****
2. https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs write file (****asynchronous)****
3. Synchronous Coding 

```jsx
/*const fs=require('fs');
//read the file
const read=fs.readFileSync('./Texts/Read.txt','utf-8');
console.log(read);
//writing the text
//https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fswritefilesyncfile-data-options
const writtenText=fs.writeFileSync('./Texts/write.txt',read +' Ali Mohammad Sohel Rana');
console.log(writtenText);
```

1. Asynchronous Coding 

```jsx
/*const fs=require('fs');
// read asynchronously 
fs.readFile('./Texts/Read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error(err);
    }
    else{
        console.log(data);
        // write asynchronously 
        fs.writeFile('./Texts/Write2.txt',data,'utf-8',(err,data)=>{
            if(err){
                throw Error (err);
            }
        })
    }
})
```

# ****7-4 Event driven architecture, create your own events****

1. https://nodejs.org/dist/latest-v20.x/docs/api/events.html#emitteremiteventname-args
2. ****driven architecture code**** 

```jsx
/*const  EventEmitter=require('events');
// create instance;
const myEmitter=new EventEmitter();
myEmitter.on('university',()=>{
    console.log('My University Name is Daffodil International University Dahaka Bangladesh');
});
myEmitter.on('university',(gift)=>{
    console.log(`Not goood but like a distroy your life ${gift}`);
})
myEmitter.emit('university','killer');
```

# **7-5 Stream and buffer, create your own server**

Different Types of Streams

1. Readable stream
2. writable stream
3. duplex stream
4. Transform stream
5. https://nodejs.org/dist/latest-v20.x/docs/api/http.html#httpcreateserveroptions-requestlistener
6. https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fscreatereadstreampath-options

```jsx
/*const http = require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');
// create a server using raw node js 
const server=http.createServer();
server.on('request',(req,res)=>{

    console.log(req.url,req.method);
    if(req.url==='read-file' && req.method==='GET');
    
     const readableStreaming= fs.createReadStream('./Texts/Read.txt');
       readableStreaming.on('data',(buffer)=>{
        res.write(buffer)
       });
    readableStreaming.on('end',()=>{
        res.end('Hellow server running  ')
    })
```

```jsx
/*const http = require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');
// create a server using raw node js 
const server=http.createServer();
server.on('request',(req,res)=>{

    console.log(req.url,req.method);
    if(req.url==='read-file' && req.method==='GET');
    
     const readableStreaming= fs.createReadStream('./Texts/Read.txt');
       readableStreaming.on('data',(buffer)=>{
        res.statusCode=200;
        res.write(buffer)
       });
    readableStreaming.on('end',()=>{
        res.statusCode=200;
        res.end('Hellow server running  ')
    });
    readableStreaming.on('error',(err)=>{
        res.end('Something went wrong And the error is '+err);
    })
       
        

    

   

});
server.listen(5000,()=>{
    console.log('server is Running port No 5000')
});*/
```

# ****7-6 Installing express, typescript****

how to create express server using typescript and run the server 

1 step 1   : https://expressjs.com/en/starter/installing.html   but not create index.js file 

2  step2️⃣ :   type Script dev dependency install : `npm install -D typescript`

3 step 3:  install type Script compiler : tsc —init

4  step 4:  create file folder :

 step 1 : create source folder : src —→ folder name 

step 2:  src under create app folder .

step 3:  src folder under create app.ts file and server.ts file 

step 4:  go to the tsconfig.json  —→ search the rootDic and rootDic added : rootDic;’./src/’

step5: go to the tsconfig.json  —→ search the outDir and rootDic added : outDic;’./dist

5 step 6: express js doc code execute in app.js file 

6 step 7:  npm install --save @types/node 

1. step 8:  import express from ‘express’
2. step 9:  npm install --save @types/express
3. step 10:  runtime : needed 2 ternimal 

first terminal  code : tsc -w

second termenatl:  nodemon dist/server.js

# **7-7 What is parsers, request and response object**

# ****7-8 middleware in express.js****

1.https://expressjs.com/en/guide/error-handling.html#error-handling

```tsx
/*import express, { NextFunction, Request, Response } from 'express'
const app = express();

//parser 
app.use(express.json());
app.use(express.text());

//middleware ---> ****7-8 middleware in express.js****
const logger=(req:Request,res:Response,next:NextFunction)=>{

    console.log(req.url,req.hostname,req.method);
    next()

}

app.get('/',logger, (req:Request, res:Response) => {

   
   
  res.send('my Name sohel Rana!')
});
app.post('/', logger,(req:Request,res:Response)=>{

    console.log(req.body);
    res.json({
        message:'successfully recivied data'
    });

})

export default app;*/
```

# **7-9 Routing in express.js**

```tsx
/*import express, { NextFunction, Request, Response } from 'express'
const app = express();

//parser 
app.use(express.json());

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

export default app;*/
```

# **7-10 express Error Handler part 1PreviousNext**

```tsx
/*import express, { NextFunction, Request, Response } from 'express'
const app = express();

app.use(express.text());
app.use(express.json());

// router 
/*const useRouter=express.Router();
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

});*/

/*app.get('/',logger, (req:Request, res:Response,next:NextFunction) => {

   ///error handeling 
   
    try{
        res.send('Ali Mohammad Sohel Rana');
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

export default app;*/
```