
use('admin')

// db.getCollection("Restaurant").find(
//     {"address.building": {$eq: "1008"}},
//     {"restaurant_id": 1, "address.street": 1, "name": 1, "city": 1}
// ).sort({"restaurant_id": 1})


db.getCollection("Restaurant").find(
    {$or: [{"name": /Thai/}, {"address.street": /Street/}, {"address.zipcode": "17988"}]},
    {"_id": 0, "restaurant_id": 1, "address.street": 1, "address.zipcode": 1, "name": 1, "city": 1}
).sort({"restaurant_id": 1})
