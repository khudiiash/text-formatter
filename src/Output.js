export default class Output {
    constructor(element) {
        this.element = element;
        this.value = '';
    }
    
    setValue(value) {
        this.value = value;
    }
    
    apply(text) {
        this.element.innerHTML = text;
    }
}