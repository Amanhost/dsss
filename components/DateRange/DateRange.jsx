import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./DateRange.css";
import moment from "moment";

const DateRange = ({ timeState, setTimeState }) => {
  const { start, end } = timeState;
  const handleCallback = (start, end) => {
    setTimeState({ start, end });
  };

  return (
    <DateRangePicker
      initialSettings={{
        startDate: start.toDate(),
        endDate: end.toDate(),
        ranges: {
          Today: [moment().toDate(), moment().toDate()],
          Yesterday: [
            moment().subtract(1, "days").toDate(),
            moment().subtract(1, "days").toDate(),
          ],
          "Last 7 Days": [
            moment().subtract(6, "days").toDate(),
            moment().toDate(),
          ],
          "Last 30 Days": [
            moment().subtract(29, "days").toDate(),
            moment().toDate(),
          ],
          "This Month": [moment().startOf("month").toDate(), moment().toDate()],
          "Last Month": [
            moment().subtract(1, "month").startOf("month").toDate(),
            moment().subtract(1, "month").endOf("month").toDate(),
          ],
        },
        maxDate: moment().toDate(),
        locale: {
          format: "D MMM, YYYY",
        },
        maxDate: moment().toDate(),
        alwaysShowCalendars: true,
        opens: "left",
        showDropdowns: true,
      }}
      onCallback={handleCallback}
    >
      <input
        type="text"
        className="form-control search-input rounded-5"
        role="button"
      />
    </DateRangePicker>
  );
};

export default DateRange;
