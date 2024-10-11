const { ObjectId } = require("mongodb");
const dbConnection = require("../../dbConnection")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Public/Images/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + file.originalname;
      console.log(uniqueSuffix)
      cb(null, uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

exports.insert = [ upload.single('cfile') , async (req,res)=>{
    let db = await dbConnection();
    let collection = await db.collection("courses");
    let viewCourse = await collection.findOne({cname:req.body.cname});

    let response ;

    if(viewCourse!==null){
        response ={
            'status':0,
            "message":"This Course Allready Exists"
        }
    }else{
         let insertData = await collection.insertOne({
            cname:req.body.cname,
            cprice:req.body.cprice,
            cdur:req.body.cdur
        })
        response ={
            'status':1,
            "message":insertData
        }

    }
    res.send(response)
}]

exports.view = async (req,res)=>{
    let db = await dbConnection();
    let collection = await db.collection("courses");
    let viewCourse = await collection.find().toArray();
    let response = {
        "status":1,
        "message":viewCourse
    }
   res.send(response);
}

exports.deleteCourse = async (req,res)=>{
    let did = req.params.id;
    let db = await dbConnection();

    let collection = await db.collection('courses');
    let deleteData = await collection.deleteOne({_id:new ObjectId(did)});

    res.send(deleteData);
}

// exports.updateCourse = async (req,res)=>{
//     let uid = req.params.id;

//     let db = await dbConnection();
//     let collection = await db.collection('courses');
//     let updateData = await collection.updateOne(
//         {
//             cname:req.body.cname
//         },
//         {
//             $set:{_id:uid}
//         }
//     )

//     console.log(updateData)
// }