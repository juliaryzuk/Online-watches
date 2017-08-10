import React from 'react';
import ReactDOM from 'react-dom';

class ClockTime extends React.Component{
  render()
  {
    return <h1>
      <ClockTimeHour date={this.props.date}/>:
      <ClockTimeMinute date={this.props.date}/>:
      <ClockTimeSecond date={this.props.date}/>
      </h1>;
  }
}

class ClockTimeHour extends React.Component{
  render()
  {
    return <span>{this.props.date.getHours()}</span>
  }
}
class ClockTimeMinute extends React.Component{
  render()
  {
    return <span>{this.props.date.getMinutes()}</span>
  }
}
class ClockTimeSecond extends React.Component{
  render()
  {
    return <span>{this.props.date.getSeconds()}</span>
  }
}

class ClockDate extends React.Component{
  render()
  {
    return <h1>
      <ClockDateYear date={this.props.date}/>.
      <ClockDateMonth date={this.props.date}/>.
      <ClockDateDay date={this.props.date}/>
    </h1>
  }
}
class ClockDateYear extends React.Component{
  render()
  {
    return <span>{this.props.date.getFullYear()}</span>
  }
}
class ClockDateMonth extends React.Component{
  render()
  {
    return <span>{this.props.date.getMonth()}</span>
  }
}
class ClockDateDay extends React.Component{
  render()
  {
    return <span>{this.props.date.getDate()}</span>
  }
}


class Clock extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount()
  {
    this.IntervalId = setInterval(()=>{
      this.setState({date:new Date()});
    },1000);
  }

  render()
  {
    return <div>
    <ClockTime date = {this.state.date}/>
    <ClockDate date = {this.state.date}/>
  </div>
  }
}

class App extends React.Component{
  render()
    {
      return <Clock/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <h1><App/></h1>,
        document.getElementById('app')
    );
});
