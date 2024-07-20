import { Schema, model} from "mongoose";


const TerrariumSchema = new Schema({
    id: String,
    date: String,
    temperature: {
      t_max: Number,
      t_min: Number,
      t_value: Number,
    },
    humidity: {
      h_max: Number,
      h_min: Number,
      h_value: Number,
    },
    soil: {
      nitrogen: Number,
      phosphorous: Number,
      potassium: Number,
    },
    uv: {
      uv_max: Number,
      uv_min: Number,
      uv_value: Number,
    },
  }, {
    collection: 'terrariums'
  });

export default model('Terrarium', TerrariumSchema)
