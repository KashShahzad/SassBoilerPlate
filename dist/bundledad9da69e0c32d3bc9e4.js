(() => {
  "use strict";
  var r,
    n,
    e,
    t,
    o,
    A,
    i,
    a,
    c,
    s,
    l,
    C,
    m,
    u,
    d = {
      144: (r, n, e) => {
        e.d(n, { Z: () => a });
        var t = e(537),
          o = e.n(t),
          A = e(645),
          i = e.n(A)()(o());
        i.push([
          r.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);",
        ]),
          i.push([
            r.id,
            ':root{--color-primary: #f7f7f7;--color-primary-dark: #f2f2f2}*{margin:0;padding:0}*,*::before,*::after{box-sizing:inherit}html{box-sizing:border-box;font-size:62.5%}body{font-family:"Roboto",sans-serif;font-weight:400;line-height:1.6;color:#000;background-image:linear-gradient(to right bottom, var(--color-primary), var(--color-primary-dark));background-size:cover;background-repeat:no-repeat;min-height:100vh}::selection{background-color:green;color:#fff}.logo{height:3.25rem;margin-left:3rem}.user-nav{margin-right:3rem;display:flex;align-items:center;align-self:stretch}.user-nav>*{padding:0 2rem;cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.user-nav>*:hover{background-color:var(--color-primary-dark)}.user-nav__icon-box{position:relative}.user-nav__icon{height:2.25rem;width:2.25rem;fill:gray}.menu{color:gray;display:block;position:absolute;left:0;top:100%;background-color:#fff}.menu__list{display:block;list-style:none;margin:10px}.menu__list>*:hover{color:#000;background-color:var(--color-primary-dark)}.menu__item{text-decoration:none;display:flex;align-items:center;justify-content:center}.search{flex:0 0 40%;display:flex;align-items:center;justify-content:center}.search__input{font-family:inherit;font-size:inherit;color:inherit;background-color:var(--color-primary);border:none;padding:.7rem 2rem;border-radius:100px;width:90%;transition:all .2s;margin-right:-3.25rem}.search__input:focus{outline:none;width:100%}.search__input::-webkit-input-placeholder{font-weight:100;color:gray}.search__input::-webkit-input-placeholder:focus{color:#000}.search__input:focus+.search__button{background-color:var(--color-primary)}.search__button{border:none;background-color:var(--color-primary)}.search__button:focus{outline:none}.search__button:active{transform:translateY(2px)}.search__icon{height:2rem;width:2rem;fill:gray}.header{font-size:1.4rem;margin:5em 5em;box-shadow:0 2rem 6rem rgba(0,0,0,.1);border-bottom:var(--color-primary-dark);min-height:8em;justify-content:space-between;align-items:center;display:flex;justify-content:center;align-items:center}.footer{padding:2rem 0;min-height:20vh;background-color:#fff;box-shadow:0 2rem 6rem rgba(0,0,0,.1);border-top:var(--color-primary-dark)}.footer__navigation{font-size:1.4rem;color:gray}.footer__list{list-style:none;display:flex;justify-content:center}.footer__item{margin:0 2rem}.footer__link{text-decoration:none;color:inherit}.footer__link:hover{color:#000}.footer__title{margin-top:5rem;display:flex;justify-content:center}.content{margin-top:5rem;display:flex;justify-content:center;min-height:90vh}.row{max-width:114rem;margin:0 auto}.row:not(:last-child){margin-bottom:8rem}.row::after{content:"";display:table;clear:both}.row [class^=col-]{float:left}.row [class^=col-]:not(:last-child){margin-right:6rem}.row .col-1-of-2{width:calc((100% - 6rem)/2)}.row .col-1-of-3{width:calc((100% - 2 * 6rem)/3)}.row .col-2-of-3{width:calc(\n      2 * ((100% - 2 * 6rem) / 3) + 6rem\n    )}.row .col-1-of-4{width:calc((100% - 3 * 6rem)/4)}.row .col-2-of-4{width:calc(\n      2 * ((100% - 3 * 6rem) / 4) + 6rem\n    )}.row .col-3-of-4{width:calc(\n      3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem\n    )}',
            "",
            {
              version: 3,
              sources: [
                "webpack://./src/styles/base/_base.scss",
                "webpack://./src/styles/components/_header.scss",
                "webpack://./src/styles/layout/_header.scss",
                "webpack://./src/styles/layout/_footer.scss",
                "webpack://./src/styles/layout/_main.scss",
                "webpack://./src/styles/layout/_grid.scss",
                "webpack://./src/styles/abstracts/_variables.scss",
                "webpack://./src/styles/abstracts/_mixins.scss",
              ],
              names: [],
              mappings:
                "AAEA,MACE,wBAAA,CACA,6BAAA,CAGF,EACE,QAAA,CACA,SAAA,CAGF,qBAGE,kBAAA,CAGF,KACE,qBAAA,CACA,eAAA,CAGF,KACE,+BAAA,CACA,eAAA,CACA,eAAA,CACA,UAAA,CACA,kGAAA,CAKA,qBAAA,CACA,2BAAA,CACA,gBAAA,CAGF,YACE,sBAAA,CACA,UAAA,CCxCF,MACE,cAAA,CACA,gBAAA,CAGF,UACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CAEA,YACE,cAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CAGF,kBACE,0CAAA,CAGF,oBACE,iBAAA,CAGF,gBACE,cAAA,CACA,aAAA,CACA,SAAA,CAIJ,MACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,MAAA,CACA,QAAA,CACA,qBAAA,CAEA,YACE,aAAA,CACA,eAAA,CACA,WAAA,CACA,oBACE,UAAA,CACA,0CAAA,CAGJ,YACE,oBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIJ,QACE,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eACE,mBAAA,CACA,iBAAA,CACA,aAAA,CACA,qCAAA,CACA,WAAA,CACA,kBAAA,CACA,mBAAA,CACA,SAAA,CACA,kBAAA,CACA,qBAAA,CAEA,qBACE,YAAA,CACA,UAAA,CAGF,0CACE,eAAA,CACA,UAAA,CACA,gDACE,UAAA,CAKN,qCACE,qCAAA,CAGF,gBACE,WAAA,CACA,qCAAA,CACA,sBACE,YAAA,CAEF,uBACE,yBAAA,CAIJ,cACE,WAAA,CACA,UAAA,CACA,SAAA,CC9GJ,QACE,gBAAA,CACA,cAAA,CACA,qCAAA,CACA,uCAAA,CACA,cAAA,CACA,6BAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CCVF,QACE,cAAA,CACA,eAAA,CACA,qBAAA,CACA,qCAAA,CACA,oCAAA,CAEA,oBACE,gBAAA,CACA,UAAA,CAGF,cACE,eAAA,CACA,YAAA,CACA,sBAAA,CAGF,cACE,aAAA,CAGF,cACE,oBAAA,CACA,aAAA,CACA,oBACE,UAAA,CAIJ,eACE,eAAA,CACA,YAAA,CACA,sBAAA,CCjCJ,SACE,eAAA,CACA,YAAA,CACA,sBAAA,CACA,eAAA,CCJF,KACE,gBAAA,CACA,aAAA,CAEA,sBACE,kBCHc,CCDhB,YACE,UAAA,CACA,aAAA,CACA,UAAA,CFMF,mBACE,UAAA,CAEA,oCACE,iBCXc,CDelB,iBACE,2BAAA,CAGF,iBACE,+BAAA,CAGF,iBACE;;KAAA,CAKF,iBACE,+BAAA,CAGF,iBACE;;KAAA,CAKF,iBACE;;KAAA",
              sourcesContent: [
                '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");\r\n\r\n:root {\r\n  --color-primary: #f7f7f7;\r\n  --color-primary-dark: #f2f2f2;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: "Roboto", sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.6;\r\n  color: black;\r\n  background-image: linear-gradient(\r\n    to right bottom,\r\n    var(--color-primary),\r\n    var(--color-primary-dark)\r\n  );\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n}\r\n\r\n::selection {\r\n  background-color: green;\r\n  color: white;\r\n}\r\n',
                ".logo {\r\n  height: 3.25rem;\r\n  margin-left: 3rem;\r\n}\r\n\r\n.user-nav {\r\n  margin-right: 3rem;\r\n  display: flex;\r\n  align-items: center;\r\n  align-self: stretch;\r\n\r\n  & > * {\r\n    padding: 0 2rem;\r\n    cursor: pointer;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n  }\r\n\r\n  & > *:hover {\r\n    background-color: var(--color-primary-dark);\r\n  }\r\n\r\n  &__icon-box {\r\n    position: relative;\r\n  }\r\n\r\n  &__icon {\r\n    height: 2.25rem;\r\n    width: 2.25rem;\r\n    fill: gray;\r\n  }\r\n}\r\n\r\n.menu {\r\n  color: gray;\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 100%;\r\n  background-color: white;\r\n\r\n  &__list {\r\n    display: block;\r\n    list-style: none;\r\n    margin: 10px;\r\n    & > *:hover {\r\n      color: black;\r\n      background-color: var(--color-primary-dark);\r\n    }\r\n  }\r\n  &__item {\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.search {\r\n  flex: 0 0 40%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  &__input {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    color: inherit;\r\n    background-color: var(--color-primary);\r\n    border: none;\r\n    padding: 0.7rem 2rem;\r\n    border-radius: 100px;\r\n    width: 90%;\r\n    transition: all 0.2s;\r\n    margin-right: -3.25rem;\r\n\r\n    &:focus {\r\n      outline: none;\r\n      width: 100%;\r\n    }\r\n\r\n    &::-webkit-input-placeholder {\r\n      font-weight: 100;\r\n      color: gray;\r\n      &:focus {\r\n        color: black;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__input:focus + &__button {\r\n    background-color: var(--color-primary);\r\n  }\r\n\r\n  &__button {\r\n    border: none;\r\n    background-color: var(--color-primary);\r\n    &:focus {\r\n      outline: none;\r\n    }\r\n    &:active {\r\n      transform: translateY(2px);\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    height: 2rem;\r\n    width: 2rem;\r\n    fill: grey;\r\n  }\r\n}\r\n",
                ".header {\r\n  font-size: 1.4rem;\r\n  margin: 5em 5em;\r\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.1);\r\n  border-bottom: var(--color-primary-dark);\r\n  min-height: 8em;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n",
                ".footer {\r\n  padding: 2rem 0;\r\n  min-height: 20vh;\r\n  background-color: white;\r\n  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.1);\r\n  border-top: var(--color-primary-dark);\r\n\r\n  &__navigation {\r\n    font-size: 1.4rem;\r\n    color: gray;\r\n  }\r\n\r\n  &__list {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__item {\r\n    margin: 0 2rem;\r\n  }\r\n\r\n  &__link {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    &:hover {\r\n      color: black;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    margin-top: 5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n",
                ".content {\r\n  margin-top: 5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  min-height: 90vh;\r\n}\r\n",
                '.row {\r\n  max-width: $grid-width;\r\n  margin: 0 auto;\r\n\r\n  &:not(:last-child) {\r\n    margin-bottom: $gutter-vertical;\r\n  }\r\n\r\n  @include clearfix;\r\n\r\n  [class^="col-"] {\r\n    float: left;\r\n\r\n    &:not(:last-child) {\r\n      margin-right: $gutter-horizontal;\r\n    }\r\n  }\r\n\r\n  .col-1-of-2 {\r\n    width: calc((100% - #{$gutter-horizontal}) / 2);\r\n  }\r\n\r\n  .col-1-of-3 {\r\n    width: calc((100% - 2 * #{$gutter-horizontal}) / 3);\r\n  }\r\n\r\n  .col-2-of-3 {\r\n    width: calc(\r\n      2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal}\r\n    );\r\n  }\r\n\r\n  .col-1-of-4 {\r\n    width: calc((100% - 3 * #{$gutter-horizontal}) / 4);\r\n  }\r\n\r\n  .col-2-of-4 {\r\n    width: calc(\r\n      2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal}\r\n    );\r\n  }\r\n\r\n  .col-3-of-4 {\r\n    width: calc(\r\n      3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + 2 * #{$gutter-horizontal}\r\n    );\r\n  }\r\n}\r\n',
                "// GRID\r\n$grid-width: 114rem;\r\n$gutter-vertical: 8rem;\r\n$gutter-horizontal: 6rem;\r\n",
                '@mixin clearfix {\r\n  &::after {\r\n    content: "";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n}\r\n',
              ],
              sourceRoot: "",
            },
          ]);
        const a = i;
      },
      645: (r) => {
        r.exports = function (r) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  t = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (e += r(n)),
                  t && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (r, e, t, o, A) {
              "string" == typeof r && (r = [[null, r, void 0]]);
              var i = {};
              if (t)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (i[c] = !0);
                }
              for (var s = 0; s < r.length; s++) {
                var l = [].concat(r[s]);
                (t && i[l[0]]) ||
                  (void 0 !== A &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = A)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      537: (r) => {
        r.exports = function (r) {
          var n = r[1],
            e = r[3];
          if (!e) return n;
          if ("function" == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  t
                ),
              A = "/*# ".concat(o, " */"),
              i = e.sources.map(function (r) {
                return "/*# sourceURL="
                  .concat(e.sourceRoot || "")
                  .concat(r, " */");
              });
            return [n].concat(i).concat([A]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (r) => {
        var n = [];
        function e(r) {
          for (var e = -1, t = 0; t < n.length; t++)
            if (n[t].identifier === r) {
              e = t;
              break;
            }
          return e;
        }
        function t(r, t) {
          for (var A = {}, i = [], a = 0; a < r.length; a++) {
            var c = r[a],
              s = t.base ? c[0] + t.base : c[0],
              l = A[s] || 0,
              C = "".concat(s, " ").concat(l);
            A[s] = l + 1;
            var m = e(C),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== m) n[m].references++, n[m].updater(u);
            else {
              var d = o(u, t);
              (t.byIndex = a),
                n.splice(a, 0, { identifier: C, updater: d, references: 1 });
            }
            i.push(C);
          }
          return i;
        }
        function o(r, n) {
          var e = n.domAPI(n);
          return (
            e.update(r),
            function (n) {
              if (n) {
                if (
                  n.css === r.css &&
                  n.media === r.media &&
                  n.sourceMap === r.sourceMap &&
                  n.supports === r.supports &&
                  n.layer === r.layer
                )
                  return;
                e.update((r = n));
              } else e.remove();
            }
          );
        }
        r.exports = function (r, o) {
          var A = t((r = r || []), (o = o || {}));
          return function (r) {
            r = r || [];
            for (var i = 0; i < A.length; i++) {
              var a = e(A[i]);
              n[a].references--;
            }
            for (var c = t(r, o), s = 0; s < A.length; s++) {
              var l = e(A[s]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            A = c;
          };
        };
      },
      569: (r) => {
        var n = {};
        r.exports = function (r, e) {
          var t = (function (r) {
            if (void 0 === n[r]) {
              var e = document.querySelector(r);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (r) {
                  e = null;
                }
              n[r] = e;
            }
            return n[r];
          })(r);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(e);
        };
      },
      216: (r) => {
        r.exports = function (r) {
          var n = document.createElement("style");
          return r.setAttributes(n, r.attributes), r.insert(n, r.options), n;
        };
      },
      565: (r, n, e) => {
        r.exports = function (r) {
          var n = e.nc;
          n && r.setAttribute("nonce", n);
        };
      },
      795: (r) => {
        r.exports = function (r) {
          var n = r.insertStyleElement(r);
          return {
            update: function (e) {
              !(function (r, n, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (t += e.css),
                  o && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var A = e.sourceMap;
                A &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
                      " */"
                    )),
                  n.styleTagTransform(t, r, n.options);
              })(n, r, e);
            },
            remove: function () {
              !(function (r) {
                if (null === r.parentNode) return !1;
                r.parentNode.removeChild(r);
              })(n);
            },
          };
        };
      },
      589: (r) => {
        r.exports = function (r, n) {
          if (n.styleSheet) n.styleSheet.cssText = r;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(r));
          }
        };
      },
    },
    f = {};
  function p(r) {
    var n = f[r];
    if (void 0 !== n) return n.exports;
    var e = (f[r] = { id: r, exports: {} });
    return d[r](e, e.exports, p), e.exports;
  }
  (p.n = (r) => {
    var n = r && r.__esModule ? () => r.default : () => r;
    return p.d(n, { a: n }), n;
  }),
    (p.d = (r, n) => {
      for (var e in n)
        p.o(n, e) &&
          !p.o(r, e) &&
          Object.defineProperty(r, e, { enumerable: !0, get: n[e] });
    }),
    (p.o = (r, n) => Object.prototype.hasOwnProperty.call(r, n)),
    (p.nc = void 0),
    (r = p(379)),
    (n = p.n(r)),
    (e = p(795)),
    (t = p.n(e)),
    (o = p(569)),
    (A = p.n(o)),
    (i = p(565)),
    (a = p.n(i)),
    (c = p(216)),
    (s = p.n(c)),
    (l = p(589)),
    (C = p.n(l)),
    (m = p(144)),
    ((u = {}).styleTagTransform = C()),
    (u.setAttributes = a()),
    (u.insert = A().bind(null, "head")),
    (u.domAPI = t()),
    (u.insertStyleElement = s()),
    n()(m.Z, u),
    m.Z && m.Z.locals && m.Z.locals;
})();
//# sourceMappingURL=bundledad9da69e0c32d3bc9e4.js.map
