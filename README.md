svg-browserify
===============

Simple SVG transform for Browserify inspired by [html-browserify](https://github.com/duckbox/html-browserify) by [duckbox](https://github.com/duckbox)

## Install

	npm install svg-browserify

## Usuage with Gulp

```javascript

//...
var svg = require('svg-browserify');
//...

gulp.task('js', function() {
  gulp.src('js/app.js')
    .pipe(browserify({
      insertGlobals: true,
      transform: svg
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'));
});
```

