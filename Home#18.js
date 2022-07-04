"use strict";

// 2. ստեղծում եք մեկ հատ Object 10 հատ property-ներով, 5 property-Ն պետք ա լինեն object, 
// ու for in-ով անում եք այնպես, որ կոնսոլում տպվեն համ առաջին մակարդակի property-ները իրենց value-ներով,
//  համ 2րդ մակարդակի (Օբյեկտի մեջի Օբյեկտների)

const obj = {
    moodels: " Mercedes",
    year: 2021,
    color: "red",
    fuel: "petrol",
    type: "passenger",
    model: {
        moodel: "AMG S-Class Sedan",
        year: 2021,
        color: "black",
        maxSpeed: 250,
        type: "passenger",
        class: "S"
    },
    model2: {
        moodel: "CLS Coupé C257",
        year: 2020,
        color: "silver",
        maxSpeed: 280,
        type: "passenger",
        class: "C"
    },
    model3: {
        moodel: "E-Class Estate s213 FL",
        year: 2019,
        color: "blue",
        maxSpeed: 220,
        type: "passenger",
        class: "E"
    },
    model4: {
        moodel: "V-Class-447",
        year: 2018,
        color: "black",
        maxSpeed: 180,
        type: "passenger",
        class: "V"
    },
    model5: {
        moodel: "GLS SUV X167",
        year: 2021,
        color: "black",
        maxSpeed: 270,
        type: "passenger",
        class: "G "
    },
};
for (const key in obj) {
    if (typeof(obj[key]) === "object") {
        for (const j in obj[key]) {
            console.log(`${j} : ${obj[key][j]}`);
        }
    } else {
        console.log(`${key} : ${obj[key]}`);
    }
}
//---------------------------------------------------------------------------------------------------------------------------

// 3․  ստեղծում եք մեկ հատ Array, 10 հատ item-ներով, 5 item-ը պետք ա լինեն Array-ներ, ու for in-ով ու for of-ով անում եք այնպես, 
// որ կոնսոլում տպվեն համ առաջին մակարդակի item-ները համ 2րդ մակարդակի (Զանգվածի մեջ զանգված)

const arr = [1, 2, 3, [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18], 19, 20
];

//========== for of ===============


for (const i of arr) {
    if (Array.isArray(i)) {
        for (const j of i) {
            console.log(j);
        }
    } else {
        console.log(i);
    }
}

//========== for in ===============


for (const val in arr) {
    if (Array.isArray(arr[val])) {
        for (const key in arr[val]) {
            console.log(arr[val][key]);
        }
    } else {
        console.log(arr[val]);
    }
}

//---------------------------------------------------------------------------------------------------------------------------

// 4․ ստեղծում եք առանձին Object ու Array, որոնց մեջ ստեղծում եք function-ներ, ու փորձում եք ստանալ destructuring անելով, 
// այսինքն առանց կետի կանչելով, ուղղակի գրեք ֆունկցիայի անունը ու կանչեք


const obj = {
    a: 10,
    b: 2,
    sum: () => {
        return obj.a + obj.b
    },
    pow: () => {
        return Math.pow(obj.a, obj.b)
    }
};

const { sum, pow } = obj;
console.log(sum());
console.log(pow());