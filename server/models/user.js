import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt-nodejs'
// Define our model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', ()=> {
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if(err){return next(err);}
        bcrypt.hash(user.password, salt, null, (err, hash)=> {
            if(err){return next(err)}
        })
    });
}) 

// Create the model class
const ModelClass = mongoose.model("user", userSchema);

// Export the model
export default ModelClass;
