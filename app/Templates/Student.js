REQUIRE('studentApp.templates.jadeTemplate');

REQUIRE('studentApp.model.student');

NAMESPACE('studentApp.templates', function () {

    /** @class app.templates.Note */
    CLASS(
        [ria.templates.TemplateBind('~/views/student.jade')],
        [ria.templates.ModelBind(app.model.student)],
        'student', EXTENDS(studentApp.templates.jadeTemplate), [

            [ria.templates.ModelPropertyBind],
            String, 'fName',
            [ria.templates.ModelPropertyBind],
            String, 'lName',
            [ria.templates.ModelPropertyBind],
            string, 'address',
        ])
});