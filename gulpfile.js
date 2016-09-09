let gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    srcImages = ['src/**/*.gif', 'src/**/*.jpg', 'src/**/*.jpeg', 'src/**/*.png'],
    distPath = 'dist';

gulp.task('watch', () => {
    watch(srcImages, (e) => {
        let {history, event} = e,
            fileName = history[0].split('/').pop();
        if(event === 'unlink'){
            // remove file in dist
            gulp.src(`${distPath}/${fileName}`)
                .pipe(clean());
        }else{
            gulp.src(history)
                .pipe(imagemin())
                .pipe(gulp.dest('dist'));
        }
    });
});

gulp.task('default', ['watch'], () => {});

