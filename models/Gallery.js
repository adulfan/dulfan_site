var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
  autokey: { from: 'name', path: 'key', unique: true }
});
Gallery.add({
  name: { type: String, required: true },
  published: {type: Types.Select, options: 'yes, no', default: 'no', index: true },
  publishedDate: { type: Date, default: Date.now },
  description: { type: Types.Text },
  image: {
    type: Types.LocalFile,
    dest: 'public/images/files/single',
    prefix: 'images/files/single',
    allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif'],
    heading: 'Images',
    format: function (item, file) {
      return item.id + '.' + file.extension;
      //return '<img src="' + file.href + "/" + file.filename + '" style="max-width: 300px">'
    }
  },
  images: {
    type: Types.LocalFiles,
    dest: 'public/images/files/multiple',
    prefix: 'images/files/multiple',
    allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif'],
    // filename: function(item, file){
    //   //return '<img src="' + file.href + "/" + file.filename + '" style="max-width: 300px">';
    //   return item.id + '.' + file.extension;
    // },
    format: function (item, file) {
      return items.id + '.' + file.extension;
      //return "<img className='file-icon' src={items.id + file.extension} />"
    }
  }
});

Gallery.register();
