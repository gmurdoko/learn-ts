function add(num1: number, num2: number, showResult: boolean, phrases: string) {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrases + result);
    } else {
        return result;
    }
}

add(90, 10, true, "Hasilnya adalah :");
