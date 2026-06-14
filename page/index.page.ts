import { Page,Locator } from "@playwright/test";
export class indexPage{
    readonly page :Page
    readonly addToCart:Locator
    readonly remove:Locator
    readonly cart :Locator

    constructor(page:Page){
        this.page=page
        this.addToCart=page.getByRole('button',{name:'Add to cart'}).first()
        this.remove=page.getByRole('button',{name:'Remove'}).first()
        this.cart=page.locator('#shopping_cart_container')
    }
    async addTocart(){
        await this.addToCart.click()
    }
    async removebtn(){
        await this.remove.click()
    }
    
}
