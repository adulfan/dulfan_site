var keystone = require('keystone'),
Types = keystone.Field.Types;

/**
 * Image Model
 * ==================
*/

var Image = new keystone.List('Image', {
  map: { name: 'name' },
  autokey: { path: 'slug', from: 'name', unique: true }
});

Image.add({
  name: { type: String, initial: false},
  images: {
    type: Types.LocalFiles,
    dest: 'public/images/files/gallery',
    prefix: 'images/files/gallery',
    allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif'],
    format: function (item, file) {
      return item.id + '.' + file.extension;
    }
  },
  description: { type: Types.Text },
});

Image.relationship({ ref: 'Gallery_ref' , path: 'images' });

Image.register();