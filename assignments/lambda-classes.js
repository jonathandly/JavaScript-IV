// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttrs) {
        super(projectManagerAttrs);
        this.gradClassName = projectManagerAttrs.gradClassName;
        this.favInstructor = projectManagerAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    degugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Don't forget the homies."
});

const mike = new Instructor({
    name: 'Mike',
    location: 'New York',
    age: 40,
    gender: 'male',
    favLanguage: 'Lisp',
    specialty: 'RegExp',
    catchPhrase: 'Fugget bout IT!!'
});

const karen = new ProjectManager({
    name: 'Karen',
    location: 'Omaha',
    age: 33,
    gender: 'female',
    gradClassName: 'CS-9',
    favInstructor: 'Fred'
});

const lindsay = new ProjectManager({
    name: 'Lindsay',
    location: 'San Diego',
    age: 29,
    gender: 'female',
    gradClassName: 'CSPT-2',
    favInstructor: 'Mike'
});

const joe = new Student({
    name: 'Joe',
    location: 'Dallas',
    age: 35,
    gender: 'male',
    favSubjects: 'Trigonometry, Chemistry, Astronomy',
    className: 'WEBPT4',
    previousBackground: 'Metallurgy'
});

const tina = new Student({
    name: 'Tina',
    location: 'Denver',
    age: 24,
    gender: 'female',
    favSubjects: 'Anatomy, Biology, Mythology',
    className: 'FSW13',
    previousBackground: 'RN'
});

console.log(fred.speak());
console.log(fred.demo('node'));
console.log(fred.grade(tina, 'databases'));

console.log(tina.speak());
console.log(tina.listsSubjects());
console.log(tina.PRAssignment('Array-Methods'));
console.log(tina.sprintChallenge('React'));

console.log(karen.speak());
console.log(karen.standUp('webpt4-karen'));
console.log(karen.degugsCode(joe, 'Functions'));
console.log(karen.demo('redux'));
console.log(karen.grade(joe, 'Prototypes'));
