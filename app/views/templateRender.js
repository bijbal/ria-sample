REQUIRE('ria.templates.CompiledTemplate');

NAMESPACE('studentApp.templates', function () {
    "use strict";

    ASSET('~/assets/jade/render-with.jade')();

    /** @class app.templates.JadeTemplate */
    CLASS(
        'JadeTemplate', EXTENDS(ria.templates.CompiledTemplate), [
            Function, 'block'
        ])
});