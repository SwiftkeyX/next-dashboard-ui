"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const customNow = new Date(2024, 7, 12, 8, 0); // Set your specific current time here

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      onView={handleOnChangeView}
      style={{ height: "99%" }}
      min={new Date(2024, 0, 1, 8, 0, 0)} // Minimum time in the calendar
      max={new Date(2024, 0, 1, 17, 0, 0)} // Maximum time in the calendar
      getNow={() => customNow} // Pass your custom current time here
    />
  );
};

export default BigCalender;
