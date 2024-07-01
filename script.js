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