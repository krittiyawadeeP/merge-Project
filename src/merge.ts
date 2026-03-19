export function merge(c1: number[], c2: number[], c3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    let k = c3.length - 1;  //last index of c3 since it's in descending order

    while (i < c1.length || j < c2.length || k >= 0) {
        const value1 = i < c1.length ? c1[i] : Infinity; //start point of c1 on index 0
        const value2 = j < c2.length ? c2[j] : Infinity; //infinity if it is out of bounds of c2, so when we compare it with value1 and value3, it will not be the minimum
        const value3 = k >= 0 ? c3[k] : Infinity; //start point of c3 on last index

        const min = Math.min(value1, value2, value3);
        if (min === value1) {
            result.push(value1);
            i++;  //move to the next index in c1
        }
        else if (min === value2) {
            result.push(value2);
            j++;
        }
        else {
            result.push(value3);
            k--;
        }
    }
    return result;
}