export default function getFibonacciSequence(count) {
    let sequence = [];
    let prev_first = 0;
    let prev_second = 1;
    for(let i=0; i<count; i++){
        if(i<2) sequence.push(i);
        else {
            const current = prev_first + prev_second;
            sequence.push(current);
            prev_first = prev_second;
            prev_second = current;
        }
    }
    return sequence;
}