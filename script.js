const container = document.querySelector('.wrapper');

class CardHeader extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("header", { className: "card__header" }, /*#__PURE__*/
      React.createElement("nav", null, /*#__PURE__*/
      React.createElement("ul", { className: "nav" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "https://akdavis83.github.io/V/" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-superpowers" }))), /*#__PURE__*/



      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "https://akdavis83.github.io/V/" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-bars" }))))), /*#__PURE__*/





      React.createElement("div", { className: "header__info" }, /*#__PURE__*/
      React.createElement("div", { className: "header__avatar" }, /*#__PURE__*/
      React.createElement("img", { className: "avatar-photo", src: "https://at-cdn-s01.audiotool.com/2014/11/10/users/djxtreme/avatar256x256-29bc2d5a494e47349c6f5c273e17c0dd.jpg" })), /*#__PURE__*/


      React.createElement("div", { className: "header__name" }, /*#__PURE__*/
      React.createElement("ul", { className: "header__contact" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "" }, "Avoiding V Lifestyles:")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "" }, "Keep short accounts, Pray, Forgive")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("a", { href: "" }, "Don't let roots of bitterness spring up")))))));






  }}

class CardBody extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "card__body" }, /*#__PURE__*/
      React.createElement("ul", { className: "timeline" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, "(Mt 18:21-22)"), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, "Then came Peter to him, and said, Lord, how oft shall my brother sin against me, and I forgive him? till seven times? 22 Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven.")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, "(Heb 12:15)"), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, "Looking diligently lest any man fail of the grace of God; lest any root of bitterness springing up trouble you, and thereby many be defiled;")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, ""), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, "")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, ""), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, " ")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, ""), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, "")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, ""), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, "")), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("span", { className: "timeline__date" }, ""), /*#__PURE__*/
      React.createElement("span", { className: "timeline__description" }, "")))));




  }}

class Card extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement(CardHeader, null), /*#__PURE__*/

      React.createElement(CardBody, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Card, null), container);