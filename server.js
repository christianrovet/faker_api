const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker');

const users = [];
const companies = [];

class User{
    constructor() {
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor() {
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    users.push(newUser);
    console.log('NewUser', newUser);
    res.json({message : "good stuff bruh you made a user"});
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    companies.push(newCompany);
    console.log('NewCompany', newCompany);
    res.json({message : "good stuff bruh you made a company"});
});

app.get("/api/user/company", (req, res) => {
    const newCompany = new Company();
    const newUser = new User();
    companies.push(newCompany);
    users.push(newUser);
    console.log('NewCompany', newCompany);
    console.log('NewUser', newUser);
    res.json({message : "good stuff bruh you made a company and a user DOG"});
});




app.listen( port, () => console.log(`Listening on port: ${port}`) );