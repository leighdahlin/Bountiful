const User = require('./User');
const Item = require('./Item');
const Catergory = require('./Catergory');


//Create all the associations between the user, the items, and the catergories:
User.hasMany(Item, {
  foreignKey: 'user_id',
});
Catergory.hasMany(Item, {
  foreignKey: 'item_id',
});


Item.belongsTo(User, {
  foreignKey: 'user_id',
});
Item.belongsTo(Catergory, {
  foreignKey: 'item_id',
});


module.exports = { User, Item };
