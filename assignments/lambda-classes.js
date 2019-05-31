// CODE here for your Lambda Classes


class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }

}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listSubjects(){
        return this.favSubjects
    }

    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}.`
    }

}

class PM extends Instructor {
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;

    }

    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times!`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }

}


const leroy = new Student({
    name: 'LeRoy',
    location: 'Carribean',
    age: 25,
    previousBackground: 'College Student',
    className: 'webpt18',
    favSubjects: ['Html', 'CSS', 'Javascript']
})

const jenkins = new Student({
    name: 'Jenkins',
    location: 'Bahamas',
    age: 32,
    previousBackground: 'Developer at Google',
    className: 'CS100',
    favSubjects: ['Html', 'CSS', 'Javascript']
})