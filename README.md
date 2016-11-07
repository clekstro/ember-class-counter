# Ember-class-counter

Ember CLI Addons have the ability to leverage certain Ember CLI build hooks to affect the final
build output. As part of the build pipeline, developers can parse/modify their
Handlebars (or more precisely, their HTMLBars) AST by registering a
`htmlbars-ast-plugin` within the `setupPreprocessorRegistry` hook.

This example is just a toy, analyzing the amount of defined classes on a given
HTML element. If there are more than 3 classes defined, it adds the `many`
class. Otherwise, it adds the `few` class.

Credits for this go to the folks at [Simplabs](http://simplabs.com/) for their use of
this approach in their
[ember-test-selectors](https://github.com/simplabs/ember-test-selectors) addon.

To test this out, I didn't use the built-in dummy app, but instead had used `npm
link` with another dummy project I had laying around.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-class-counter`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
