const express=require("express");
const fs=require("fs");
const app=express();
const multer = require("multer");
const cors=require("cors");
const mongoose=require('mongoose');
const path = require("path");
require('dotenv').config(); 


const port= process.env.PORT || 5000;
const RegisterModel=require('./models/register')
const VideoModel=require('./models/video')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors(
  {
    origin: ["https://collab-learn.vercel.app"],
    methods: ["POST","GET","OPTIONS"],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }
));

// Use the connection string from the .env file
const conString = process.env.CON_STRING;

// mongoose.connect("mongodb://127.0.0.1:27017/registrations");
mongoose.connect(conString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/upload-video', upload.single('video'), (req, res) => {
    // Handle storing the video's metadata in the MongoDB collection
    const videoData = {
      videotitle: req.body.videotitle,
      author: req.body.author,
      tag: req.body.tag,
      videoFileName: req.file.filename,
    };
  
    // Save videoData to the MongoDB collection for videos
    VideoModel.create(videoData)
      .then((video) => {
        res.json(video);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error saving video data' });
      });
  });

  
  app.get('/stream-video/:videotitle', async (req, res) => {
    const videotitle = req.params.videotitle;
    try {
      const video = await VideoModel.findOne({ videotitle });
      if (!video) {
        console.error('Video not found:', videotitle);
        return res.status(404).send('Video not found');
      }
  
      // Set appropriate headers
      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Content-Disposition', `attachment; filename="${video.videoFileName}"`);
  
      // Stream the video file
      const videoFilePath = path.join('uploads', video.videoFileName);
      const videoStream = fs.createReadStream(videoFilePath);
      videoStream.pipe(res);
    } catch (err) {
      console.error('Error retrieving video:', err);
      res.status(500).send('Error retrieving video');
    }
  });
  

  
  
app.post("/login",(req,res) =>{
    const {email,password} =req.body;
    RegisterModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.role==="teacher"){
                if(user.password===password){
                    res.json("tpage")
                }
                else{
                    res.json("password is incorrect")
                }

            }
            else if(user.role==="student"){
                if(user.password===password){
                    res.json("spage")
                }
                else{
                    res.json("password is incorrect")
                }
            }
        }
        else{
            res.json("User does not exist")
        }
    })
})


// app.post("/register", async(req,res)=>{
//     RegisterModel.create(req.body)
//     .then(users =>res.json(users))
//     .catch(err => res.json(err))
// });

app.post("/register", async (req, res) => {
  console.log('Request received:', req.body); // Log request data
  try {
    const user = await RegisterModel.create(req.body);
    res.json(user);
  } catch (err) {
    console.error('Error creating user:', err); // Log errors
    res.status(500).json(err);
  }
});


app.listen(port,()=> {
    console.log(`server is running at port no ${port}`);
})
