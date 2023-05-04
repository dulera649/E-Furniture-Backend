const path = require('path');
const multer = require('multer');
const FileUpload = require('../Schema/FileUploadSchema');
const googleUploadController = require('../controller/GoogleUploadController')

const storage = multer.diskStorage({
    //destination: "C:/Users/Deep/OneDrive/Desktop/Projects/java-script-intern-2023/E-furniture/react_E-Furniture/e-furniture/public/uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer(
    {
        storage: storage,
        limits: {
            fileSize: 9000000
        },
    }
).single('file');

const uploadFile = (req, res) => {

    console.log(req.file);
    upload(req, res, async (err) => {
        if (err) {
            res.status(500).json({
                error: err,
                message: 'Error uploading file'

            })
        }
        else {
            console.log(req.file.originalname);
            //size
            console.log(req.file.size);
            //abs path
            console.log(req.file.path);
            var p = path.join(__dirname, '../uploads/' + req.file.originalname);
            console.log(p);
            //type

            if (req.file == undefined) {
                res.status(400).json({
                    message: 'No file selected'
                })
            }
            else {
                var x =  await googleUploadController.uploadFile(req.file.path);
                console.log(x);
                const fileUpload = new FileUpload({
                    name: req.file.originalname,
                    size: req.file.size,
                    url: p,
                    type: req.file.mimetype,
                    gdriveId:x
                })
                fileUpload.save((err, data) => {
                    if (err) {
                        res.status(500).json({
                            error: err,
                            message: 'Error uploading file to db'
                        })
                    }
                    else {
                        res.status(200).json({
                            message: 'File uploaded successfully',
                            file: req.file.originalname,
                            data:data
                        })
                    }
                })



                // res.status(200).json({
                //     message: 'File uploaded successfully',
                //     file: req.file.originalname
                // })
            }
        }

    })

}
const getFilesFromGoogle = async(req,res)=>{


    var x = await googleUploadController.getAllFileFromGoogleDrive();
    console.log(x);
    res.status(200).json({
        files:x 
    })



}
const getFilesFromDb = async(req,res)=>{
    FileUpload.find((err,files)=>{
        if(err){
            res.status(500).json({
                error: err,
                message: 'Error getting files from db'
            })
        }
        else{
            res.status(200).json({
                files: files
            })
        }
    })
}
module.exports = {
    uploadFile,
    getFilesFromGoogle,
    getFilesFromDb
}