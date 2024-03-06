/*! api-component - 1.0.26 */
!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports["api-component"] = n())
    : (e["api-component"] = n());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var e = {
          d: (n, t) => {
            for (var a in t)
              e.o(t, a) &&
                !e.o(n, a) &&
                Object.defineProperty(n, a, { enumerable: !0, get: t[a] });
          },
          o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
          r: (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          },
        },
        n = {};
      e.r(n), e.d(n, { default: () => H });
      var t = "form",
        a = "input",
        i = "button",
        r = "label",
        o = "text",
        l = "div",
        s = "hiddenDiv",
        c = "navbar",
        d = "hero",
        p = "wrapper",
        u = "social";
      var m =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (m =
                Object.assign ||
                function (e) {
                  for (var n, t = 1, a = arguments.length; t < a; t++)
                    for (var i in (n = arguments[t]))
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  return e;
                }),
              m.apply(this, arguments)
            );
          },
        v =
          (void 0 && (void 0).__awaiter) ||
          function (e, n, t, a) {
            return new (t || (t = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(a["throw"](e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? i(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(o, l);
              }
              s((a = a.apply(e, n || [])).next());
            });
          },
        h =
          (void 0 && (void 0).__generator) ||
          function (e, n) {
            var t,
              a,
              i,
              r,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function l(l) {
              return function (s) {
                return (function (l) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), l[0] && (o = 0)), o; )
                    try {
                      if (
                        ((t = 1),
                        a &&
                          (i =
                            2 & l[0]
                              ? a["return"]
                              : l[0]
                              ? a["throw"] ||
                                ((i = a["return"]) && i.call(a), 0)
                              : a.next) &&
                          !(i = i.call(a, l[1])).done)
                      )
                        return i;
                      switch (((a = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                        case 0:
                        case 1:
                          i = l;
                          break;
                        case 4:
                          return o.label++, { value: l[1], done: !1 };
                        case 5:
                          o.label++, (a = l[1]), (l = [0]);
                          continue;
                        case 7:
                          (l = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = o.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== l[0] && 2 !== l[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === l[0] &&
                            (!i || (l[1] > i[0] && l[1] < i[3]))
                          ) {
                            o.label = l[1];
                            break;
                          }
                          if (6 === l[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = l);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(l);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      l = n.call(e, o);
                    } catch (e) {
                      (l = [6, e]), (a = 0);
                    } finally {
                      t = i = 0;
                    }
                  if (5 & l[0]) throw l[1];
                  return { value: l[0] ? l[1] : void 0, done: !0 };
                })([l, s]);
              };
            }
          };
      var g =
          (void 0 && (void 0).__awaiter) ||
          function (e, n, t, a) {
            return new (t || (t = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(a["throw"](e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? i(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(o, l);
              }
              s((a = a.apply(e, n || [])).next());
            });
          },
        b =
          (void 0 && (void 0).__generator) ||
          function (e, n) {
            var t,
              a,
              i,
              r,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function l(l) {
              return function (s) {
                return (function (l) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), l[0] && (o = 0)), o; )
                    try {
                      if (
                        ((t = 1),
                        a &&
                          (i =
                            2 & l[0]
                              ? a["return"]
                              : l[0]
                              ? a["throw"] ||
                                ((i = a["return"]) && i.call(a), 0)
                              : a.next) &&
                          !(i = i.call(a, l[1])).done)
                      )
                        return i;
                      switch (((a = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                        case 0:
                        case 1:
                          i = l;
                          break;
                        case 4:
                          return o.label++, { value: l[1], done: !1 };
                        case 5:
                          o.label++, (a = l[1]), (l = [0]);
                          continue;
                        case 7:
                          (l = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = o.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== l[0] && 2 !== l[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === l[0] &&
                            (!i || (l[1] > i[0] && l[1] < i[3]))
                          ) {
                            o.label = l[1];
                            break;
                          }
                          if (6 === l[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = l);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(l);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      l = n.call(e, o);
                    } catch (e) {
                      (l = [6, e]), (a = 0);
                    } finally {
                      t = i = 0;
                    }
                  if (5 & l[0]) throw l[1];
                  return { value: l[0] ? l[1] : void 0, done: !0 };
                })([l, s]);
              };
            }
          };
      const f = function (e, n) {
        e.Panels.addButton("options", {
          id: "publishSite",
          active: !0,
          className: "btn-toggle-borders",
          label: "Save as Template",
          command: "sw-visibility",
        }),
          e.Panels.removeButton("options", "export-template"),
          e.Panels.getButton("options", "publishSite").on(
            "change",
            function () {
              return g(void 0, void 0, void 0, function () {
                var n, t, a, i, r, o, l, s, c, d;
                return b(this, function (p) {
                  return (
                    (n = e.getHtml()),
                    (t = e.getCss()),
                    (a = e.getProjectData()),
                    (i = n
                      .replace(/<body[^>]*>/, "")
                      .replace(/<\/body\s*>/, "")),
                    (r = document.location.href),
                    (o = new URL(r)),
                    (l = new URLSearchParams(o.search)),
                    (s = l.get("id")),
                    (c = {
                      id: s,
                      html: "".concat(i),
                      css: "".concat(t),
                      projectData: a,
                    }),
                    console.log(c),
                    (d =
                      "https://chepapest.com/api/dev/user/landing-page/".concat(
                        s,
                        "/save"
                      )),
                    (function () {
                      g(this, void 0, void 0, function () {
                        var n;
                        return b(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [
                                4,
                                fetch(d, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(c),
                                }),
                              ];
                            case 1:
                              return [4, t.sent().json()];
                            case 2:
                              return (
                                (n = t.sent()),
                                console.log(n),
                                n.project_data
                                  ? (e.Modal.open({
                                      title: "Your Page has been Published",
                                      content: "Thank you",
                                    }),
                                    e.loadProjectData(n.project_data),
                                    localStorage.clear())
                                  : e.Modal.open({
                                      title: "There was a server side error!",
                                    }),
                                console.log(n),
                                [2]
                              );
                          }
                        });
                      });
                    })(),
                    [2]
                  );
                });
              });
            }
          );
      };
      var y =
          (void 0 && (void 0).__awaiter) ||
          function (e, n, t, a) {
            return new (t || (t = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(a["throw"](e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? i(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(o, l);
              }
              s((a = a.apply(e, n || [])).next());
            });
          },
        w =
          (void 0 && (void 0).__generator) ||
          function (e, n) {
            var t,
              a,
              i,
              r,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function l(l) {
              return function (s) {
                return (function (l) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), l[0] && (o = 0)), o; )
                    try {
                      if (
                        ((t = 1),
                        a &&
                          (i =
                            2 & l[0]
                              ? a["return"]
                              : l[0]
                              ? a["throw"] ||
                                ((i = a["return"]) && i.call(a), 0)
                              : a.next) &&
                          !(i = i.call(a, l[1])).done)
                      )
                        return i;
                      switch (((a = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                        case 0:
                        case 1:
                          i = l;
                          break;
                        case 4:
                          return o.label++, { value: l[1], done: !1 };
                        case 5:
                          o.label++, (a = l[1]), (l = [0]);
                          continue;
                        case 7:
                          (l = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = o.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== l[0] && 2 !== l[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === l[0] &&
                            (!i || (l[1] > i[0] && l[1] < i[3]))
                          ) {
                            o.label = l[1];
                            break;
                          }
                          if (6 === l[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = l);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(l);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      l = n.call(e, o);
                    } catch (e) {
                      (l = [6, e]), (a = 0);
                    } finally {
                      t = i = 0;
                    }
                  if (5 & l[0]) throw l[1];
                  return { value: l[0] ? l[1] : void 0, done: !0 };
                })([l, s]);
              };
            }
          };
      var x =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (x =
                Object.assign ||
                function (e) {
                  for (var n, t = 1, a = arguments.length; t < a; t++)
                    for (var i in (n = arguments[t]))
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  return e;
                }),
              x.apply(this, arguments)
            );
          },
        V =
          (void 0 && (void 0).__awaiter) ||
          function (e, n, t, a) {
            return new (t || (t = Promise))(function (i, r) {
              function o(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  s(a["throw"](e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                var n;
                e.done
                  ? i(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(o, l);
              }
              s((a = a.apply(e, n || [])).next());
            });
          },
        C =
          (void 0 && (void 0).__generator) ||
          function (e, n) {
            var t,
              a,
              i,
              r,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function l(l) {
              return function (s) {
                return (function (l) {
                  if (t) throw new TypeError("Generator is already executing.");
                  for (; r && ((r = 0), l[0] && (o = 0)), o; )
                    try {
                      if (
                        ((t = 1),
                        a &&
                          (i =
                            2 & l[0]
                              ? a["return"]
                              : l[0]
                              ? a["throw"] ||
                                ((i = a["return"]) && i.call(a), 0)
                              : a.next) &&
                          !(i = i.call(a, l[1])).done)
                      )
                        return i;
                      switch (((a = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                        case 0:
                        case 1:
                          i = l;
                          break;
                        case 4:
                          return o.label++, { value: l[1], done: !1 };
                        case 5:
                          o.label++, (a = l[1]), (l = [0]);
                          continue;
                        case 7:
                          (l = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = o.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== l[0] && 2 !== l[0]))
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === l[0] &&
                            (!i || (l[1] > i[0] && l[1] < i[3]))
                          ) {
                            o.label = l[1];
                            break;
                          }
                          if (6 === l[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = l);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(l);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      l = n.call(e, o);
                    } catch (e) {
                      (l = [6, e]), (a = 0);
                    } finally {
                      t = i = 0;
                    }
                  if (5 & l[0]) throw l[1];
                  return { value: l[0] ? l[1] : void 0, done: !0 };
                })([l, s]);
              };
            }
          };
      const H = function (e, n) {
        return (
          void 0 === n && (n = {}),
          V(void 0, void 0, void 0, function () {
            var g;
            return C(this, function (b) {
              return (
                (g = x(
                  {
                    blocks: ["productform"],
                    id: ["productform"],
                    label: ["Product Form"],
                    block: function () {
                      return {};
                    },
                    style: "",
                    styleAdditional: "",
                    classPrefix: "productform",
                    inlineCss: !0,
                    updateStyleManager: !0,
                    cellStyle: {
                      padding: "0",
                      margin: "0",
                      "vertical-align": "top",
                    },
                    tableStyle: {
                      height: "150px",
                      margin: "0 auto 10px auto",
                      padding: "5px 5px 5px 5px",
                      width: "100%",
                    },
                  },
                  n
                )),
                e.on("load", function () {
                  var n = document.location.href,
                    t = new URL(n),
                    a = new URLSearchParams(t.search).get("id");
                  !(function () {
                    V(this, void 0, void 0, function () {
                      var n, t;
                      return C(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return (
                              i.trys.push([0, 3, , 4]),
                              [
                                4,
                                fetch(
                                  "https://chepapest.com/api/dev/user/landing-page/".concat(
                                    a
                                  ),
                                  {
                                    method: "GET",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                ),
                              ]
                            );
                          case 1:
                            return [4, i.sent().json()];
                          case 2:
                            return (
                              (n = i.sent()).data
                                ? (e.setComponents(n.data.content),
                                  e.setStyle(n.data.css),
                                  localStorage.setItem(
                                    "gjsProject",
                                    n.data.project_data
                                  ))
                                : (e.setComponents(
                                    '<div class="cls">Start editing</div>'
                                  ),
                                  (t = localStorage.getItem("gjsProject")),
                                  e.loadProjectData(JSON.parse(t))),
                              [3, 4]
                            );
                          case 3:
                            return (
                              i.sent(),
                              e.Modal.open({
                                title: "There was some server side error",
                                content: "Sorry for inconvenience",
                              }),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  })();
                }),
                e.on("update", function () {
                  var n = e.getProjectData();
                  localStorage.setItem("gjsProject", JSON.stringify(n));
                }),
                (function (e, n) {
                  var c,
                    m = e.Components,
                    v = n.label,
                    h = n.classPrefix,
                    g = "".concat(t, "-container");
                  m.addType(t, {
                    view: {
                      onRender: function () {
                        c = this.model.attributes.selectedData;
                      },
                      events: {
                        submit: function (e) {
                          return e.preventDefault();
                        },
                      },
                    },
                    model: {
                      defaults: {
                        tagName: "form",
                        droppable: ":not(form)",
                        draggable: ":not(form)",
                        name: v,
                        attributes: {
                          class: "".concat(h, " ").concat(h, "-container"),
                          method: "post",
                          action: "https://chepapest.com/checkout",
                        },
                        traits: [{ type: t, name: "product" }],
                        components: { type: g, data: c },
                        styles: "\n          ."
                          .concat(
                            h,
                            " {\n            max-width: 50rem;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: rgb(223 223 223) 0px 6px 20px 7px;\n            margin: 1rem;\n            outline: none !important;\n            border: 2px solid #d9d9d9;\n\n          }\n\n          ."
                          )
                          .concat(
                            h,
                            "-container {\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 2rem;\n            margin-bottom: 2rem;\n            padding: 3rem;\n          }\n\n          @media only screen and (max-width: 600px) {\n            ."
                          )
                          .concat(
                            h,
                            "{\n              width: 90%;\n            }\n\n            ."
                          )
                          .concat(
                            h,
                            "-container {\n              padding: 0.3rem;\n              padding-bottom: 2rem;\n            }\n          }\n        "
                          ),
                      },
                      init: function () {
                        var e = this;
                        this.on("change:attributes:selectedData", function () {
                          var n,
                            t = e.getAttributes().selectedData,
                            a = m.getById("productId").view,
                            i = m.getById("productPrice").view,
                            r = m.getById("productQuantity").view;
                          (a.el.innerHTML = t.id),
                            (i.el.innerHTML = t.price),
                            (r.el.innerHTML = 1);
                          var o =
                              document.head.querySelector(
                                'meta[name="csrf-token"]'
                              ) || "{{ csrf_token() }}",
                            l =
                              null === (n = m.getById("token").view) ||
                              void 0 === n
                                ? void 0
                                : n.attr;
                          l
                            ? (l.value = o)
                            : console.error("Token input element not found");
                        });
                      },
                    },
                  }),
                    m.addType(o, {
                      isComponent: function (e) {
                        return "P" == e.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "p",
                          highlightable: !1,
                          attributes: { class: " ".concat(h, "-idTitle") },
                          styles:
                            n.style ||
                            "\n          .".concat(
                              h,
                              "-idTitle {\n            font-size: 2.5rem;\n            font-weight: 900;\n            margin-bottom: 0rem;\n            text-align: center;\n            width: 100%;\n          } \n          "
                            ),
                        },
                      },
                    }),
                    m.addType(r, {
                      isComponent: function (e) {
                        return "LABEL" == e.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "label",
                          droppable: !1,
                          highlightable: !1,
                          attributes: { class: "".concat(h, "-idLabel") },
                          styles:
                            n.style ||
                            "\n          .".concat(
                              h,
                              "-idLabel {\n            \n          } \n          "
                            ),
                        },
                      },
                    }),
                    m.addType(l, {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "div",
                          droppable: !1,
                          highlightable: !1,
                          attributes: { class: "".concat(h, "-inputDiv") },
                          styles:
                            n.style ||
                            "\n          ."
                              .concat(
                                h,
                                "-inputDiv {\n            display: flex;\n            gap: 2rem;\n            justify-content: space-between;\n            font-size: 1.2rem !important;\n            align-items: center;\n            width: 26rem;\n          }\n\n          \n          \n          @media only screen and (max-width: 600px) {\n            ."
                              )
                              .concat(
                                h,
                                "-inputDiv{\n              width: 100%;\n              font-size: 1rem;\n              flex-direction: column;\n              gap: 0.5rem;\n  \n            }\n          }\n          "
                              ),
                        },
                      },
                    }),
                    m.addType(s, {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "div",
                          droppable: !1,
                          highlightable: !1,
                          attributes: { class: "".concat(h, "-hiddenInput") },
                          styles:
                            n.style ||
                            "\n          .".concat(
                              h,
                              "-hiddenInput {\n            display: none;\n          }\n          "
                            ),
                        },
                      },
                    }),
                    m.addType(a, {
                      isComponent: function (e) {
                        return "INPUT" == e.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "input",
                          droppable: !1,
                          highlightable: !1,
                          attributes: {
                            type: "text",
                            class: "".concat(h, "-inputField"),
                          },
                          traits: [
                            { name: "name" },
                            { name: "placeholder" },
                            {
                              type: "select",
                              name: "type",
                              options: [{ value: "text" }],
                            },
                            { type: "checkbox", name: "required" },
                          ],
                          styles:
                            n.style ||
                            "\n          .".concat(
                              h,
                              "-inputField {\n            border: 2px solid #10101033;\n            padding: 0.5rem;\n            outline: none;\n            border-radius: 10px;\n          } \n          "
                            ),
                        },
                      },
                      extendFnView: ["updateAttributes"],
                      view: {
                        updateAttributes: function () {
                          this.el.setAttribute("autocomplete", "off");
                        },
                      },
                    }),
                    m.addType(i, {
                      extend: a,
                      isComponent: function (e) {
                        return "BUTTON" == e.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "button",
                          attributes: {
                            type: "submit",
                            value: "submit",
                            class: "".concat(h, "-inputBtn btn btn-success"),
                          },
                          text: "Submit Now",
                        },
                      },
                    }),
                    e.Components.addType(u, {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: { name: "Social Icons", tagName: "div" },
                      },
                    }),
                    m.addType(p, {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Wrapper",
                          tagName: "div",
                          attributes: {
                            style: "margin-bottom: 1rem; padding-bottom: 1rem;",
                          },
                        },
                      },
                    }),
                    m.addType(d, {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Hero Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("sect100", {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "1 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("sect50", {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "2 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("sect30", {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "3 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("sect37", {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "3/7 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("text", {
                      isComponent: function (e) {
                        return "P" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Text Sect",
                          tagName: "p",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("customer-review", {
                      isComponent: function (e) {
                        return "DIV" == e.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Editable  Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    m.addType("video", {
                      model: {
                        defaults: {
                          attributes: { class: "".concat(h, "-video") },
                          styles:
                            n.style ||
                            "\n            ."
                              .concat(
                                h,
                                "-video {\n              height: 350px;\n               width: 615px;\n               padding: 0.5rem;\n            }\n\n            @media only screen and (max-width: 600px) {\n              ."
                              )
                              .concat(
                                h,
                                "-video{\n                width: 100%;\n                height: 100%;\n              }\n            }\n            "
                              ),
                        },
                      },
                    });
                })(e, g),
                (function (e, n) {
                  v(void 0, void 0, void 0, function () {
                    var v, g, b, f, y, w, x, V, C, H, M;
                    return h(this, function (h) {
                      switch (h.label) {
                        case 0:
                          if (
                            ((v = n.block),
                            (g = n.label),
                            (b = n.id),
                            (f = function (t, a) {
                              var i;
                              (null === (i = n.blocks) || void 0 === i
                                ? void 0
                                : i.indexOf(t)) >= 0 &&
                                e.Blocks.add(
                                  t,
                                  m(m({ select: !0 }, a), n.block(t))
                                );
                            }),
                            !v)
                          )
                            return [3, 5];
                          (y = "https://chepapest.com/api/dev/products"),
                            (w = null),
                            (h.label = 1);
                        case 1:
                          return h.trys.push([1, 4, , 5]), [4, fetch(y)];
                        case 2:
                          if (!(x = h.sent()).ok)
                            throw new Error("Failed to fetch data");
                          return [4, x.json()];
                        case 3:
                          return (
                            (V = h.sent()),
                            (w = V.data),
                            f(
                              b[0],
                              m(
                                {
                                  media:
                                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
                                  label: g[0],
                                  category: "Extra",
                                  content: {
                                    type: t,
                                    data: w,
                                    data1: 1,
                                    components: [
                                      {
                                        type: l,
                                        components: [
                                          { type: o, components: "Order Form" },
                                        ],
                                      },
                                      {
                                        components: [
                                          {
                                            type: l,
                                            components: [
                                              {
                                                type: r,
                                                components: "Your Name:",
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter your Name",
                                                  name: "userName",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        components: [
                                          {
                                            type: l,
                                            components: [
                                              {
                                                type: r,
                                                components: "Phone Number:",
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter your Number",
                                                  name: "number",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        components: [
                                          {
                                            type: l,
                                            components: [
                                              {
                                                type: r,
                                                components: "Address:",
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter your Address",
                                                  name: "address",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        type: s,
                                        components: [
                                          {
                                            type: s,
                                            components: [
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "server",
                                                  name: "landingpage",
                                                  value: "true",
                                                },
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "token",
                                                  name: "_token",
                                                  value: "{{ csrf_token() }}",
                                                },
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "productId",
                                                },
                                                name: "productId",
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "productPrice",
                                                },
                                                name: "productPrice",
                                              },
                                              {
                                                type: a,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "productQuantity",
                                                },
                                                name: "productQuantity",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        components: [
                                          { type: i, components: "Submit" },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                v
                              )
                            ),
                            [3, 5]
                          );
                        case 4:
                          return (
                            (C = h.sent()),
                            console.error("Error in Fetching Data", C),
                            [3, 5]
                          );
                        case 5:
                          return (
                            e.BlockManager.add("link-block", {
                              label: "Link Block",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>\n    </svg>',
                              content: {
                                type: "link",
                                attributes: { class: "btn btn-warning" },
                                content:
                                  '<span class="fs-6 link-block-span">Link</span>',
                              },
                            }),
                            e.BlockManager.add("quote", {
                              label: "Quote",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />\n    </svg>',
                              content:
                                '<blockquote class="alert alert-primary py-3 m-2 quote-block">\n    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10"/></svg>\n\n      <span class="lead mx-2 quote-block-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</span>\n\n    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539m-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537"/></svg>\n      </blockquote>',
                            }),
                            e.BlockManager.add("h1-block", {
                              label: "Heading",
                              media:
                                '\n    <svg  class="bi bi-type-h1" viewBox="0 0 16 16">\n  <path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"/>\n</svg>\n    ',
                              content:
                                '<h1 class="gjs-droppable h1 text-center font-weight-bold h1-block">Put your title here</h1>\n      \n      <style>\n          .h1{\n            font-weight: 800;\n            font-size: 3rem;\n          }\n      </style>\n      \n      ',
                              category: "Basic",
                              attributes: { title: "Insert h1 block" },
                            }),
                            e.BlockManager.add("text-sect", {
                              label: "Text Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n    </svg>',
                              content:
                                '\n    <div class="shadow-lg p-3 mb-5 bg-body rounded text-sect-head">\n     <h1 class="heading text-sect-h1">Insert title here</h1>\n    <p class="paragraph text-sect-p">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n    </p></div>\n    ',
                            }),
                            e.BlockManager.add("image", {
                              label: "Image",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />\n    </svg>',
                              activate: !0,
                              content: {
                                type: "image",
                                style: { color: "black" },
                                attributes: { class: "img-fluid img-block" },
                              },
                            }),
                            e.BlockManager.add("sect100", {
                              label: "1 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>\n    </svg>',
                              attributes: { class: "gjs-droppable" },
                              content:
                                '\n    <div class="gjs-droppable container sect100Class"></div>\n\n      <style>\n      .sect100Class{\n        height: 10rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n      }\n      </style>\n    ',
                            }),
                            e.BlockManager.add("text", {
                              label: "Text",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />\n    </svg>',
                              attributes: { class: "gjs-droppable" },
                              content:
                                '\n    <p class= "gjs-droppable alert alert-success text-block-p">Insert your text here</p>\n    ',
                            }),
                            e.BlockManager.add("sect50", {
                              label: "1/2 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 23 24">\n      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>\n    </svg>',
                              content:
                                '\n    <div class="d-flex container text-center sect50Class gjs-droppable">\n  <div class=" gjs-droppable sect50Div1"></div>\n  <div class=" gjs-droppable sect50Div1"></div>\n</div>\n\n\n  <style>\n  .sect50Class{\n    height: 10rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  .sect50Div1{\n    width: 50%;\n    height: 100%;\n  }\n  </style>\n    ',
                            }),
                            e.BlockManager.add("sect30", {
                              label: "1/3 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 23 24">\n      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>\n    </svg>',
                              content:
                                '\n\n    <div class="d-flex container text-center sect30Class gjs-droppable">\n    <div class=" gjs-droppable sect30Div1"></div>\n    <div class=" gjs-droppable sect30Div1"></div>\n    <div class=" gjs-droppable sect30Div1"></div>\n  </div>\n\n      <style>\n      .sect30Class{\n        height: 10rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n      }\n      .sect30Div1{\n        width: 50%;\n        height: 100%;\n      }\n      </style>\n    ',
                            }),
                            e.BlockManager.add("sect37", {
                              label: "3/7 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>\n    </svg>',
                              content:
                                '\n    <div class="d-flex container text-center sect37Class gjs-droppable">\n    <div class=" gjs-droppable sect37Div1"></div>\n    <div class=" gjs-droppable sect37Div2"></div>\n  </div>\n\n  <style>\n      .sect37Class{\n        height: 10rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n      }\n      .sect37Div1{\n        width: 30%;\n        height: 100%;\n      }\n      .sect37Div2{\n        width: 70%;\n        height: 100%;\n      }\n      </style>\n    ',
                            }),
                            e.BlockManager.add("customer-review", {
                              label: "Reviews",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>\n    </svg>',
                              content:
                                '\n    <section class="customer-review">\n    <div class="container py-5 customer-review-container-div">\n      \x3c!-- head  --\x3e\n      <div class="row d-flex justify-content-center customer-review-flex-div">\n        <div class="col-md-10 col-xl-8 text-center customer-review-head-div">\n          <h3 class="fw-bold mb-4 customer-review-head-title">\n            Testimonials\n          </h3>\n          <p class="mb-4 pb-2 mb-md-5 pb-md-0 customer-review-head-desc">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,\n            error amet numquam iure provident voluptate esse quasi, veritatis\n            totam voluptas nostrum quisquam eum porro a pariatur veniam.\n          </p>\n        </div>\n      </div>\n\n      \x3c!-- body  --\x3e\n      <div class="row text-center customer-review-card-body">\n        <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">\n          <div class="card customer-review-card">\n            <div class="card-body py-4 mt-2 customer-review-inner-card">\n              <div\n                class="d-flex justify-content-center mb-4 customer-review-body-head"\n              >\n                <img\n                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"\n                  class="rounded-circle shadow-1-strong customer-review-head-img"\n                  width="100"\n                  height="100"\n                />\n              </div>\n              <h5 class="font-weight-bold customer-review-card-title">\n                Teresa May\n              </h5>\n              <h6\n                class="font-weight-bold my-3 customer-review-card-second-title"\n              >\n                Founder at ET Company\n              </h6>\n              <ul\n                class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n              >\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-half text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"\n                    />\n                  </svg>\n                </li>\n              </ul>\n              <p class="mb-2 customer-review-card-p">\n                <svg\n                  width="16"\n                  height="16"\n                  fill="currentColor"\n                  class="bi bi-quote text-white"\n                  viewBox="0 0 16 16"\n                >\n                  <path\n                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n                  /></svg\n                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Quod eos id officiis hic tenetur quae quaerat ad velit ab hic\n                tenetur.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">\n          <div class="card customer-review-card">\n            <div\n              class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"\n            >\n              <div\n                class="d-flex justify-content-center mb-4 customer-review-body-head"\n              >\n                <img\n                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"\n                  class="rounded-circle shadow-1-strong customer-review-head-img"\n                  width="100"\n                  height="100"\n                />\n              </div>\n              <h5 class="font-weight-bold customer-review-card-title">\n                Maggie McLoan\n              </h5>\n              <h6\n                class="font-weight-bold my-3 customer-review-card-second-title"\n              >\n                Photographer at Studio LA\n              </h6>\n              <ul\n                class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n              >\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n              </ul>\n              <p class="mb-2 customer-review-card-p">\n                <svg\n                  width="16"\n                  height="16"\n                  fill="currentColor"\n                  class="bi bi-quote text-white"\n                  viewBox="0 0 16 16"\n                >\n                  <path\n                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n                  /></svg\n                >Autem, totam debitis suscipit saepe sapiente magnam officiis\n                quaerat necessitatibus odio assumenda perferendis labore\n                laboriosam.\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class="col-md-4 mb-0 customer-review-card-container">\n          <div class="card customer-review-card">\n            <div\n              class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"\n            >\n              <div\n                class="d-flex justify-content-center mb-4 customer-review-body-head"\n              >\n                <img\n                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"\n                  class="rounded-circle shadow-1-strong customer-review-head-img"\n                  width="100"\n                  height="100"\n                />\n              </div>\n              <h5 class="font-weight-bold customer-review-card-title">\n                Alexa Horwitz\n              </h5>\n              <h6\n                class="font-weight-bold my-3 customer-review-card-second-title"\n              >\n                Front-end Developer in NY\n              </h6>\n              <ul\n                class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n              >\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-fill text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                    />\n                  </svg>\n                </li>\n                <li class="customer-review-card-star-li">\n                  <svg\n                    width="16"\n                    height="16"\n                    fill="currentColor"\n                    class="bi bi-star-half text-warning"\n                    viewBox="0 0 16 16"\n                  >\n                    <path\n                      d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"\n                    />\n                  </svg>\n                </li>\n              </ul>\n              <p class="mb-2 customer-review-card-p">\n                <svg\n                  width="16"\n                  height="16"\n                  fill="currentColor"\n                  class="bi bi-quote text-white"\n                  viewBox="0 0 16 16"\n                >\n                  <path\n                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n                  /></svg\n                >Cras sit amet nibh libero, in gravida nulla metus scelerisque\n                ante sollicitudin commodo cras purus odio, vestibulum in\n                tempus viverra turpis.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n<style>\n.customer-review {\n  color: #000;\n  background-color: #f3f2f2;\n}\n .card {\n  background-color: #303030;\n  color: #fff;\n }\n</style>\n\n    ',
                            }),
                            e.BlockManager.add("button", {
                              label: "Button",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />\n    </svg>',
                              content:
                                '<a class="btn btn-primary btn-block">Button</a>',
                            }),
                            e.BlockManager.add("divider", {
                              label: "Divider",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />\n    </svg>',
                              content:
                                '\n      <div class="divider-table container">\n      </div>\n\n\n      <style>\n        .divider-table {\n          width: 100%;\n          margin-top: 1rem;\n          margin-bottom: 1rem;\n          height: 0px;\n          border: 1px solid gray;\n        }\n      </style>\n    ',
                            }),
                            (H =
                              '\n  <div class="card grid-item-card">\n          <img class="card-img-top grid-item-img" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>\n            <div class="card-body  d-flex flex-column grid-item-card-body-col mt-4">\n                <h1 class="card-titl p-2 text-center grid-item-card-body-col-head">Title here</h1>\n                <p class="card-text p-2 text-center grid-item-card-body-col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n                <a href="#" class="btn btn-success p-2 grid-item-card-body-btn">Go somewhere</a>\n            </div>\n   </div>\n  \n  <style>\n    .grid-item-card{\n      width: 18rem;\n    }\n  </style>\n  '),
                            e.BlockManager.add("grid-items", {
                              label: "Grid Items",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>\n  </svg>',
                              content:
                                '\n    <div class="all-grid-items">\n    <div >'
                                  .concat(H, "</div>\n    <div>")
                                  .concat(H, "</div>\n    <div >")
                                  .concat(
                                    H,
                                    "</div>\n    </div>\n\n    <style>\n      .all-grid-items{\n        display: flex;\n        gap: 1rem;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    </style>\n  "
                                  ),
                            }),
                            (M =
                              '<div class="card list-container d-inline-flex">\n      <div class="list-item-cell list-inner-container">\n        <div class="list-item-content list-content">\n          <div class="list-item-row list-content-row">\n            <div class="list-cell-left list-content-cell-left">\n              <img class="card rounded list-content-cell-left-img" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>\n            </div>\n            <div class="list-cell-right list-content-cell-right">\n              <h1 class="card-title list-content-cell-title">Title here</h1>\n              <p class="card-text list-content-cell-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <style>\n    .list-inner-container{\n      margin: 13px;\n    }\n    .list-content{\n      margin: 13px;\n    }\n    .list-content-row{\n      display: flex;\n      gap: 1rem;\n    }\n    .3-list-content-cell-right{\n      margin-left: 10px;\n    }\n  </style>\n\n  '),
                            e.BlockManager.add("list-items", {
                              label: "List Items",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>\n  </svg>',
                              content: M + M,
                            }),
                            e.BlockManager.add(u, {
                              label: "socialGroup",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />\n  </svg>',
                              content:
                                '\n      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups social-container">\n        <div class="btn-group" role="group" aria-label="First group social-inner-div">\n              <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">\n              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>\n            </svg></a>\n              <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">\n              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>\n            </svg></a>\n              <a href="#" class="btn btn-primary social-icon-link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">\n              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>\n        </svg></a>\n        </div>\n</div>\n\n<style>\n  .btn-toolbar {\n    display: inline-block;\n  }\n  .social-icon-link{\n    margin: 12px;\n  }\n  .social-inner-div{\n    margin: 0.5rem;\n  }\n</style>\n      ',
                            }),
                            e.BlockManager.add(c, {
                              label: "Navbar",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />\n</svg>',
                              content:
                                '<nav class="navbar navbar-expand-lg bg-light">\n    <div class="container-fluid">\n      <a class="navbar-brand" href="#">Navbar</a>\n      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n      </button>\n      <div class="collapse navbar-collapse" id="navbarSupportedContent">\n        <ul class="navbar-nav justify-conter-center me-auto mb-2 mb-lg-0">\n          <li class="nav-item">\n            <a class="nav-link active" aria-current="page" href="#">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">About</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">Contact Us</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">Products</a>\n          </li>\n            </ul>\n          </li>\n        </ul>\n        <form class="d-flex" role="search">\n          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\n          <button class="btn btn-outline-success" type="submit">Search</button>\n        </form>\n      </div>\n    </div>\n  </nav>\n  ',
                            }),
                            e.BlockManager.add(d, {
                              label: "Hero Section",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n</svg>',
                              content:
                                '\n    <div class="hero-container">\n    <p class="hero-text">GO TO SPACE</p>\n    <p class="text-center text-white hero-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea libero animi neque officiis. Nemo corporis perspiciatis modi amet, saepe quaerat tempora deserunt consequuntur dolore libero recusandae ex, voluptate veniam?</p>\n    <a class="btn btn-outline-light btn-lg hero-btn" href="#" style="align-items: center;" >ORDER NOW</a>\n  </div>\n\n<style>\n    .hero-container {\n      background-image: url(\'https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg\');\n      background-color: #2a3448;\n      background-size: 600px 469px;\n      height: 469px;\n      padding: 100px 0px;\n      text-align: center;\n    }\n    .hero-text {\n      color: #ffffff;\n      font-family: Helvetica;\n      font-size: 45px;\n      line-height: 45px;\n      font-weight: 900;\n      padding: 20px;\n    }\n\n    @media only screen and (max-width: 600px) {\n      .hero {\n        display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      }\n    }\n\n  </style>\n  ',
                            }),
                            e.BlockManager.add(p, {
                              label: "Wrapper",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z" />\n</svg>',
                              content:
                                '<div class="wrapper shadow-lg p-3 mb-5 bg-body rounded">\n    <div class="wrapper-section-top">\n        <div class="wrapper-section-top-column">\n            <img class="rounded" src="https://via.placeholder.com/350x250/78c5d6/fff" style="padding: 0; width: 100%">\n        </div>\n    </div>\n    \n    <div class="wrapper-section-bottom">\n        <div class="wrapper-column">\n            <p class="wrapper-column-text fs-4">First line of text</p>\n            <hr class="wrapper-divider">\n            <p class="wrapper-column-text fs-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fugiat dolorum nemo voluptatibus corrupti nesciunt unde ut qui distinctio modi.</p>\n        </div>\n    </div>\n</div>\n  \n  <style>\n        .wrapper {\n            padding: 50px 30px;\n            width: 36rem;\n        }\n        .wrapper-section-top {\n            padding: 20px;\n        }\n        .wrapper-section-bottom {\n            padding: 20px;\n        }\n        .wrapper-column {\n            border: 1px solid #dddddd;\n        }\n        .wrapper-column-text {\n            padding: 20px;\n        }\n        .wrapper-divider {\n            border-width: 1px;\n            border-style: dashed;\n            border-color: lightgrey;\n            padding: 0 20px;\n        }\n\n        @media only screen and (max-width: 600px) {\n          .wrapper{\n            width: 100% !important;\n            padding: 1rem;\n          }\n          .wrapper-column-text{\n            padding: 1rem;\n          }\n\n          .wrapper-section-top {\n            padding: 1rem;\n        }\n        .wrapper-section-bottom {\n            padding: 1rem;\n        }\n        }\n    </style>\n  ',
                            }),
                            e.BlockManager.add("video", {
                              label: "Video",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-play-circle-fill" viewBox="0 0 16 16">\n    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>\n  </svg>',
                              content: { type: "video", src: "" },
                            }),
                            e.BlockManager.add("carousel", {
                              label: "Slider",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-sliders" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>\n  </svg>',
                              content:
                                '\n    <div id="carouselExample" class="carousel slide slideDivClass">\n    <div class="carousel-inner" style="">\n      <div class="carousel-item active">\n        <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n      </div>\n      <div class="carousel-item">\n        <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n      </div>\n      <div class="carousel-item">\n        <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n      </div>\n    </div>\n    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n      <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n      <span class="visually-hidden">Previous</span>\n    </button>\n    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">\n      <span class="carousel-control-next-icon" aria-hidden="true"></span>\n      <span class="visually-hidden">Next</span>\n    </button>\n  </div>\n\n  <style>\n  .slideDivClass{\n    width: 600px;\n  }\n.imgClass{\n  height: 366px;\n}\n  @media only screen and (max-width: 600px) {\n    .slideDivClass{\n      width: 100% !important;\n    }\n    .imgClass{\n      height: 15rem;\n    }\n  }\n  </style>\n    ',
                            }),
                            e.BlockManager.add("collapse", {
                              label: "Collapse",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-arrows-collapse" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8m7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0m-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0z"/>\n  </svg>',
                              content:
                                '\n    <p class="d-inline-flex gap-1">\n  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle element</a>\n</p>\n<div class="row rowClass">\n  <div class="col">\n    <div class="collapse multi-collapse" id="multiCollapseExample1">\n      <div class="card card-body">\n      <p class="fs-6"> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>\n      </div>\n    </div>\n  </div>\n</div>\n    ',
                            }),
                            e.BlockManager.add("tabs", {
                              label: "Tabs",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-segmented-nav" viewBox="0 0 16 16">\n    <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>\n  </svg>',
                              content:
                                '\n    <ul class="nav nav-tabs myTab" id="myTab" role="tablist">\n    <li class="nav-item" role="presentation">\n      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><p class="fs-6" style="margin-bottom: 0rem;">Home</p></button>\n    </li>\n    <li class="nav-item" role="presentation">\n      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Profile</p></button>\n    </li>\n    <li class="nav-item" role="presentation">\n      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Contact</p></button>\n    </li>\n  </ul>\n  <div class="tab-content border border-secondary myTab" id="myTabContent">\n    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">\n    <p class="fs-6" style="margin-bottom: 0rem;">\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis ullam expedita sed ipsum tenetur laudantium architecto cumque esse accusamus praesentium quas eos quasi repellendus, a rem. Hic, soluta iusto?\n    </p>\n    </div>\n    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">\n    <p class="fs-6" style="margin-bottom: 0rem;">\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, velit quasi. Reprehenderit, quidem quos. Quibusdam, in? Veniam quas obcaecati eligendi maxime perferendis, atque ducimus cumque, praesentium voluptas delectus laboriosam quis necessitatibus ratione perspiciatis voluptatibus iusto.\n    </p>\n    </div>\n    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">\n    <p class="fs-6" style="margin-bottom: 0rem;">\n    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, facilis. Rerum, ad? Facilis ipsa illum quaerat corrupti earum? Sequi, distinctio!\n    </p>\n    </div>\n  </div>\n\n  <style>\n  .myTab {\n    width: 25rem;\n  }\n  @media only screen and (max-width: 600px) {\n    .myTab{\n      width: 100% !important;\n    }\n  }\n  </style>\n    ',
                            }),
                            e.BlockManager.add("footer", {
                              label: "Footer",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-caret-up-square" viewBox="0 0 16 16">\n    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>\n  </svg>',
                              content:
                                '\n    <footer class="w-100 py-4 flex-shrink-0">\n    <div class="container py-4">\n        <div class="row">\n            <div class="col-lg-4 col-md-6">\n                <h5 class="h1 text-white">FB.</h5>\n                <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n                <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>\n            </div>\n            <div class="col-lg-2 col-md-6">\n                <h5 class="text-white mb-3">Quick links</h5>\n                <ul class="list-unstyled text-muted">\n                    <li><a href="#">Home</a></li>\n                    <li><a href="#">About</a></li>\n                    <li><a href="#">Get started</a></li>\n                    <li><a href="#">FAQ</a></li>\n                </ul>\n            </div>\n            <div class="col-lg-2 col-md-6">\n                <h5 class="text-white mb-3">Quick links</h5>\n                <ul class="list-unstyled text-muted">\n                    <li><a href="#">Home</a></li>\n                    <li><a href="#">About</a></li>\n                    <li><a href="#">Get started</a></li>\n                    <li><a href="#">FAQ</a></li>\n                </ul>\n            </div>\n            <div class="col-lg-4 col-md-6">\n                <h5 class="text-white mb-3">Newsletter</h5>\n                <p class="small  text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n            </div>\n        </div>\n    </div>\n</footer>\n\n  <style>\n\n  footer {\n    background: #212529;\n  }\n  a {\n    color: white;\n    text-decoration: none;\n    transition: all 0.3s;\n  }\n  \n  a:hover, a:focus {\n    text-decoration: none;\n  }\n  </style>\n    ',
                            }),
                            [2]
                          );
                      }
                    });
                  });
                })(e, g),
                (function (e) {
                  y(void 0, void 0, void 0, function () {
                    var n, a, i, r, o;
                    return w(this, function (l) {
                      switch (l.label) {
                        case 0:
                          (n = "https://chepapest.com/api/dev/products"),
                            (a = null),
                            (l.label = 1);
                        case 1:
                          return l.trys.push([1, 4, , 5]), [4, fetch(n)];
                        case 2:
                          if (!(i = l.sent()).ok)
                            throw new Error("Failed to fetch data");
                          return [4, i.json()];
                        case 3:
                          return (
                            (r = l.sent()),
                            (a = r.data),
                            e.TraitManager.addType(t, {
                              events: { keyup: "click" },
                              createInput: function (e) {
                                var n = e.trait.get("options") || [],
                                  t = n.length ? n : a,
                                  i = document.createElement("div");
                                return (
                                  (i.innerHTML =
                                    '\n          <select class="products">\n          <option value="" disabled selected>Select a Product</option>\n            '.concat(
                                      t
                                        .map(function (e) {
                                          return '<option value="'
                                            .concat(e.id, '">')
                                            .concat(e.title, "</option>");
                                        })
                                        .join(""),
                                      "\n          </select>\n        "
                                    )),
                                  i
                                    .querySelector(".products")
                                    .addEventListener("click", function (e) {
                                      var n =
                                        i.querySelector("option:first-child");
                                      e.target !== n ||
                                        n.dataset.clicked ||
                                        ((n.dataset.clicked = !0),
                                        (n.style.display = "none"),
                                        (n.disabled = !0));
                                    }),
                                  i
                                );
                              },
                              onEvent: function (e) {
                                for (
                                  var n,
                                    t = e.elInput,
                                    a = e.component,
                                    i = a.attributes.data,
                                    r = t.querySelector(".products"),
                                    o = 0;
                                  o < i.length;
                                  o++
                                )
                                  i[o].id == r.value && (n = i[o]);
                                a.addAttributes({ selectedData: n }),
                                  (a.attributes.selectedData = n);
                              },
                            }),
                            [3, 5]
                          );
                        case 4:
                          return (
                            (o = l.sent()),
                            console.log("Error in Fetching Data", o),
                            [3, 5]
                          );
                        case 5:
                          return [2];
                      }
                    });
                  });
                })(e),
                f(e),
                [2]
              );
            });
          })
        );
      };
      return n;
    })()
);
//# sourceMappingURL=index.js.map