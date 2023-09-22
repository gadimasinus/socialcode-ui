export class Person {  
    userId: String | undefined;  
    firstName: String | undefined;  
    lastName: String | undefined;  
    email!: String;  
    address1!: String;  
    phone! : String;
    userType! :String;
} 

export class Course {  
    courseId!: String;  
    courseName!: String;  
    description!: String;  
    category!: String;  
} 

export class Assignment {  
    assignmentId!: String;  
    assignmentName!: String;  
    teachers!: number[];  
    learners!: number[];  
} 