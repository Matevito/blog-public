import { DateTime } from "luxon"

const parseDate = (date_string) => {
    return DateTime.fromISO(date_string).toLocaleString(DateTime.DATE_MED)
};

export default parseDate;