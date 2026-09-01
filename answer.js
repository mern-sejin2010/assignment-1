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

// Question No. 2
function getDayType (value) {
    let dayType;
    const day = value.toLowerCase();
    switch (true) {
        case (
            day == 'friday' || 
            day == 'saturday'
        ):
            dayType = 'Weekend';
            break;
        case (
            day == 'sunday' ||
            day == 'monday' ||
            day == 'tuesday' ||
            day == 'wednesday' ||
            day == 'thursday'
        ): 
            dayType = 'Working Day';
            break;
        default:
            dayType = 'Invalid Day';
    }
    return dayType;
};