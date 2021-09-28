
// select what db to use
use('admin')

// query collection
db.getCollection("Restaurant").find(
    {"cuisine": {$eq: "Japanese"}},     // query
    {"cuisine": 1, "name": 1, "city": 1}    // field projection
    
).sort({"name": 1})             // sorting asc or dsc




