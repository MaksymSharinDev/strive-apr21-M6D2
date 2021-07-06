

let Schema = global.mongoose.Schema
// noinspection JSValidateTypes
const modelSchema = new Schema( {
    key: String
} );
const Model = global.mongoose.model('Model', modelSchema);
export default Model

