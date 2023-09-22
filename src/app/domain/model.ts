export class Person {  
    id: Number | undefined;  
    firstName: String | undefined;  
    lastName: String | undefined;  
    email!: String;  
    address1!: String;  
    phone! : String;
    userType! :String;
} 

export class Course {  
    id!: Number;  
    courseName!: String;  
    description!: String;  
    category!: String;  
} 

export class Assignment {  
    assignmentId!: Number;  
    assignmentName!: String;  
    teachers!: number[];  
    learners!: number[];  
} 