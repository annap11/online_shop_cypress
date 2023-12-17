/// <reference types="cypress" />

import base from "../page_object_model/base";
import home from "../page_object_model/home";

describe("Click on an element", () => {
    it("Click on CONTACT section", () => {
        base.openHome();
        home.ContactSection.click();
    })
})