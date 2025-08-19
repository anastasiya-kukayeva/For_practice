// Валидный тест с валидными кредами

import { test, expect } from "@playwright/test"
import { getCurrentStringDate } from "../utils/getCurrentStringDate"

test("successful_test", async ({ page }) => {
  const username = process.env.LOGIN // your_username
  const password = process.env.PASSWORD // your_strong_password
  const URL = process.env.BASE_URL // your_strong_url

  await test.step("Открыть страницу", async () => {
    await page.goto(URL)
  })
  await test.step("Проверить логотип", async () => {
    const logo = page.locator('//img[@alt="logo"]')
    await expect(logo).toBeVisible()
  })
  await test.step("Проверить заголовок", async () => {
    await expect(page.locator('//h2[@class="_title_1ptgq_1"]')).toBeVisible()
  })
  await test.step("Проверить имя пользователя", async () => {
    const loginField = page.locator('//input[@type="text"]')
    await loginField.click()
    await loginField.fill(username)
  })
  await test.step("Проверить пароль", async () => {
    const passwordField = page.locator('//input[@type="password"]')
    await passwordField.click()
    await passwordField.fill(password)
  })
  await test.step('Клик по кнопке "Войти"', async () => {
    const button = page.locator('//button[@type="submit"]')
    await button.click()
  })
  await test.step("Проверить адрес страницы", async () => {
    await expect(page).toHaveURL(`${URL}`)
  })
  await test.step("Проверить заголовок на следующе странице", async () => {
    await expect(page.locator('//*[contains(text(), "Загрузка справочников")]')).toBeVisible()
  })
  await test.step("Проверить адрес сстраницы", async () => {
    await expect(page).toHaveURL(`${URL}/schedule/daily/${getCurrentStringDate()}`, {
      timeout: 300_000,
    })
  })
})
