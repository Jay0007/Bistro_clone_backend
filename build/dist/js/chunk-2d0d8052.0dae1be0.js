"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0d8052"], {
  "78fa": function fa(t, e, a) {
    "use strict";

    a.r(e);

    var s = function s() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("v-container", {
        staticClass: "pa-0",
        attrs: {
          "fill-height": ""
        }
      }, [a("v-row", {
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [a("v-card", {
        staticClass: "pa-4",
        attrs: {
          align: "center",
          outlined: ""
        }
      }, [a("v-row", {
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [a("v-col", {
        staticClass: "pa-0",
        attrs: {
          cols: "5"
        }
      }, [a("div", {
        staticClass: "display-1 text--primary"
      }, [a("v-icon", {
        staticClass: "pr-3",
        attrs: {
          color: "primary",
          large: ""
        }
      }, [t._v("mdi-account")]), t._v("Sign Up ")], 1)]), a("v-col", {
        attrs: {
          cols: "7"
        }
      }, [a("v-card", {
        attrs: {
          flat: ""
        }
      }, [a("v-card-text", [a("v-form", {
        nativeOn: {
          keyup: function keyup(e) {
            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.register(e);
          }
        },
        model: {
          value: t.validx,
          callback: function callback(e) {
            t.validx = e;
          },
          expression: "validx"
        }
      }, [a("div", {
        staticClass: "user_login text-xs-left"
      }, [a("v-text-field", {
        attrs: {
          label: "Email*",
          rules: t.emailRules,
          required: ""
        },
        model: {
          value: t.email,
          callback: function callback(e) {
            t.email = e;
          },
          expression: "email"
        }
      }), a("v-text-field", {
        staticClass: "mt-4",
        attrs: {
          "append-icon": t.show1 ? "mdi-eye" : "mdi-eye-off",
          type: t.show1 ? "text" : "password",
          rules: t.passwordRules,
          label: "Password*",
          required: ""
        },
        on: {
          "click:append": function clickAppend(e) {
            t.show1 = !t.show1;
          }
        },
        model: {
          value: t.password,
          callback: function callback(e) {
            t.password = e;
          },
          expression: "password"
        }
      })], 1), a("v-btn", {
        staticClass: " white--text font-weight-bold",
        attrs: {
          disabled: !t.validx,
          loading: t.loading,
          rounded: "",
          outlined: "",
          color: "primary"
        },
        on: {
          click: t.register
        }
      }, [t._v("register")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    },
        r = [],
        o = a("1da1"),
        n = (a("96cf"), a("bc3a")),
        i = a.n(n),
        l = {
      data: function data() {
        return {
          text: "Please, try again...",
          loading: !1,
          validx: !0,
          show1: !1,
          email: null,
          emailRules: [function (t) {
            return !!t || "Email is required";
          }, function (t) {
            return t && t.length >= 3 || "Email must be greater than 6 characters";
          }],
          password: null,
          passwordRules: [function (t) {
            return !!t || "Password is required";
          }, function (t) {
            return t && t.length >= 3 || "Password must have 5+ characters";
          }]
        };
      },
      methods: {
        register: function register() {
          var t = this;
          return Object(o["a"])(_regenerator["default"].mark(function e() {
            var a, s;
            return _regenerator["default"].wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    return t.loading = !0, a = {
                      email: t.email,
                      password: t.password
                    }, s = t, e.next = 5, i.a.post(s.$store.getters.getBaseUrl + "/user/register", a).then(function (t) {
                      console.log(t), "email already exist" === t.data ? (s.loading = !1, s.$store.commit("createSnackbar", {
                        color: "red",
                        content: t.data
                      })) : t.data.details ? (s.loading = !1, s.$store.commit("createSnackbar", {
                        color: "red",
                        content: t.data.details[0].message
                      })) : (s.loading = !1, s.$store.state.user.email = s.email, s.$store.dispatch("setTokenForUser", {
                        token: t.data
                      }).then(function () {
                        i.a.post(s.$store.getters.getBaseUrl + "/userdetails", s.$store.state.user).then(function (t) {
                          console.log("Userdetails post"), console.log(t), s.$store.state.loggedIn = !0;
                        })["catch"](function (t) {
                          console.log("Userdetails post problem"), console.log(t);
                        }), s.$store.state.dialog2 = !1;
                      }));
                    })["catch"](function (t) {
                      s.loading = !1, console.log(t), s.$store.commit("createSnackbar", {
                        color: "red",
                        content: t
                      });
                    });

                  case 5:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }))();
        },
        login2: function login2() {
          var t = this;
          this.loading = !0;
          var e = {
            subDomain: "srmist",
            email: this.email,
            password: this.password
          },
              a = this;
          i.a.post(this.$store.getters.getBaseUrl + "/auth/login", e).then(function (e) {
            !1 === e.data.success ? (a.$store.commit("createSnackbar", {
              color: "red",
              content: e.data.reason
            }), t.loading = !1) : (t.loading = !1, t.$store.commit("setTokenForUser", {
              token: e.data.data.token
            }).then(function (e) {
              console.log(e + "token already set"), t.$router.push({
                path: "/app/home"
              });
            }));
          })["catch"](function (t) {
            console.error(t), a.$store.commit("networkError");
          });
        }
      },
      computed: {
        valid: function valid() {
          return "" != this.email && "" != this.password;
        }
      }
    },
        c = l,
        d = a("2877"),
        u = a("6544"),
        m = a.n(u),
        p = a("8336"),
        g = a("b0af"),
        f = a("99d9"),
        h = a("62ad"),
        v = a("a523"),
        w = a("4bd4"),
        k = a("132d"),
        x = a("0fd9"),
        b = a("8654"),
        y = Object(d["a"])(c, s, r, !1, null, "6c498290", null);

    e["default"] = y.exports;
    m()(y, {
      VBtn: p["a"],
      VCard: g["a"],
      VCardText: f["b"],
      VCol: h["a"],
      VContainer: v["a"],
      VForm: w["a"],
      VIcon: k["a"],
      VRow: x["a"],
      VTextField: b["a"]
    });
  }
}]);