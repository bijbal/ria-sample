REQUIRE('ria.mvc.DefaultApplication');
REQUIRE('ria.dom.SizzleDom');
REQUIRE('studentApp.Controllers.studentInfoController');

_DEBUG && ria.__REQUIRE.addAssetAlias('ria.templates.TemplateBind');

NAMESPACE('studentApp', function () {

    ASSET('~/views/layout.jade')();
    ASSET('~/views/student.jade')();

    /** @class app.Application */
    CLASS(
        'Application', EXTENDS(ria.mvc.DefaultApplication), [
            OVERRIDE, ria.async.Future, function onStart_() {
                return BASE()
                    .then(function (data) {
                        new ria.dom.Dom()
                            .fromHTML(ASSET('~/views/student.jade')())
                            .appendTo('#main');
                        return data;
                    });
            }
        ]);
});