const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 16; i <= 22; i++) {
        if (random() < 0.5) {
            result.push(`${i - 12}:00 PM`);
        }
        if (random() < 0.5) {
            result.push(`${i - 12}:30 PM`);
        }
    }

    if (result.length === 0) {
        return [
            "4:00 PM",
            "4:30 PM",
            "5:00 PM",
            "5:30 PM",
            "6:00 PM",
            "6:30 PM"
        ];
    }

    return result;
};

export const submitAPI = function (formData) {
    return true;
};