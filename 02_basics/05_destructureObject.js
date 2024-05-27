const course={
    courseName: "JS with Prabesh",
    coursePrice: 999,
    courseInstructor: "Prabesh"
}

//jaile pni destructure garda {} bhitra rakhne
const {courseInstructor: instrucor} = course;  //notation of courseInstructor as instructor
console.log(instrucor);

const{coursePrice: price}=course;
console.log(price);
