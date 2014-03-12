var mu = require('mu2'),
    CombinedStream = require('combined-stream'),
	date = new Date();
mu.root = __dirname + '/../views';

exports.render = function (res, page, content, callback) {
    console.log('Render Called');
    var stream = CombinedStream.create();

    res.writeHeader(200, { "Content-Type": "text/html" });

    stream.append(mu.compileAndRender('header.ms', content));
    stream.append(mu.compileAndRender(page, content));
    stream.append(mu.compileAndRender('footer.ms', { 'year': date.getFullYear() }));
    /*mu.compileAndRender('header.ms', content).on('data', function (header) {
        stream.
    });
    mu.compileAndRender(page, content).on('data', function (body) {
        stream += body;
    });
    mu.compileAndRender('footer.ms', { 'year': date.getFullYear() }).on('data', function (footer) {
        stream += footer;
    });*/
    callback(stream);
};