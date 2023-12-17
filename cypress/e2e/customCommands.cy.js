/// <reference types="cypress" />

import { signUp, signUpPassword } from "../fixtures/login examples.json";

describe("Custom commands", () => {
    it("Sign up to an online shop", () => {
        cy.signUp(signUp, signUpPassword);
    })
})