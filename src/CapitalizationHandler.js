export default class CapitalizationHandler {
    constructor(input, output) {
        this.input = input;
        this.output = output;
    }
    
    toUpperCaseAll() {
        this.input.setValue(this.input.value.toUpperCase());
        this.output.apply(this.input.value.toUpperCase());
    }
    
    toLowerCaseAll() {
        this.input.setValue(this.input.value.toLowerCase());
        this.output.apply(this.input.value.toLowerCase());
    }
    
    capWords() {
        const text = this.input.value;
        const newText = text.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        this.input.setValue(newText);
        this.output.apply(newText);
    }
    
    capTitle() {
        const excludeWords = [
            'a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'on', 'at', 'to', 'in', 'with', 'by', 'from', 'of',
            'та', 'у', 'на', 'з', 'до', 'від', 'по', 'при', 'перед', 'через', 'під', 'по', 'над', 'після', 'про', 'біля', 'відно', 'для', 'проти', 'після',
        ];
        
        const text = this.input.value;
        let lastWord = '';
        const newText = text.split(' ').map((word, i) => {
            if (excludeWords.includes(word.toLowerCase()) && i > 0 && !/[.!?]/.test(lastWord)) {
                return word;
            }
            let firstChar = 0;
            if (!/[a-zA-Zа-яА-Я]/.test(word.charAt(firstChar))) {
                firstChar = 1;
            }
            word = word.replace(word.charAt(firstChar), word.charAt(firstChar).toUpperCase());
            lastWord = word;
            return word; 

        }).join(' ');
        this.input.setValue(newText);
        this.output.apply(newText);
    }
    
    invertCase() {
        const text = this.input.value;
        const newText = text.split('').map(char => {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join('');
        this.output.apply(newText);
        this.input.setValue(newText);
    }
}