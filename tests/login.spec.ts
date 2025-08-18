// Валидный тест с валидными кредами

import { test, expect } from "@playwright/test"
import { getCurrentStringDate } from "../utils/getCurrentStringDate"

test("successful_test", async ({ page }) => {
  const username = process.env.LOGIN // your_username
  const password = process.env.PASSWORD // your_strong_password
  const URL = process.env.BASE_URL // your_strong_url

  await page.goto(URL)
  const logo = page.getByRole("img", { name: "logo" })
  await expect(logo).toBeVisible()
  await expect(page.getByRole("heading", { name: "logo Robomed Clinic" })).toBeVisible()
  const loginField = page.getByRole("textbox", { name: "Имя пользователя" })
  await loginField.click()
  await loginField.fill(username)
  const passwordField = page.getByRole("textbox", { name: "Пароль" })
  await passwordField.click()
  await passwordField.fill(password)
  const button = page.getByRole("button", { name: "Войти" })
  await button.click()
  await expect(page).toHaveURL(`${URL}`)
  await expect(page.getByRole("heading", { name: "Загрузка справочников" })).toBeVisible()
  await expect(page).toHaveURL(`${URL}/schedule/daily/${getCurrentStringDate()}`, {
    timeout: 300_000,
  })
})
