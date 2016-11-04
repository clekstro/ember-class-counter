/*jshint node:true*/

ClassCounter.prototype.transform = function(ast) {
  console.log('AST', ast);
  // var walker = new this.syntax.Walker();

  // walker.visit(ast, function(node) {
  //   console.log('node object', node);
  // });

  return ast;
};

module.exports = ClassCounter;
