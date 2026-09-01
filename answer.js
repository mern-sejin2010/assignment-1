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

// Question No. 3
function validateUsername (name) {
    if (name.length < 4) return 'Too Short';
    if (name.includes(' ')) return 'No Space Allowed';
    if (name.toLowerCase().includes('admin')) return 'Reserved Word';
    return 'Available';
};

// Question No. 4
function getCngFare (
    distance = 2, 
    isNight = false, 
    waitingMinutes = 0
) {
    let totalFare = 50;
    if (distance > 2) totalFare += ((distance - 2) * 15);
    if (waitingMinutes) totalFare += waitingMinutes * 2;
    if (isNight) totalFare += totalFare * (20/100);
    return totalFare;
};

// Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let requiredRate;
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) return 'Won';
    if (ballsLeft <= 0) return 'Lost';
    requiredRate = (runsNeeded / ballsLeft) * 6;

    const verdict = 
        requiredRate <= 6 ? 'Comfortable' :
        requiredRate > 6 && requiredRate <= 12 ? 'Tough' :
        'Almost Impossible';

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};