import { test, expect } from "@playwright/test"

test("unsuccessful_test: empty login", async ({ page }) => {
  const username = "" // your_username
  const password = process.env.PASSWORD // your_strong_password
  const URL = process.env.BASE_URL // your_strong_url

  await test.step("Открыть страницу", async () => {
    await page.goto(URL)
  })

  await test.step("Не вводить имя пользователя", async () => {
    const loginField = page.locator('//input[@type="text"]')
    await loginField.click()
    await loginField.fill(username)
  })
  await test.step("Ввести пароль", async () => {
    const passwordField = page.locator('//input[@type="password"]')
    await passwordField.click()
    await passwordField.fill(password)
  })
  await test.step("Клик по кнопке Войти", async () => {
    const button = page.locator('//button[@type="submit"]')
    await button.click()
  })
  await test.step('Проверить наличие валидационного сообщения под полем "Имя пользователя"', async () => {
    await expect(page.locator('//*[contains(text(), "Укажите имя пользователя")]')).toBeVisible()
  })
})
