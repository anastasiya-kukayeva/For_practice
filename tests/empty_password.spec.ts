import { test, expect } from "@playwright/test"

test("unsuccessful_test: empty password", async ({ page }) => {
  const username = process.env.LOGIN
  const URL = process.env.BASE_URL

  await test.step("Открыть страницу", async () => {
    await page.goto(URL)
  })

  await test.step("Ввести имя пользователя", async () => {
    const loginField = page.locator('//input[@type="text"]')
    await loginField.click()
    await loginField.fill(username)
  })

  await test.step("Клик по кнопке 'Войти'", async () => {
    const button = page.locator('//button[@type="submit"]')
    await button.click()
  })

  await test.step("Проверить наличие валидационного сообщения под полем 'Пароль'", async () => {
    await expect(page.locator('//*[contains(text(), "Укажите пароль")]')).toBeVisible()
  })
})
