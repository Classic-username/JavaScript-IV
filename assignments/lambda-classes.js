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
        this.favSubjects.forEach(element => {
           console.log(element);
        });
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
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

//People

const mana = new Person({
    name: 'Mana',
    location: 'Underworld',
    age: 218,
})

const elwinn = new Person({
    name: 'Elwinn',
    location: 'Great Forest',
    age: 953,
})


//Student
const leroy = new Student({
    name: 'LeRoy',
    location: 'Carribean',
    age: 25,
    previousBackground: 'College Student',
    className: 'webpt18',
    favSubjects: ['Html', 'math', 'Javascript']
})

const jenkins = new Student({
    name: 'Jenkins',
    location: 'Bahamas',
    age: 32,
    previousBackground: 'Developer at Google',
    className: 'CS100',
    favSubjects: ['Html', 'spanish', 'Javascript'],
})

const michael = new Student({
    name: 'Michael',
    location: 'Hawaii',
    age: 40,
    previousBackground: 'Dairy Farmer',
    className: 'webpt17',
    favSubjects: ['Html', 'german', 'Javascript'],
})


// Instructor
const jared = new Instructor({
    name: 'Jared',
    location: 'Minnesota',
    age: 30,
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Its getting hot in here!',
})

const george = new Instructor({
    name: 'George',
    location: 'England',
    age: 52,
    specialty: 'react',
    favLanguage: 'Javascript',
    catchPhrase: 'TURN DOWN FOR WHAT?!?!',
})


// PM
const jimmy = new PM({
    name: 'Jimmy',
    location: 'Washington',
    age: 32,
    specialty: 'front-end',
    favLanguage: 'Java',
    catchPhrase: 'My milkshakes bring all the boys to the yard.',
    gradClassName: 'webpt1',
    favInstructor: 'George'
})

const pmMichael = new PM({
    name: 'Michael',
    location: 'Wyoming',
    age: 43,
    specialty: 'react',
    favLanguage: 'C++',
    catchPhrase: 'How many boys are in the yard?',
    gradClassName: 'CS50',
    favInstructor: 'Jared'
})