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
    courseDesc!: String;  
    courseCategory!: String;  
} 