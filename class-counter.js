/*jshint node:true*/

function ClassCounter() {
  this.syntax = null;
}

ClassCounter.prototype.transform = function(ast) {
  var walker = new this.syntax.Walker();

  walker.visit(ast, function(node) {
    if (node.type === 'ElementNode') {
      node.attributes.map(attr => {
        if (attr.name == 'class') {
          var attrClasses = attr.value.chars.split(' ');
          if (attrClasses.length > 3) {
            attr.value.chars += " many";
          } else {
            attr.value.chars += " few";
          }
        }
      });
    }
  });

  return ast;
};

module.exports = ClassCounter;
