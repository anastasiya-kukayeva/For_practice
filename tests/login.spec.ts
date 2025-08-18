// Валидный тест с валидными кредами

import { test, expect } from "@playwright/test"
import { getCurrentStringDate } from "../utils/getCurrentStringDate"

const URL = "https://test-env08-clinic.robo-med.com"

test("successful_test", async ({ page }) => {
  await page.goto(URL)
  const logo = page.getByRole("img", { name: "logo" })
  await expect(logo).toBeVisible()
  await expect(page.getByRole("heading", { name: "logo Robomed Clinic" })).toBeVisible()
  const loginField = page.getByRole("textbox", { name: "Имя пользователя" })
  await loginField.click()
  await loginField.fill("Support")
  const passwordField = page.getByRole("textbox", { name: "Пароль" })
  await passwordField.click()
  await passwordField.fill("sup321")
  // await passwordField.press("Enter")
  const button = page.getByRole("button", { name: "Войти" })
  await button.click()
  await expect(page).toHaveURL(`${URL}`)
  await expect(page.getByRole("heading", { name: "Загрузка справочников" })).toBeVisible()
  // await page.waitForTimeout(10000)
  await expect(page).toHaveURL(`${URL}/schedule/daily/${getCurrentStringDate()}`, {
    timeout: 300_000,
  })
})
