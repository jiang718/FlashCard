module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardCategoryPanel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardCollection_js__ = __webpack_require__("./components/CardCollection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
var _jsxFileName = "/home/nil/CS/web/FlashCard/components/CardCategoryPanel.js";
 //import CardCategory from "./CardCategory.js";




var CardCategory = function CardCategory(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.categoryName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    "class": "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.categoryContent.map(function (cardCollection) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardCollection_js__["a" /* default */], {
      name: cardCollection.cardCollectionName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  }))));
};

var CardCategoryPanelError = function CardCategoryPanelError(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Load Error..."));
};

var CardCategoryPanelLoading = function CardCategoryPanelLoading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Loading..."));
};

var CardCategoryPanelNormal = function CardCategoryPanelNormal(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, props.library.map(function (category) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      "class": "col-lg-3 col-md-2 col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardCategory, {
      categoryName: category.cardCollectionName,
      categoryContent: category.cardCollectionContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }));
  })));
};

var CardCategoryPanel = function CardCategoryPanel(props) {
  return (//if (props.status == "error") {
    //  return <CardCategoryPanelError />;
    //} else if (props.status == "loading") {
    //  return <CardCategoryPanelLoading />;
    //}
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardCategoryPanelNormal, {
      library: props.library,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (CardCategoryPanel); //const CardCC = props => (
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

/***/ }),

/***/ "./components/CardCollection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Symbol_js__ = __webpack_require__("./components/Symbol.js");
var _jsxFileName = "/home/nil/CS/web/FlashCard/components/CardCollection.js";


 // const btnDivStyle = {
//   background: "#eee",
//   textAlign: "center"
// };

var textStyle = {
  fontSize: 10
};

var CardCollection = function CardCollection(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "class": "list-group-item list-group-item-action",
    style: textStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "class": "col-md-4 col-lg-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, props.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Symbol_js__["a" /* AddSymbol */], {
    "class": "col-md-4 col-lg-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Symbol_js__["b" /* DeleteSymbol */], {
    "class": "col-md-4 col-lg-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (CardCollection); // class CardCollection extends Component {
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

/***/ }),

/***/ "./components/Heading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/nil/CS/web/FlashCard/components/Heading.js";


var Heading = function Heading(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    "class": "jumbotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    "class": "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "Flash Card"));
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Heading_js__ = __webpack_require__("./components/Heading.js");
var _jsxFileName = "/home/nil/CS/web/FlashCard/components/Layout.js";




var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.pageTitle || "Flash Card")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Heading_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Symbol.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteSymbol; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/nil/CS/web/FlashCard/components/Symbol.js";

var iconBtn = {
  background: "transparent",
  padding: 0
};
var smallIcon = {
  fontSize: 5
};
var AddSymbol = function AddSymbol() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    type: "button",
    "class": "btn btn-outline-secondary btn-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fa fa-plus fa-xs",
    style: smallIcon,
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};
var DeleteSymbol = function DeleteSymbol() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    type: "button",
    "class": "btn btn-outline-secondary btn-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    "class": "fa fa-trash fa-xs",
    style: smallIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CardCategoryPanel_js__ = __webpack_require__("./components/CardCategoryPanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);

var _jsxFileName = "/home/nil/CS/web/FlashCard/pages/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CardCategoryPanel_js__["a" /* default */], {
    library: props.library,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var tmpPath, dataPath, res, data;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //console.log("did into this initial props, but too late");
          tmpPath = "https://api.myjson.com/bins/srb38";
          dataPath = "http://127.0.0.1:2801/api/cardData";
          _context.next = 4;
          return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(dataPath);

        case 4:
          res = _context.sent;
          _context.next = 7;
          return res.json();

        case 7:
          data = _context.sent;
          return _context.abrupt("return", {
            library: data.library
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map