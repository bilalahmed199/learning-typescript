function drawPyramid(h: number) {
    if (h <= 0) {
        return;
    }

    drawPyramid(h - 1);

    let row = '';
    for (let i = 0; i < h; i++) {
        row += '#';
    }
    console.log(row);
}

drawPyramid(4);
