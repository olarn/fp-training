import { pipe } from "effect/Function"
import { map } from "effect/Array"
import { loadCsv } from "./CsvLoader"
import { toTimeAttendant } from "./TimeAttendantConverter"
import { WorkDaySummary } from "./TimeAttendant"
import { toWorkdaySummary } from "./WorkdaySummery"
import { distinctEmployee as byDistinctEmployeeIdsFrom } from "./DistinctEmployee"

export const calculateWorkDays = (csvPath: string): WorkDaySummary[] => 
  pipe(
    csvPath,
    loadCsv,
    map(toTimeAttendant),
    timeAttendants => toWorkdaySummary(byDistinctEmployeeIdsFrom(timeAttendants))(timeAttendants)
  )