var gulp = require("gulp"),
	concat = require("gulp-concat"),
	sass = require("gulp-sass")(require("sass")),
	autoprefixer = require("gulp-autoprefixer"),
	pug = require("gulp-pug"),
	livereload = require("gulp-livereload"),
	sourcemaps = require("gulp-sourcemaps");
	minify = require("gulp-minify"),
	// notify = require("gulp-notify");

// HTML task
gulp.task("html", function () {
	return gulp.src("stage/html/*.pug")
			.pipe(pug({pretty: true,}))
			.pipe(gulp.dest("docs"))
			// .pipe(notify("HTML Task Is Done"))
			.pipe(livereload());
});

// CSS task
gulp.task("css", function () {
	return gulp.src(["stage/css/**/*.css", "stage/css/**/*.scss"])
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(concat("main.css"))
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest("docs/css"))
			// .pipe(notify("CSS Task Is Done"))
			.pipe(livereload());
});

// JS task
gulp.task("js", function () {
	return gulp.src("stage/js/**/*.js")
			.pipe(concat("main.js"))
			.pipe(minify())
			.pipe(gulp.dest("docs/js"))
			// .pipe(notify("JS Task Is Done"))
			.pipe(livereload());
});

// Watch task
gulp.task("watch", function () {
	require("./server.js");
	livereload.listen();
	gulp.watch("stage/html/*.pug", gulp.series['html']);
	gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.parallel['css']);
	gulp.watch("stage/js/**/*.js", gulp.series['js']);
});
