
export class CourseService {
    private static INSTANCE: CourseService;

    private constructor() {
        console.log(`The CourseService was initialized.`);
    }

    static instance(){
        if (!CourseService.instance){
            CourseService.INSTANCE = new CourseService();
        }
        return CourseService.INSTANCE;
    }
}