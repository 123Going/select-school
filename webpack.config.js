module.exports = {
	entry: './src/index.js',
	output: {
		filename: './dist/school.js',
		library: 'school',
       	libraryTarget: 'umd'
	},
	module: {
	    loaders: [
      		{ test: /\.vue$/, loader: 'vue' },
			{ test : /\.json$/, loader : "json"},
			{ test: /\.less$/, loader: "style!css!less" }
	    ]
	  }
}