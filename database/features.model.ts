import { Schema, model, models, Document } from "mongoose";

export interface IFeatures extends Document {
    title: string,
    icon: string,
    variant: string,
    description:string,
}

const FeaturesSchema = new Schema ({



    title: {type:String, require: true},
    icon: {type: String, require: true},
    variant: {type: String, require: true},
    description:{type: String, require: true},
   
})

const Features = models.Features || model('Features', FeaturesSchema)
export default Features