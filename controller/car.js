const Car=require('../model/Cars')

const createCar= async (req,res)=> {
    try{
        const newCar=new Car(req.body)
        await newCar.save()
        res.status(201).json(newCar)

    }catch(error){
        res.status(400).json(error)

    }
    

}