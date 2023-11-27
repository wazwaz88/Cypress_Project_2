const ProjectPage = require("../pages/ProjectPage")

describe('Project - Login Function', () => {


    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')
    })

    const projectPage = new ProjectPage()

    it('Test Case 01 - Validate the login form', () => {

        projectPage.inputUsername().should('be.visible').and('not.have.attr', 'required')
        projectPage.inputUsername().prev().should('have.text', 'Please enter your username')
        projectPage.inputPassword().should('be.visible').and('not.have.attr', 'required')
        projectPage.inputPassword().prev().should('have.text', 'Please enter your password')
        projectPage.loginBtn().should('be.visible').and('be.enabled').and('have.text', 'LOGIN')
        projectPage.getForgotPasswordLink().should('be.visible').and('have.text', 'Forgot Password?').click()
    })

    it('Test Case 02 - Validate the valid login', () => {
        projectPage.enterUsername('TechGlobal')
        projectPage.enterPassword('Test1234')
        projectPage.loginBtn().click()
        projectPage.successLoginMessage().should('have.text', 'You are logged in')
        projectPage.logoutBtn().should('be.visible')
    })

    it('Test Case 03 - Validate the logout', () => {
        projectPage.enterUsername('TechGlobal')
        projectPage.enterPassword('Test1234')
        projectPage.loginBtn().click()
        projectPage.logoutBtn().click()
        projectPage.getLoginForm().should('be.visible')

    })

    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {

        projectPage.getForgotPasswordLink().click()
        projectPage.modalHeading().should('be.visible')
        projectPage.closeBtn().should('be.visible')
        projectPage.emailInput().should('be.visible')
        projectPage.labelOfEmailInputBox().should('have.text', "Enter your email address and we'll send you a link to reset your password. ")
        projectPage.submitBtn().should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')
    })

    it('Test Case 05 - Validate the Reset Password modal close button', () => {
        projectPage.getForgotPasswordLink().click()
        projectPage.getModalCardResetPassword().should('be.visible')
        projectPage.closeBtn().click()
        projectPage.getModalCardResetPassword().should('not.exist')

    })

    it('Test Case 06 - Validate the Reset Password form submission', () => {
        projectPage.getForgotPasswordLink().click()
        projectPage.emailInput().type('johndoe@gmail.com')
        projectPage.submitBtn().click()
        projectPage.getConfirmationMessage().should('have.text', 'A link to reset your password has been sent to your email address.')

    })

    it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
        projectPage.loginBtn().click()
        projectPage.getErrorMessage().should('have.text', 'Invalid Username entered!')
    })

    it('Test Case 08 - Validate the invalid login with the wrong username', () => {
        projectPage.enterUsername('John')
        projectPage.enterPassword('Test1234')
        projectPage.loginBtn().click()
        projectPage.getErrorMessage().should('have.text', 'Invalid Username entered!')

    })

    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
        projectPage.enterUsername('TechGlobal')
        projectPage.enterPassword('1234')
        projectPage.loginBtn().click()
        projectPage.getErrorMessage().should('have.text', 'Invalid Password entered!')
    })

    it.only('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
        projectPage.enterUsername('John')
        projectPage.enterPassword('1234')
        projectPage.loginBtn().click()
        projectPage.getErrorMessage().should('have.text', 'Invalid Username entered!')
    })

})