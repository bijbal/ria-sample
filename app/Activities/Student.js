REQUIRE('ria.mvc.TemplateActivity');

REQUIRE('ria.dom.Dom');

REQUIRE('studentApp.templates.student');

NAMESPACE('studentApp.activities', function () {

    /** @class app.activities.Notes */
    CLASS(
        [ria.mvc.DomAppendTo('#body')],
        [ria.mvc.TemplateBind(app.templates.Notes)],
        // [ria.mvc.PartialUpdateRule(app.templates.Notes)], // default
        [ria.mvc.PartialUpdateRule(studentApp.templates.student, 'append', '.notes', ria.mvc.PartialUpdateRuleActions.Append)],
        'student', EXTENDS(ria.mvc.TemplateActivity), [
            OVERRIDE, ria.dom.Dom, function onDomCreate_() {
                return BASE().fromHTML('<div>Loading...</div>');
            },

            [ria.mvc.DomEventBind('click', 'p')],
            [[ria.dom.Dom, ria.dom.Event]],
            Boolean, function handleClick(node, event) {
                alert('clicked');
            }
        ]);
});