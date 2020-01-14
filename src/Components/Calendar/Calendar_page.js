import React from 'react';
import ReactDOM from 'react-dom';
import './Calendar.css';
import BrowserHistory from '../Utils/BrowserHistory';

import { Calendar, CalendarCell, CalendarWeekCell, CalendarNavigationItem, CalendarHeaderTitle, DateInput, DatePicker, TimePicker, MultiViewCalendar, DateRangePicker, DateTimePicker } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-tooltip'
import '@progress/kendo-react-common'
import '@progress/kendo-react-popup'
import '@progress/kendo-date-math'
import '@progress/kendo-react-dropdowns'

class Calender extends React.Component {
    onHandleClicks = (e) => {

        BrowserHistory.push('/Payment_page'); 
        
        }
    render() {
        return(
            <div className="example-wrapper" id="calendar">
               <DateTimePicker />
               <button onClick={this.onHandleClicks} className="btn_align"><b>Next</b></button>
            </div>
        )
    }
}

export default Calender;