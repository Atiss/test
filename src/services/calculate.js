export default function calculate(sequense){
    let prev = 0;
    debugger;
    for (let [index, value] of sequense.entries()) {
        if (value === '+') {
            break;
        }
        if (index === 0) {
            +value === 0 ? prev = -1 : prev = value%3;
            continue;
        }
        if (prev === -1 && +value === 0) {
            return [value];
        }
        if (prev === value%3) {
            return [value];
        }
        if (index%6 === 0 || index%6 === 1 || index%6 === 3) {
            +value === 0 ? prev = -1 : prev = value%3;
        }
    }
    return sequense;
}