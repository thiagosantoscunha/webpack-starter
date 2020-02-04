import Person from "../models/person";

export default class PersonController {

    constructor() {
        this.person = new Person('Thiago Cunha');
        this.init();
    }

    init() {
        console.log(this.person);
    }

}