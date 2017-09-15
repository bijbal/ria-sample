REQUIRE('ria.mvc.Controller');
REQUIRE('studentApp.services');
REQUIRE('studentApp.activities')
//REQUIRE('ria.async.Completer');
NAMESPACE('studentApp.Controllers', function (){

//     EXCEPTION(
//         'GeneralException', [
//             [[Object]],
//             function $(inner_) {
//                 console.log('Assessment access is required', inner_);
//             }
//         ]);
// ,
    
    CLASS(
        [ria.mvc.ControllerUri('index')],
        "studentInfoController",EXTENDS(ria.mvc.Controller), [
        
        [ria.mvc.Inject],
        StudentService, 'studentService',

        function viewStudent(){
         
            var result = this.studentService.getStudentInfo();                   
            this.PushView(studentApp.activities.student, result);
        }
        ]);

});
