var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');




gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('content/dist/sass/*.sass', ['sass']);
	gulp.watch('content/dist/*.html', browserSync.reload);
	gulp.watch('content/dist/m/*.html', browserSync.reload);
	gulp.watch('content/dist/js/*.js', browserSync.reload);
	gulp.watch('content/dist/bower/*/*.js', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('content/dist/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('content/dist/css'))
	.pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'content/dist'
		},
	})
});