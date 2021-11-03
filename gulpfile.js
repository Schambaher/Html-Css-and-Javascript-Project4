const { src, dest, watch, parallel } = require("gulp");

//Css
const sass = require("gulp-sass")(require("sass"));

<<<<<<< HEAD
//Javascript

//Imagenes

//Funciones.
function compileSass (done) {
    src("src/sass/**/*.scss")
        .pipe(sass())
        .pipe(dest("build/css"));
    done();
=======
//Imagenes
const webp = require("gulp-webp");
const gulpAvif = require("gulp-avif");
const gulpCache = require("gulp-cache");
const gulpImagemin = require("gulp-imagemin");
const gulpWebp = require("gulp-webp");

function convertToWebp(done) {
  const opciones = {
    quality: 50,
  };
  src("src/img/**/*.{jpg,png}")
    .pipe(gulpWebp(opciones))
    .pipe(dest("build/img"));
  done();
}

function convertToAvif(done) {
  const opciones = {
    quality: 50,
  };
  src("src/img/**/*.{jpg,png}")
    .pipe(gulpAvif(opciones))
    .pipe(dest("build/img"));
  done();
}

function convertToPng(done) {
  const opciones = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{jpg,png}")
    .pipe(gulpCache(gulpImagemin(opciones)))
    .pipe(dest("build/img"));
  done();
}

function compileSass(done) {
  src("src/sass/**/*.scss").pipe(sass()).pipe(dest("build/css"));
  done();
>>>>>>> 082343248ee84ec03bab4d6b6bc557f718a26e05
}

function watchFiles() {
  watch("src/sass/**/*.scss", compileSass);
}

exports.sass = compileSass;
exports.convert = parallel(convertToWebp, convertToAvif, convertToPng);
exports.default = watchFiles;
