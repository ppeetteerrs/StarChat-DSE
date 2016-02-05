var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TopicSchema = mongoose.Schema({
    one: String,
    two: String,
    three: String
});
module.exports = mongoose.model("Topical", TopicSchema);