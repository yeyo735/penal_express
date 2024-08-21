import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    type: {
        type: String,
        enum: ['admin', 'user'],
        required: true,
    },
    date_created: {
        type: Date,
        default: Date.now,
    },
    date_update: {
        type: Date,
    },
    user: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

export default User;
