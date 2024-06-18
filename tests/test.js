const {Builder, By, Key, until} = require("selenium-webdriver")

async function openSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await driver.sleep(5000)
        
        //Login
        const nameInput = await driver.findElement(By.name("username"))
        await nameInput.sendKeys("Admin")
        const passwordInput = await driver.findElement(By.name("password"))
        await passwordInput.sendKeys("admin123")
        await driver.sleep(2000)
        const buttonLogin = await driver.findElement(By.css("button[type='submit']"))
        await buttonLogin.click()
        await driver.sleep(3000)

        //Trocar senha
        await driver.executeScript(`document.querySelector(".oxd-userdropdown-name").click()`)
        await driver.sleep(2000)
        const changePasswordItem = driver.findElement(By.css("a[href='/web/index.php/pim/updatePassword']"))
        await changePasswordItem.click()
        await driver.sleep(3000)
        const currentPassword = await driver.findElements(By.className("oxd-input"))    
        const newPassword = await driver.findElements(By.className("oxd-input"))
        const confirmNewPassword = await driver.findElements(By.className("oxd-input"))
        const passwordSubmit = await driver.findElements(By.css("button[type='submit']"))
        await currentPassword[1].sendKeys("admin123")
        await newPassword[2].sendKeys("novasenha")  
        await confirmNewPassword[3].sendKeys("novasenha")
        driver.sleep(3000)
        await passwordSubmit[0].click()

        //Navegação
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceRe")
        await driver.sleep(3000)
        await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await driver.sleep(3000)

        //Trocar nome
        await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7')
        driver.sleep(3000)
        const inputNewName = await driver.wait(until.elementLocated(By.name("firstName")), 10000)
        await inputNewName.sendKeys("novoNome")

        const save = await driver.findElements(By.css("button[type='submit']"))
        await save[0].click()
        await driver.sleep(5000)

        //Sair
        await driver.sleep(3000)
        await driver.executeScript(`document.querySelector(".oxd-userdropdown-name").click()`)
        await driver.sleep(2000)
        const logoutItem = driver.findElement(By.css("a[href='/web/index.php/auth/logout']"))
        await logoutItem.click()

    } catch(e){
        console.log(e)
    }
}
openSite()