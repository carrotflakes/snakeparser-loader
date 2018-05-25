const SnakeParser = require('snakeparser');

function loader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const options = {
    exportVariable: 'module.exports'
  };

  return SnakeParser.buildParser(source, options);
}

module.exports = loader;
