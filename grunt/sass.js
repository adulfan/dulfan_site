module.exports = {
	dist: {
    options: {
      style: 'expanded',
      sourceMap: true,
    },
    // files: {
    //   'public/styles/site.css': 'public/styles/site.scss',
    // }
    files: [{
      expand: true,
      cwd: 'public/styles/',
      src: ['**/*.scss'],
      dest: 'public/styles/',
      ext: '.css'
    }]
  }
};
