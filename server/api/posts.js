const mongoose = require('../db.js')
const Schema =mongoose.Schema;
const ArticleSchema = new Schema({
    title:{type: String, require: true},
    postTime:{type: String, require: true},
    content:{type: String, require: true}, 
 });
 const imgSchema = new Schema({
    files: {
        type:Array
    },
 })
 const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
       require: true
    }
 });
 const Models = {
     Article: mongoose.model('Article', ArticleSchema),
     user: mongoose.model('user', UserSchema),
 }
 module.exports = Models