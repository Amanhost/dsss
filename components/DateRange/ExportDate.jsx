import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "./DateRange.css";
import { errorToast } from '../../components/Toasts/Toasts';
import { useUserDetails } from '../../hooks/useQueryHooks/useUserDetails';
import moment from "moment";

const ExportDate = ({ timeState, setTimeState }) => {
  const userId = localStorage.getItem('UserId');
  const { data: userData, status: userStatus } = useUserDetails(userId);
  const isAssigner = userData?.isAssigner;
  const { start, end } = timeState;
  const handleCallback = (start, end) => {
    const diffInMs = new Date(end) - new Date(start)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    diffInDays >((isAssigner==true||userId==='1')?365:93) ? errorToast('Select Only less then 3 Month Of Data ') :
      setTimeState({ start, end })
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

          "Last 3 Months": [
            moment().subtract(90, "days").toDate(),
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
        opens: "top",
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

export default ExportDate;
