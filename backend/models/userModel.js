import mongoose from "mongoose";
import brcrpt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique:true, required: true},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true}
}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function(enteredPassword){
    return await brcrpt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;