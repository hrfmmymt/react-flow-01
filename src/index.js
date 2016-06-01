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
  render() {
    return (
      <li><a href={this.props.url}>{this.props.name}</a></li>
    );
  }
}

class Tabs extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.tabList.map((tab) => {
            return (
              <Tab url={tab.url} name={tab.name} />
            );
          })}
        </ul>
      </nav>
    );
  }
}

ReactDOM.render(
    <Tabs tabList={tabList} />,
    document.getElementById('sample')
);