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
    await this.page.goto(process.env.BASE_URL!)
}

async loginpage(username:string,password:string){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.login.click()
}
}

