import {Page,Locator} from '@playwright/test'

export class Loginpage{
    readonly page:Page
    readonly username:Locator
    readonly password:Locator
    readonly login:Locator


constructor (page:Page){
    this.page=page
    this.username=page.getByPlaceholder('Username')
    this.password=page.getByPlaceholder('Password')
    this.login=page.getByRole('button',{name:'Login'})

}
async Navigate(){
    await this.page.goto('https://www.saucedemo.com/')
}

async loginpage(){
    await this.username.fill('standard_user')
    await this.password.fill('secret_sauce')
    await this.login.click()
}
}

