import React, { Fragment, Component } from "react";
import Link from "next/link";
import { AddSymbol, DeleteSymbol } from "./Symbol.js";

// const btnDivStyle = {
//   background: "#eee",
//   textAlign: "center"
// };
const textStyle = {
  fontSize: 10
};
const CardCollection = props => (
  <Fragment>
    <Link href="#">
      <a class="list-group-item list-group-item-action" style={textStyle}>
        <div class="row">
          <span class="col-md-4 col-lg-8">{props.name}</span>
          <AddSymbol class="col-md-4 col-lg-2" />
          <DeleteSymbol class="col-md-4 col-lg-2" />
        </div>
      </a>
    </Link>
  </Fragment>
);

export default CardCollection;
// class CardCollection extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     alert(this.props.name);
//   }
//   render() {
//     const btnDivStyle = {
//       background: "#eee",
//       textAlign: "center"
//     };
//     const textStyle = {
//       fontSize: 10
//     };
//     return (
//       <Fragment>
//         <Link href="#">
//           <a class="list-group-item list-group-item-action" style={textStyle}>
//             <div class="row">
//               <span class="col-md-4 col-lg-8">{this.props.name}</span>
//               <AddSymbol class="col-md-4 col-lg-2" />
//               <DeleteSymbol class="col-md-4 col-lg-2" />
//             </div>
//           </a>
//         </Link>
//       </Fragment>
//     );
//   }
// }
// export default CardCollection;
