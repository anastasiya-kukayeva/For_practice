import { test, expect } from "@playwright/test"

test("unsuccessful_test: empty login and password", async ({ page }) => {
  const URL = process.env.BASE_URL

  await test.step("Открыть страницу", async () => {
    await page.goto(URL)
  })

  await test.step("Клик по кнопке Войти", async () => {
    const button = page.locator('//button[@type="submit"]')
    await button.click()
  })

  await test.step("Проверить наличие валидационного сообщения под полем 'Имя пользователя'", async () => {
    await expect(page.locator('//*[contains(text(), "Укажите имя пользователя")]')).toBeVisible()
  })

  await test.step("Проверить наличие валидационного сообщения под полем 'Пароль'", async () => {
    await expect(page.locator('//*[contains(text(), "Укажите пароль")]')).toBeVisible()
  })
})
