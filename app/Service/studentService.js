NAMESPACE('studentApp.services', function() {
    CLASS(
        'StudentService', [
           
            ria.async.Future, function getStudentInfo() {
                return {
                    'fname': 'Alice',
                    'lName': 'McKency',
                    'address': '@ps.com'                    
               };
            }
        ])
});