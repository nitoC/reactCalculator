const Display = props => {
  return (
    React.createElement("h2", { id: "display" }, props.display));

};
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numBtn: { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 },
      oprBtn: { plus: "+", minus: "-", multiply: "*", divide: "/", equals: "=", dot: "." },
      input: '0' };

    this.oprKeys = Object.keys(this.state.oprBtn);
    this.numKeys = Object.keys(this.state.numBtn);
    this.convertToNum = this.convertToNum.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputNum = this.inputNum.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.clear = this.clear.bind(this);

  }
  clear() {
    this.setState({
      numBtn: { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 },
      oprBtn: { plus: "+", minus: "-", multiply: "*", divide: "/", equals: "=", dot: "." },
      input: '0' });

  }
  evaluate() {
    this.setState({
      numBtn: this.state.numBtn,
      oprBtn: this.state.oprBtn,
      input: eval(this.state.input) });

  }
  inputNum() {
    if (this.state.input === "0" || this.state.input === 0) {
      return " ";
    }
    return this.state.input;
  }

  convertToNum(num) {
    return num % 1 === 0 ? parseInt(num) : parseFloat(num);
  }
  handleClick(event) {

    this.setState({
      numBtn: this.state.numBtn,
      oprBtn: this.state.oprBtn,
      input: this.inputNum() + event.target.value });


  }
  render() {
    return (
      React.createElement("div", { id: "who" },
      React.createElement("div", { id: "cover" }, React.createElement(Display, { display: this.state.input })),
      React.createElement("button", { id: "Clear", value: "Clear", onClick: this.clear }, "AC"),
      React.createElement("section", { id: "buttons" },

      React.createElement("div", { id: "numButton" },
      this.numKeys.map((a, b) => React.createElement("button", { id: a, value: this.state.numBtn[a], onClick: this.handleClick }, b)),
      React.createElement("button", { id: "equals", value: "=", onClick: this.evaluate }, this.state.oprBtn.equals),
      React.createElement("button", { id: "decimal", value: ".", onClick: this.handleClick }, this.state.oprBtn.dot)),

      React.createElement("div", { id: "aOperator" },
      React.createElement("button", { id: "add", value: "+", onClick: this.handleClick }, this.state.oprBtn.plus),
      React.createElement("button", { id: "subtract", value: "-", onClick: this.handleClick }, this.state.oprBtn.minus),
      React.createElement("button", { id: "multiply", value: "*", onClick: this.handleClick }, this.state.oprBtn.multiply),
      React.createElement("button", { id: "divide", value: "/", onClick: this.handleClick }, this.state.oprBtn.divide)))));




  }}

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("wrapper"));