import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";
import { useEffect } from "react";

export const Timer = () => {
  const dispatch = useDispatch();
  // get alert message here
  const alertMessage = useSelector(alertSelector);
  // create effect to reset alert message here
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        dispatch(resetAlert());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage, dispatch]);

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}

      <div className="alert">
        {alertMessage && (
          <div className="alert alert-info" role="alert">
            {alertMessage}
          </div>
        )}
      </div>
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
