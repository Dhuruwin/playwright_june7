import {test,expect} from '@playwright/test'
import {form}  from '../page/form.page'

test('login test',async({page})=>{
    
const user1 =new form(page)
    await user1.navigate()
    await user1.signin("tomsmith","SuperSecretPassword!")
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure')

})

