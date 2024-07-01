const a = () => {
    console.trace('hi');
}

const b = () => {
    a();
}

b();

