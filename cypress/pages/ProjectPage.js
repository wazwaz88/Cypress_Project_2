class ProjectPage {

    //locators
    inputUsername(){
        return cy.get('#username')
    }


    inputPassword(){
        return cy.get('#password')
    }


    loginBtn(){
        return cy.get('#login_btn')
    }

    getForgotPasswordLink(){
        return cy.get('.m-auto a')
    }

    successLoginMessage(){
        return cy.get('#success_lgn')
    }

    logoutBtn(){
        return cy.get('#logout')
    }

    getLoginForm() {
        return cy.get('.LoginForm_content__GphXn')
    }

    modalHeading() {
        return cy.get('#modal_title')
    }

    closeBtn(){
        return cy.get('.delete')
    }

    emailInput(){
        return cy.get('#email')
    }

    labelOfEmailInputBox(){
        return cy.get('label[for="email"]')
    }

    submitBtn(){
        return cy.get('#submit')
    }

    getModalCardResetPassword() {
        return cy.get('#modal_title')
    }

    getConfirmationMessage(){
        return cy.get('#confirmation_message')
    }

    getErrorMessage(){
        return cy.get('#error_message')
    }

    //methods
    enterUsername(username){
        this.inputUsername().type(username)
    }

    enterPassword(password){
        this.inputPassword().type(password)
    }
}

module.exports = ProjectPage