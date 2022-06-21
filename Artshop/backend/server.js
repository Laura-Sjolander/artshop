import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import artData from "./artData.json"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-final";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = Promise;

// Port for running app
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

//Invoke the upcoming lines by next function. If the database is not connected, it will give an error message 
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({
      error: "Service unavailable"
    })
  }

})

const Art = mongoose.model("Art", {
  id: Number,
  artName: String,
  imageName: String,
  yearCreated: Number,
  sizeHeight: Number,
  sizeWidth: Number,
  colorCategory: String
 
});

//This deletes the database and awaits until the deletion is done and seeds it with new art from the json file artData (resets)

if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await Art.deleteMany();
    artData.forEach(singleArt => {
      const newArt = new Art(singleArt);
      newArt.save();
    })
  }
  seedDatabase();
}

// // Start defining your routes here
app.get("/", (req, res) => {
  const routeInfo = {
    Welcome: "Welcome to this API for my art",
    Routes: [{
      "/art": "See all art in the database",
      "/art/yearCreated/:yearCreated": "See all art by a specific year",
      "/art/colorCategory/:colorCategory" : "See all art by a specific color theme eg: green or dark",
      "/art/:id" : "See art with a specifik id",
      "/art/:artName" : "If you know the name of the artpiece, which is unique for each, write it here",
      "/art/size?sizeHeight=&sizeWidth=" : "See art that has a specific height and width in centimeters"
    }, ],
  }
  res.send(routeInfo)
});


// ALL : This will retrieve all art
app.get("/art", async (req, res) => {
  const allArt = await Art.find()
  res.json(allArt)
})


 
 //YEAR: this will retrieve all art by the year it is created
 app.get("/art/yearCreated/:yearCreated", async (req, res) => {
 
  const years = await Art.find({
    yearCreated: req.params.yearCreated
  });
  res.send(years);
});



//ARTWORKS NAME: this will retrieve the one artpiece that has that unique name
app.get("/art/artName/:artName", async (req, res) => {
 
    const name = await Art.findOne({
      artName: req.params.artName
    });
    res.send(name);
  });

//COLOR: this gets you the art if you want to browse a specific color: dark
app.get("/art/colorCategory/:colorCategory", async (req, res) => {
  try {
    const singleColor = await Art.find({
      colorCategory: req.params.colorCategory
    });
    if (singleColor) {
      res.json(singleColor)
    } else {
      res.status(404).json({
        error: "Sorry, can not find the color you were looking for"
      })
    }
  } catch (err) {
    res.status(400).json({
      error: "Oops! That input is invalid for a color"
    })
  }
});

//this will retrieve a specific size: example: art/

app.get("/art/size", async (req, res) => {
  
  const {
    sizeHeight,
    sizeWidth
  } = req.query

    if (sizeHeight && sizeWidth) {
    const querySize = await Art.find({
      sizeHeight: sizeHeight,
      sizeWidth: sizeWidth
    });
    res.send(querySize);
  } else if (sizeHeight) {
    const queryHeight = await Art.find({
      sizeHeight: sizeHeight
    });
    res.send(queryHeight);
  } else if (sizeWidth) {
    const queryWidth = await Art.find({
      sizeWidth: sizeWidth
    });
    res.send(queryWidth);
    
  }
});
//ARTWORKS ID: this will retrieve the one artpiece that has that unique id
  //this will retrieve the specific art matching the idnumber
  app.get("/art/:id", async (req, res) => {
 
    try { 
        console.log(req.params.id);
      const artId = parseInt(req.params.id);
      const artById = await Art.findOne({id:artId});
      
      
      if (artById) {
        res.json(artById);
      } else {
        res.status(404).json({
          error: "Can not find art with the id"
        })
      }
    } catch (err) {
        res.status(400).json({
        error: "Input invalid for id"
      })
    }
  });


// Start the server
app.listen(port, () => {
  console.log(`Showing in terminal: Server running on http://localhost:${port}`);
});