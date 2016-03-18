var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model with references
 * =============
 */

var Gallery_ref = new keystone.List('Gallery_ref', {
  autokey: { from: 'name', path: 'key', unique: true }
});
Gallery_ref.add({
  name: { type: String, required: true },
  // published: {type: Types.Select, options: 'yes, no', default: 'no', index: true },
  publishedDate: { type: Date, default: Date.now },
  description: { type: Types.Text },
  images : { type: Types.Relationship, ref: 'Image', many: true }
});

Gallery_ref.register();
