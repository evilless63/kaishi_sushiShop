var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');




gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('admin/app/sass/*.sass', ['sass']);
	gulp.watch('admin/app/*.html', browserSync.reload);
	gulp.watch('admin/app/dist/font/icons/icons.css', browserSync.reload);
	gulp.watch('admin/app/dist/js/script.js', browserSync.reload);
});

gulp.task('sass', function(){
	return gulp.src('admin/app/sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('admin/app/dist/css'))
	.pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'admin/app'
		},
	})
});