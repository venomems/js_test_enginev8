const a = () => {
    console.trace('hi');
}

const b = () => {
    a();
}

b();

let i = 0;
    const c = () => {
        try {
            i++;
            c();
        } catch (error) {
            console.log(`max - ${i}`);
        }
    }

    c();

    console.log(1);
    for(let i = 0; i < 10e6; i++){
        performance.now();
    }
    console.log(2);