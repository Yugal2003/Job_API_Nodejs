const jobModel = require("../model/job")

const createJob = async (req,res) => {
    try {
        const jobObj = req.body;
        const newJob = jobModel(jobObj)
        const newlySavedJob = await newJob.save();
        // console.log(newlySavedJob);
        res.json({
            success : true,
            message : "Job Created Successfully"
        })    
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Job Created Error"
        })   
    }
}


const listJob = async (req,res) => {
    try {
        // const {minSalary} = req.query;
        // const jobList = await jobModel.find({
        //     salary : {
        //         $gt : minSalary
        //     }
        // })
        const {minSalary,maxSalary} = req.query;
        const jobList = await jobModel.find({
            $and:[
                {salary : {$gte : minSalary}},
                {salary : {$lte : maxSalary}}
            ]
        })
        res.json({
            success : true,
            message : "List Job Successfully",
            resuls_length : jobList.length,
            results : jobList
        })
    } 
    catch (error) {
        res.json({
            success : false,
            message : "List Job Error"
        })
    }
}

const editJob = async (req,res) => {
    try {
        // const jobId = req.params.id;
        // console.log(jobId);
        // console.log(req.body);
        // await jobModel.findByIdAndUpdate(1.Id for find the MediaRecorder, 2. field with data to update)
        // await jobModel.findByIdAndUpdate(jobId,req.body)
        const findObj = {
            company : "XYZ Infotech",
        };
        const updateAreaOfObj = {
            title : "ABC Developer",
        }
        // JobModel.findOneAndUpdate(FIND OBJECT, UPDATE OBJECT Spefic area)
        // await JobModel.updateMany(findObj, updateObj); // It will update all matching records
        await jobModel.findOneAndUpdate(findObj,updateAreaOfObj); //it will update first mathcing found
    
        res.json({
            success : true,
            message : "Job Edited Successfully"
        })    
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Job Edited Error"
        })
    }
}

const deleteJob = async (req,res) => {
    try {
        const jobId = req.params.id;
        await jobModel.findByIdAndDelete(jobId)
        //NOTE => jobModel.findByIdAnddelete & jobModel.findByIdAnddelete same work as above but they update an this delete items........
        res.json({
            success : true,
            message : "Job Deleted Successfully"
        })    
    } 
    catch (error) {
        res.json({
            success : false,
            message : "Job Deleted Error"
        })
    }
}

const jobController = {
    createJob,listJob,editJob,deleteJob
}

module.exports = jobController