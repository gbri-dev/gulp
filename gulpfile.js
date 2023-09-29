const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

function comprimeJavaScript(){
  return gulp.src('./source/scritps/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
  return gulp.src('./source/styles/main.scss').pipe(sourcemaps.init())
  .pipe(sass(
    {
      outputStyle: 'compressed'
    }
  )).pipe(sourcemaps.write('./maps'))/* ./build/styles/maps */
  .pipe(gulp.dest('./build/styles'))
}

function funcaoDefault(callback){
  setTimeout(function(){
    console.log("Executando via gulp...")
    callback()
  }, 1000)
}

function dizerOi(callback){
  console.log('Olá, bem vindo ao gulp')
  dizerBye()
  callback()
}

/*essa função não é acessivel pelo terminal, privada */
function dizerBye(){
  console.log("bye bye ... ")
}

// /* npm run gulp */
// exports.default = funcaoDefault
// /* npm run gulp dizerOi */
// exports.dizerOi = dizerOi

//Executa de forma serial (series)
// exports.default = gulp.series(funcaoDefault, dizerOi)

/* Executar tarefas de forma paralela (parallel) */
exports.default = gulp.parallel(funcaoDefault, dizerOi)

exports.sass = compilaSass

// npm run gulp watch
exports.watch = function(){
  gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}
exports.javascript = comprimeJavaScript