import {test,expect} from '@playwright/test'

test("login",async({page})=>{
    await page.setDefaultTimeout(60000)

    await page.goto("/login")

    var username = (await page.locator("//p[contains(.,'Register ')]//following-sibling::ul//li[1]//b").textContent()) || ''
    var password = (await page.locator("//p[contains(.,'Register ')]//following-sibling::ul//li[2]//b").textContent()) || ''

    await page.locator('#username').fill(username)
    await page.locator('#password').fill(password)
    await page.locator('#submit-login').click()

    var msg = await page.locator("//div[@id='flash']//b").textContent()
    await page.screenshot({
        fullPage:true,
        path: 'ss1.png'
    })
    expect(msg).toBe("You logged into a secure area!")

})