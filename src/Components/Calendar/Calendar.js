import React, { Component } from 'react';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import './Calendar.css'

class Calendar extends Component {
  state={
    date: new Date(),
  }
    handleDate=(date)=> {
        this.setState({
          date: date
        });
      }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
      console.log(this.state.date)
        return (
            <div className="timings">
                                   <DatePicker className='tobook' 
                                        selected={this.state.date}
                                        onChange={this.handleDate}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={60}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    />
            </div>
        );
    }
}

export default Calendar;