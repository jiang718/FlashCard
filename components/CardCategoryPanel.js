import React, { Fragment, Component } from "react";
//import CardCategory from "./CardCategory.js";
import CardCollection from "./CardCollection.js";
import fetch from "isomorphic-unfetch";

const CardCategory = props => (
  <Fragment>
    <div>{props.categoryName}</div>
    <div>
      <ul class="list-group">
        {props.categoryContent.map(cardCollection => (
          <CardCollection name={cardCollection.cardCollectionName} />
        ))}
      </ul>
    </div>
  </Fragment>
);

const CardCategoryPanelError = props => (
  <div class="container">
    <div class="row">Load Error...</div>
  </div>
);

const CardCategoryPanelLoading = props => (
  <div class="container">
    <div class="row">Loading...</div>
  </div>
);

const CardCategoryPanelNormal = props => (
  <div class="container">
    <div class="row">
      {props.library.map(category => (
        <div class="col-lg-3 col-md-2 col-1">
          <CardCategory
            categoryName={category.cardCollectionName}
            categoryContent={category.cardCollectionContent}
          />
        </div>
      ))}
    </div>
  </div>
);

const CardCategoryPanel = props => (
  //if (props.status == "error") {
  //  return <CardCategoryPanelError />;
  //} else if (props.status == "loading") {
  //  return <CardCategoryPanelLoading />;
  //}
  <CardCategoryPanelNormal library={props.library} />
);

export default CardCategoryPanel;

//const CardCC = props => (
//  <Layout>
//    <h1>Batman TV Shows</h1>
//    <ul>
//      {props.shows.map(({ show }) => (
//        <li key={show.id}>
//          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//            <a>{show.name}</a>
//          </Link>
//        </li>
//      ))}
//    </ul>
//  </Layout>
//);
//
//CardCC.getInitialProps = async function() {
//  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//  const data = await res.json();
//
//  console.log(`Show data fetched. Count: ${data.length}`);
//
//  return {
//    shows: data
//  };
//};
//export default CardCC;
// class CardCategory extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//   }
//   render() {
//     const listItems = this.props.categoryContent.map(d => (
//       <CardCollection name={d.cardCollectionName} />
//     ));

//     return (
//       <Fragment>
//         <div>{this.props.categoryName}</div>
//         <div>
//           <ul class="list-group">{listItems}</ul>
//         </div>
//       </Fragment>
//     );
//   }
// }

// const CardCategoryPanel = (props) => (

// );
// export default CartCategoryPanel;

// class CardCategoryPanel extends Component {
//   state = {
//     isLoaded: false,
//     err: null,
//     data: {}
//   };

//   static async getInitialProps() {
//     alert("start get");
//     const dataPath = "http://10.0.0.239:5000/api/cardData";
//     const tryPath = "http://jsonplaceholder.typicode.com/todos/1";
//     const fetchParam = {
//       method: "get"
//     };
//     alert("start setting");
//     const res = await fetch(dataPath, fetchParam);
//     alert("finish fetching");
//     const cardLibrary = await res.json();
//     alert("finish jsoning");
//     this.setState({
//       isLoaded: true,
//       data: cardLibrary
//     });
//     alert("finish updating");
//   }

//   // componentDidMount() {
//   //   const dataPath = "http://10.0.0.239:5000/api/cardData";
//   //   const tryPath = "http://jsonplaceholder.typicode.com/todos/1"; //   //   const fetchParam = { //   //     method: "get"
//   //   };
//   //   fetch(dataPath, fetchParam)
//   //     .then(response => response.json())
//   //     .then(d =>
//   //       this.setState({
//   //         isLoaded: true,
//   //         data: d
//   //       })
//   //     )
//   //     .catch(error => {
//   //       this.setState({
//   //         error,
//   //         isLoaded: true
//   //       });
//   //       alert(error);
//   //     });
//   // }

//   componentWillMount() {}

//   handelKeyUp = evt => {};

//   render() {
//     if (this.state.isLoaded) {
//       if (this.state.error) {
//         return (
//           <div class="container">
//             <div class="row">Error!</div>
//           </div>
//         );
//       } else {
//         const categoryList = this.state.data.library.map(category => (
//           <div class="col-sm">
//             <CardCategory
//               categoryName={category.cardCollectionName}
//             />
//           </div>
//         ));
//         return (
//           <div class="container">
//             <div class="row">{categoryList}</div>
//           </div>
//         );
//       }
//     } else {
//       return (
//         <div class="container">
//           <div class="row">Loading...</div>
//         </div>
//       );
//     }
//   }
// }
