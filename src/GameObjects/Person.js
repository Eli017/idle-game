export default class Person {
    constructor(level) {
        this.level = level;
        this.salary = 0;
        this.workOutput = 0;
        this.jobTitle = "";
        switch (this.level) {
            case 1:
                this.workOutput = 1;
                this.salary += 5;
                this.jobTitle = "Entry-Level";
                break;
            case 2:
                this.workOutput = 5;
                this.salary += 10;
                this.jobTitle = "Mid-Level";
                break;
            case 3:
                this.workOutput = 15;
                this.salary += 20;
                this.jobTitle = "Senior-Level";
                break;
            default:
                this.workOutput = 0;
                this.salary = 0;
                break;
        }
    }
}
