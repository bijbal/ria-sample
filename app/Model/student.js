NAMESPACE('studentApp.model', function () {
    "use strict";

    /** @class app.model.NoteId*/
    IDENTIFIER('studentId');

    /** @class app.model.Note*/
    CLASS(
        'student', [
            app.model.studentId, 'id',
            [ria.serialize.SerializeProperty('FirstName')],
            String, 'fName',
            [ria.serialize.SerializeProperty('LastName')],
            String, 'lName',
            [ria.serialize.SerializeProperty('Address1')],
            String, 'address'
        ]);
});