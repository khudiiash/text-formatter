export default class LayoutHandler {
    constructor(input, output) {
        this.input = input;
        this.output = output;
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

        this.engToUa = new Map([
            ['q', 'й'],
            ['w', 'ц'],
            ['e', 'у'],
            ['r', 'к'],
            ['t', 'е'],
            ['y', 'н'],
            ['u', 'г'],
            ['i', 'ш'],
            ['o', 'щ'],
            ['p', 'з'],
            ['[', 'х'],
            [']', 'ї'],
            ['a', 'ф'],
            ['s', isMac ? 'и' : 'і' ],
            ['d', 'в'],
            ['f', 'а'],
            ['g', 'п'],
            ['h', 'р'],
            ['j', 'о'],
            ['k', 'л'],
            ['l', 'д'],
            [';', 'ж'],
            ["'", 'є'],
            ['z', 'я'],
            ['x', 'ч'],
            ['c', 'с'],
            ['v', 'м'],
            ['b', isMac ? 'і' : 'и' ],
            ['n', 'т'],
            ['m', 'ь'],
            [',', 'б'],
            ['.', 'ю'],
            ['`', 'ґ'],
            ['?', ','],
            ['Q', 'Й'],
            ['W', 'Ц'],
            ['E', 'У'],
            ['R', 'К'],
            ['T', 'Е'],
            ['Y', 'Н'],
            ['U', 'Г'],
            ['I', 'Ш'],
            ['O', 'Щ'],
            ['P', 'З'],
            ['{', 'Х'],
            ['}', 'Ї'],
            ['A', 'Ф'],
            ['S', isMac ? 'И' : 'І'],
            ['D', 'В'],
            ['F', 'А'],
            ['G', 'П'],
            ['H', 'Р'],
            ['J', 'О'],
            ['K', 'Л'],
            ['L', 'Д'],
            [':', 'Ж'],
            ['"', 'Є'],
            ['Z', 'Я'],
            ['X', 'Ч'],
            ['C', 'С'],
            ['V', 'М'],
            ['B', isMac ?'І' : 'И'],
            ['N', 'Т'],
            ['M', 'Ь'],
            ['<', 'Б'],
            ['>', 'Ю'],
            ['~', 'Ґ'],
            ['?', ','],
            ['/', '.']
        ]);
        this.uaToEng = new Map();
        this.engToUa.forEach((value, key) => {
            this.uaToEng.set(value, key);
        });
        this.regex = {
            ua: /[А-ЩЬЮЯҐЄІЇ]/i,
            eng: /[A-Z]/i
        }
    }
    
    fixLayout() {
        const input = this.input.value;
        const output = this.convert(input);
        this.output.apply(output);
        this.input.setValue(output);
    }
    
    convert(input) {
        if (this.regex.eng.test(input)) {
            return this.convertEngToUa(input);
        } 
        else if (this.regex.ua.test(input)) {
            return this.convertUaToEng(input);
        }

    }
    
    convertEngToUa(input) {
        return input.split('').map(char => {
            return this.engToUa.get(char) || char;
        }).join('');
    }
    
    convertUaToEng(input) {
        return input.split('').map(char => {
            return this.uaToEng.get(char) || char;
        }).join('');
    }
    
}