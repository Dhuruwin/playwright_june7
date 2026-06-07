import {test,expect} from '@playwright/test'
import { Loginpage } from '../page/login.page'

test('login test',async({page})=>{

   const user1 = new Loginpage(page)
   await user1.Navigate()
   await user1.loginpage()
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
});
