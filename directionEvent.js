const directionEvent = key => {
    switch (key.code) {
        case 'ArrowUp':
            direction != "ArrowDown" |  && setDirection(key.code);
            break;
        case 'ArrowDown':
            direction != "Arrowup" |  && setDirection(key.code);
            break;
        case 'Arrowleft':
            direction != "ArrowRight" |  && setDirection(key.code);
            break;
        case 'ArrowRight':
            direction != "Arrowleft" |  && setDirection(key.code);
            break;



    }
};
