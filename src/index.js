import ReactDOM from 'react-dom';
import React from 'react';

// const el = document.querySelector('.main');
// ReactDOM.render(<h1>Hello</h1>, el)

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello, world!
//       </div>
//     );
//   }
// }

// var Tabs = React.createClass({
//     render: function(){
//         return (
//             <nav>
//                 <ul></ul>
//             </nav>
//         )
//     }
// });

// var Tab = React.createClass({
//     render: function(){
//         return (
//             <li></li>
//         )
//     }
// });

const tabList = [
  { 'id': 1, 'name': 'Tab1', 'url': '/tab1' },
  { 'id': 2, 'name': 'Tab2', 'url': '/tab2' },
  { 'id': 3, 'name': 'Tab3', 'url': '/tab3' },
  { 'id': 4, 'name': 'Tab4', 'url': '/tab4' }
];

class Tab extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }
  render() {
    return (
      <li className={this.props.isCurrent ? 'current' : null}>
        <a onClick={this.handleClick} href={this.props.url}>
            {this.props.name}
        </a>
      </li>
    );
  }
}

class Tabs extends React.Component {
  handleClick(tab) {
    this.props.changeTab(tab);
  }
  render() {
    return (
      <nav>
        <ul>
        {this.props.tabList.map((tab) => {
          return (
            <Tab
              handleClick={this.handleClick.bind(this, tab)}
              key={tab.id}
              url={tab.url}
              name={tab.name}
              isCurrent={(this.props.currentTab === tab.id)} />
          );
        }, bind(this))}
        </ul>
      </nav>
    );
  }
}

class Content extends React.Component {
  render() {
    return(
      <div className="content">
        {this.props.currentTab === 1 ?
        <div className="mike">
          <img src="http://s.mlkshk.com/r/104TN" />
        </div>
        :null}

        {this.props.currentTab === 2 ?
        <div className="donnie">
          <img src="http://s.mlkshk.com/r/103AG" />
        </div>
        :null}

        {this.props.currentTab === 3 ?
        <div className="raph">
            <img src="http://s.mlkshk.com/r/JAUD" />
        </div>
        :null}

        {this.props.currentTab === 4 ?
        <div className="leo">
            <img src="http://s.mlkshk.com/r/ZJPL" />
        </div>
        :null}
      </div>
    );
  }
}

class App extends React.Component {
  getInitialState() {
    return {
      tabs: tabs,
      currentTab: 1
    };
  }
  changeTab(tab) {
    this.setState({ currentTab: tab.id });
  }
  render() {
    return (
      <div>
        <Tabs
          currentTab={this.state.currentTab}
          tabList={tabList}
          changeTab={this.changeTab} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('sample')
);