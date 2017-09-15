REQUIRE('ria.templates.CompiledTemplate');

NAMESPACE('studentApp.templates', function () {
    "use strict";

    ASSET('~/view/layout.jade')();

    /** @class chlk.templates.JadeTemplate */
    CLASS(
        'jadeTemplate', EXTENDS(ria.templates.CompiledTemplate), [
            Function, 'block'
        ])
});