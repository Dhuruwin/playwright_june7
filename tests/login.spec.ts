import {test,expect} from '@playwright/test'
import { Loginpage } from '../page/login.page'
import { indexPage } from '../page/index.page'

let user1:Loginpage
let index : indexPage
test.describe('test all',()=>{


test.beforeEach('index page test',async({page})=>{
     index =new indexPage(page)

     
    user1 = new Loginpage(page)
   await user1.Navigate()
   await user1.loginpage('standard_user','secret_sauce')
   //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")


    //navigate to that page
    
    //await index.navigate()
    await expect(page).toHaveURL(process.env_INDEX_LINK!)
    await expect(page.getByRole('button',{name:'Add to cart'}).first()).toBeVisible()
    await expect(page.getByRole('button',{name:'Add to cart'}).first()).toBeEnabled()


})

test('add to cart btn click',async({page})=>{
    await index.addToCartbtn()
    await expect(page.getByRole('button',{name:'Remove'}).first()).toBeEnabled()
    await expect(page.getByRole('button',{name:'Remove'}).first()).toBeEnabled()
    await index.removeBtn()
    await expect(page.getByRole('button',{name:'Add to cart'}).first()).toBeVisible()
    await expect(page.getByRole('button',{name:'Add to cart'}).first()).toBeEnabled()
    await expect(page.locator('#shopping_cart_container')).toBeVisible()



})
})
