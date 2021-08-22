const models = require('../models/index');

exports.programRead = async (req,res)=>{
    try{
        const programming = await models.Programming.findAll();
        return res.json({data: programming})
    }catch(error){
        return res.json({data : error.message})
    }
}

exports.programReadID = async (req,res) => {
    try{
        const {id} = req.params;
        const programming = await models.Programming.findByPk(id);
        return res.json({data: programming})
    }catch(error){
        return res.json({data:error.message})
    }
}

exports.programCreate = async(req,res)=>{
    try{
        const {Name, Detail} = req.body;
        const programming = await models.Programming.create({
            Name:Name,
            Detail: Detail,
        })
        if(programming){
            return res.status(200).json({
                message : 'เพิ่มข้อมูลสำเร็จ',
                data:{
                    Name: Name,
                    Detail: Detail,
                }
            });
        }
    }catch(error){
        return res.json({data : error.message})
    }
}

exports.programUpdate = async(req,res)=>{
    try{
        const {id} = req.params;
        const {Name, Detail} = req.body;
        const programming = await models.Programming.update(
            {
                Name: Name,
                Detail: Detail
            },
            {
                where : {id: id}
            },
        );
        if(programming){
            return res.status(200).json(
                {message:'แก้ไขข้อมูลสำเร็จ'}
            )
        }
    }catch(error){
        return res.json({data: error.models})
    }
}

exports.programDelete = async(req,res) =>{
    try{
        const {id} = req.params;
        const programmingID = await models.Programming.findByPk(id);
        if(!programmingID){
            return res.status(400).json(
                {message:'ไม่มีรายการนี้'}
            )
        }
        
        const programming = await models.Programming.destroy(
            {
                where : {id: id}
            }
        )
        if(programming){
            return res.status(200).json(
                {message:'ลบข้อมูลสำเร็จ'}
            )
        }

    }catch(error){
        return res.json({data: error.message})
    }
}