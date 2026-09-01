// Question No. 1
function describeValue (value) {
    let truthyFalsy;
    const valueType = typeof value;
    if (value) {
        truthyFalsy = 'truthy';
    } else {
        truthyFalsy = 'falsy';
    }
    return `${valueType} | ${truthyFalsy}`;
};