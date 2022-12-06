
const sum = require("./file")

describe("Number test", () => {
    test("test 1 + 2 must be 3", () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe("testing other matcher methods", () => {
    test("testing whether a number is undefined", () => {
        let Number = null;

        // expect(Number).toBeUndefined();
        expect(Number).not.toBeUndefined();
        expect(Number).toBeNull();
        expect(Number).not.toBeTruthy();
        expect(Number).toBeFalsy()
    })

    test("Testing number is zero", () => {
        let number = 0;

        expect(number).toBeDefined()
        expect(number).not.toBeUndefined()
        expect(number).not.toBeTruthy()
        expect(number).toBeFalsy()
        expect(number).not.toBeNull()

    })
})

describe("Testing for strings", () => {
    test("There is no I in team", () => {
        let string = 'team';

        expect(string).not.toMatch(/I/i)
    })
})

describe("Testing reference type equality", () => {
    const user = {
        name: "Emmanuel",

    }
    user['age'] = 23;
    test("Should return a user with age of 23", () => {
        expect(user).toEqual({
            name: "Emmanuel",
            age: 23
        })
    })
    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        )
    })

    // Testing array equality
    test("Array equality", () => {
        const users = [
            "rex",
            "emmanuel",
            "munil"
        ]
        users.push("Lubwama")



        expect(users).toEqual(['rex', 'emmanuel', 'munil', 'Lubwama'])
        expect(users).toEqual(
            expect.arrayContaining([expect.any(String)])
        )

        const userObjectInArray = [
            {
                name: "Emmanuel",
                age: 12
            },
            {
                name: "Rex",
                age: 23
            },
            {
                name: "Munil",
                age: 14
            }
        ]

        userObjectInArray.push({
            name: "Lubwama",
            age: 24
        })

        expect(userObjectInArray).toEqual(expect.arrayContaining([expect.objectContaining({
            name: expect.any(String),
            age: expect.any(Number)
        })]))
    })
})