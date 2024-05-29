export default class Input {
    constructor(element) {
        this.element = element
        this.value = ''
        this.element.addEventListener('input', () => this.setValue(this.element.value))
    }
    
    setValue(value) {
        this.value = value
    }
    
    apply() {
        this.element.value = this.value
    }
    
    
} 