const { sum, deleteUserById, findUserById } = require("./utils/file")


let userData = []
console.log("Before anything", userData)
beforeAll(() => {
    userData = ['Rex', 'Emmanuel']

    console.log("Before all tests run", userData)
})

beforeEach(() => {
    console.log("Before each test runs")
})

afterEach(() => {
    console.log("Runs after each test")
})

afterAll(() => {
    userData = []
    console.log("Runs after all tests have run", userData)
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

// Testing functions


describe("Testing functions", () => {
    test("test 1 + 2 must be 3", () => {
        expect(sum(1, 2)).toBe(3)
    })

    test("Testing the delete user function", () => {
        const users = [
            {
                name: "Emmanuel",
                age: 12,
                id: 1

            },
            {
                name: "Rex",
                age: 23,
                id: 2

            },
            {
                name: "Munil",
                age: 14,
                id: 3
            }
        ]
        console.log(users.length)
        expect(deleteUserById(users, 3).length).toEqual(users.length - 1)
    })
    // Done by test driven development
    test("Should find user by id", () => {
        const users = [
            {
                name: "Emmanuel",
                age: 12,
                id: 1

            },
            {
                name: "Rex",
                age: 23,
                id: 2

            },
            {
                name: "Munil",
                age: 14,
                id: 3
            }
        ]

        expect(findUserById(users, 2)).toEqual({
            name: "Rex",
            age: 23,
            id: 2
        })
    })
})
