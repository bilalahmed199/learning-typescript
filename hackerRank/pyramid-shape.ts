function pyramidShape(n: number) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row += '#';
        }
        console.log(row);
    }
}

pyramidShape(4);
