import { calculateWorkDays } from "../CalculateWorkDays"

describe("app", () => {
  it("should return the workday summary", () => {
    const csvFile = "src/99-exercise/solution/tests/clock-in-out.csv"
    const workDaySummary = calculateWorkDays(csvFile)
    expect(
      workDaySummary
    ).toEqual([
      { employeeId: "001", workDays: 8 },
      { employeeId: "002", workDays: 8 },
      { employeeId: "003", workDays: 7.5 }
    ])
  })
})