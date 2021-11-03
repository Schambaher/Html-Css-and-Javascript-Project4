const {src, dest, watch} = require("gulp");

//Css
const sass = require("gulp-sass")(require("sass"));

//Javascript

//Imagenes

//Funciones.
function compileSass (done) {
    src("src/sass/**/*.scss")
        .pipe(sass())
        .pipe(dest("build/css"));
    done();
}

function watchFiles () {
    watch("src/sass/**/*.scss", compileSass);
}

exports.sass = compileSass;
exports.default = watchFiles;