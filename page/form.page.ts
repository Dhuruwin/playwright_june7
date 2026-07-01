import { Page,Locator } from "@playwright/test";
export class form{
    readonly page:Page
    readonly username:Locator
    readonly password :Locator
    readonly submit:Locator

    constructor(page :Page){
        this.page=page
        this.username=page.getByLabel('Username')
        this.password=page.getByLabel('Password')
        this.submit=page.getByRole('button',{name:'Login'})

    }
    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com/login")
    }
    async signin(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submit.click()
    }
}