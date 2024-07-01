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

    //блокировка в js
    console.log(1);
    for(let i = 0; i < 10e6; i++){
        performance.now();
    }
    console.log(2);

    console.log(0);
    setTimeout(() => {
        console.log(2);
    }, 0);
    console.log(1);

    setTimeout(() => {
        console.log(1);
    }, 1000);

    setTimeout(() => {
        console.log(2);
    }, 2000);

    setTimeout(() => {
        console.log(3);
    }, 3000);