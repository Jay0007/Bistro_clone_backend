"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-18c16106"], {
  "297c": function c(t, e, a) {
    "use strict";

    a("a9e3");
    var s = a("2b0e"),
        r = a("37c6");
    e["a"] = s["a"].extend().extend({
      name: "loadable",
      props: {
        loading: {
          type: [Boolean, String],
          "default": !1
        },
        loaderHeight: {
          type: [Number, String],
          "default": 2
        }
      },
      methods: {
        genProgress: function genProgress() {
          return !1 === this.loading ? null : this.$slots.progress || this.$createElement(r["a"], {
            props: {
              absolute: !0,
              color: !0 === this.loading || "" === this.loading ? this.color || "primary" : this.loading,
              height: this.loaderHeight,
              indeterminate: !0
            }
          });
        }
      }
    });
  },
  "615b": function b(t, e, a) {},
  "9f9a": function f9a(t, e, a) {
    "use strict";

    a.r(e);

    var s = function s() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("v-container", [a("v-row", [a("v-col", {
        staticClass: "pb-0",
        attrs: {
          cols: "12"
        }
      }, [a("p", {
        staticClass: "text-h4",
        staticStyle: {
          color: "#E0CF5E"
        }
      }, [t._v("How do you want to order ?")])]), a("v-col", {
        staticClass: "align-center py-0 my-0",
        attrs: {
          cols: "12"
        }
      }, [a("v-btn", {
        staticClass: "px-0 back_menu",
        attrs: {
          ripple: !1,
          link: "",
          text: ""
        }
      }, [a("v-icon", {
        staticClass: "mr-3 mt-0",
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [t._v("mdi-chevron-left")]), a("span", {
        staticClass: "text-h6 text-capitalize font-weight-bold text-decoration-underline"
      }, [t._v("Back To Menu")])], 1)], 1), a("v-col", {
        attrs: {
          cols: "6"
        }
      }, [a("v-card", {
        staticClass: "delivery_card d-flex align-center",
        attrs: {
          outlined: "",
          to: "/order/delivery"
        }
      }, [a("v-row", {
        staticClass: "align-center",
        attrs: {
          align: "center"
        }
      }, [a("v-col", {
        attrs: {
          cols: "4",
          align: "center",
          justify: "center"
        }
      }, [a("v-icon", {
        staticClass: "delivery_icon",
        attrs: {
          color: "#E0CF5E",
          size: "90"
        }
      }, [t._v("mdi-map-marker-radius")])], 1), a("v-col", [a("div", {
        staticClass: "text-h4"
      }, [t._v("Delivery")]), a("div", [t._v("I want to order for delivery")])])], 1)], 1)], 1), a("v-col", {
        attrs: {
          cols: "6"
        }
      }, [a("v-card", {
        staticClass: "pickup_card d-flex align-center",
        attrs: {
          outlined: ""
        },
        on: {
          click: t.pickup
        }
      }, [a("v-row", {
        staticClass: "align-center"
      }, [a("v-col", {
        attrs: {
          cols: "4",
          align: "center",
          justify: "center"
        }
      }, [a("v-icon", {
        attrs: {
          color: "#E0CF5E",
          size: "90"
        }
      }, [t._v("mdi-map-marker-radius")])], 1), a("v-col", [a("div", {
        staticClass: "text-h4"
      }, [t._v("Pick Up")]), a("div", [t._v("I want to pick up my order")])])], 1)], 1)], 1)], 1)], 1);
    },
        r = [],
        i = {
      data: function data() {
        return {};
      },
      methods: {
        pickup: function pickup() {
          this.$store.commit("pickup_address", {
            type: "Pickup",
            house: "118",
            street: "huntington court road",
            city: "thunder bay",
            state: "ontario",
            pincode: "P7C2B6"
          }), window.localStorage.setItem("location", JSON.stringify(this.$store.state.address)), this.$router.push("/order/cart");
        }
      },
      computed: {}
    },
        o = i,
        n = (a("d19a"), a("2877")),
        c = a("6544"),
        l = a.n(c),
        d = a("8336"),
        u = a("b0af"),
        v = a("62ad"),
        h = a("a523"),
        p = a("132d"),
        g = a("0fd9"),
        f = Object(n["a"])(o, s, r, !1, null, "7a7e4192", null);

    e["default"] = f.exports;
    l()(f, {
      VBtn: d["a"],
      VCard: u["a"],
      VCol: v["a"],
      VContainer: h["a"],
      VIcon: p["a"],
      VRow: g["a"]
    });
  },
  b0af: function b0af(t, e, a) {
    "use strict";

    var s = a("5530"),
        r = (a("a9e3"), a("0481"), a("615b"), a("10d2")),
        i = a("297c"),
        o = a("1c87"),
        n = a("58df");
    e["a"] = Object(n["a"])(i["a"], o["a"], r["a"]).extend({
      name: "v-card",
      props: {
        flat: Boolean,
        hover: Boolean,
        img: String,
        link: Boolean,
        loaderHeight: {
          type: [Number, String],
          "default": 4
        },
        raised: Boolean
      },
      computed: {
        classes: function classes() {
          return Object(s["a"])(Object(s["a"])({
            "v-card": !0
          }, o["a"].options.computed.classes.call(this)), {}, {
            "v-card--flat": this.flat,
            "v-card--hover": this.hover,
            "v-card--link": this.isClickable,
            "v-card--loading": this.loading,
            "v-card--disabled": this.disabled,
            "v-card--raised": this.raised
          }, r["a"].options.computed.classes.call(this));
        },
        styles: function styles() {
          var t = Object(s["a"])({}, r["a"].options.computed.styles.call(this));
          return this.img && (t.background = 'url("'.concat(this.img, '") center center / cover no-repeat')), t;
        }
      },
      methods: {
        genProgress: function genProgress() {
          var t = i["a"].options.methods.genProgress.call(this);
          return t ? this.$createElement("div", {
            staticClass: "v-card__progress",
            key: "progress"
          }, [t]) : null;
        }
      },
      render: function render(t) {
        var e = this.generateRouteLink(),
            a = e.tag,
            s = e.data;
        return s.style = this.styles, this.isClickable && (s.attrs = s.attrs || {}, s.attrs.tabindex = 0), t(a, this.setBackgroundColor(this.color, s), [this.genProgress(), this.$slots["default"]]);
      }
    });
  },
  ced6: function ced6(t, e, a) {},
  d19a: function d19a(t, e, a) {
    "use strict";

    a("ced6");
  }
}]);