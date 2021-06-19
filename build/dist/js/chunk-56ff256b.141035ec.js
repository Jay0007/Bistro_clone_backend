"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-56ff256b", "chunk-2d225f64", "chunk-2d0d8052"], {
  "13b3": function b3(t, e, i) {},
  "166a": function a(t, e, i) {},
  "1bfb": function bfb(t, e, i) {},
  "1e6c": function e6c(t, e, i) {
    "use strict";

    var s = i("9d65"),
        n = i("4e82"),
        a = i("c3f0"),
        r = i("80d2"),
        o = i("58df"),
        l = Object(o["a"])(s["a"], Object(n["a"])("windowGroup", "v-window-item", "v-window"));
    e["a"] = l.extend().extend().extend({
      name: "v-window-item",
      directives: {
        Touch: a["a"]
      },
      props: {
        disabled: Boolean,
        reverseTransition: {
          type: [Boolean, String],
          "default": void 0
        },
        transition: {
          type: [Boolean, String],
          "default": void 0
        },
        value: {
          required: !1
        }
      },
      data: function data() {
        return {
          isActive: !1,
          inTransition: !1
        };
      },
      computed: {
        classes: function classes() {
          return this.groupClasses;
        },
        computedTransition: function computedTransition() {
          return this.windowGroup.internalReverse ? "undefined" !== typeof this.reverseTransition ? this.reverseTransition || "" : this.windowGroup.computedTransition : "undefined" !== typeof this.transition ? this.transition || "" : this.windowGroup.computedTransition;
        }
      },
      methods: {
        genDefaultSlot: function genDefaultSlot() {
          return this.$slots["default"];
        },
        genWindowItem: function genWindowItem() {
          return this.$createElement("div", {
            staticClass: "v-window-item",
            "class": this.classes,
            directives: [{
              name: "show",
              value: this.isActive
            }],
            on: this.$listeners
          }, this.genDefaultSlot());
        },
        onAfterTransition: function onAfterTransition() {
          this.inTransition && (this.inTransition = !1, this.windowGroup.transitionCount > 0 && (this.windowGroup.transitionCount--, 0 === this.windowGroup.transitionCount && (this.windowGroup.transitionHeight = void 0)));
        },
        onBeforeTransition: function onBeforeTransition() {
          this.inTransition || (this.inTransition = !0, 0 === this.windowGroup.transitionCount && (this.windowGroup.transitionHeight = Object(r["f"])(this.windowGroup.$el.clientHeight)), this.windowGroup.transitionCount++);
        },
        onTransitionCancelled: function onTransitionCancelled() {
          this.onAfterTransition();
        },
        onEnter: function onEnter(t) {
          var e = this;
          this.inTransition && this.$nextTick(function () {
            e.computedTransition && e.inTransition && (e.windowGroup.transitionHeight = Object(r["f"])(t.clientHeight));
          });
        }
      },
      render: function render(t) {
        var e = this;
        return t("transition", {
          props: {
            name: this.computedTransition
          },
          on: {
            beforeEnter: this.onBeforeTransition,
            afterEnter: this.onAfterTransition,
            enterCancelled: this.onTransitionCancelled,
            beforeLeave: this.onBeforeTransition,
            afterLeave: this.onAfterTransition,
            leaveCancelled: this.onTransitionCancelled,
            enter: this.onEnter
          }
        }, this.showLazyContent(function () {
          return [e.genWindowItem()];
        }));
      }
    });
  },
  "210b": function b(t, e, i) {},
  "259c": function c(t, e, i) {
    "use strict";

    i("e1af");
  },
  3408: function _(t, e, i) {},
  3521: function _(t, e, i) {
    "use strict";

    i("a821");
  },
  "3ad0": function ad0(t, e, i) {},
  "604c": function c(t, e, i) {
    "use strict";

    i.d(e, "a", function () {
      return l;
    });
    var s = i("5530"),
        n = (i("a9e3"), i("4de4"), i("caad"), i("2532"), i("a434"), i("159b"), i("fb6a"), i("7db0"), i("c740"), i("166a"), i("a452")),
        a = i("7560"),
        r = i("58df"),
        o = i("d9bd"),
        l = Object(r["a"])(n["a"], a["a"]).extend({
      name: "base-item-group",
      props: {
        activeClass: {
          type: String,
          "default": "v-item--active"
        },
        mandatory: Boolean,
        max: {
          type: [Number, String],
          "default": null
        },
        multiple: Boolean,
        tag: {
          type: String,
          "default": "div"
        }
      },
      data: function data() {
        return {
          internalLazyValue: void 0 !== this.value ? this.value : this.multiple ? [] : void 0,
          items: []
        };
      },
      computed: {
        classes: function classes() {
          return Object(s["a"])({
            "v-item-group": !0
          }, this.themeClasses);
        },
        selectedIndex: function selectedIndex() {
          return this.selectedItem && this.items.indexOf(this.selectedItem) || -1;
        },
        selectedItem: function selectedItem() {
          if (!this.multiple) return this.selectedItems[0];
        },
        selectedItems: function selectedItems() {
          var t = this;
          return this.items.filter(function (e, i) {
            return t.toggleMethod(t.getValue(e, i));
          });
        },
        selectedValues: function selectedValues() {
          return null == this.internalValue ? [] : Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue];
        },
        toggleMethod: function toggleMethod() {
          var t = this;
          if (!this.multiple) return function (e) {
            return t.internalValue === e;
          };
          var e = this.internalValue;
          return Array.isArray(e) ? function (t) {
            return e.includes(t);
          } : function () {
            return !1;
          };
        }
      },
      watch: {
        internalValue: "updateItemsState",
        items: "updateItemsState"
      },
      created: function created() {
        this.multiple && !Array.isArray(this.internalValue) && Object(o["c"])("Model must be bound to an array if the multiple property is true.", this);
      },
      methods: {
        genData: function genData() {
          return {
            "class": this.classes
          };
        },
        getValue: function getValue(t, e) {
          return null == t.value || "" === t.value ? e : t.value;
        },
        onClick: function onClick(t) {
          this.updateInternalValue(this.getValue(t, this.items.indexOf(t)));
        },
        register: function register(t) {
          var e = this,
              i = this.items.push(t) - 1;
          t.$on("change", function () {
            return e.onClick(t);
          }), this.mandatory && !this.selectedValues.length && this.updateMandatory(), this.updateItem(t, i);
        },
        unregister: function unregister(t) {
          if (!this._isDestroyed) {
            var e = this.items.indexOf(t),
                i = this.getValue(t, e);
            this.items.splice(e, 1);
            var s = this.selectedValues.indexOf(i);

            if (!(s < 0)) {
              if (!this.mandatory) return this.updateInternalValue(i);
              this.multiple && Array.isArray(this.internalValue) ? this.internalValue = this.internalValue.filter(function (t) {
                return t !== i;
              }) : this.internalValue = void 0, this.selectedItems.length || this.updateMandatory(!0);
            }
          }
        },
        updateItem: function updateItem(t, e) {
          var i = this.getValue(t, e);
          t.isActive = this.toggleMethod(i);
        },
        updateItemsState: function updateItemsState() {
          var t = this;
          this.$nextTick(function () {
            if (t.mandatory && !t.selectedItems.length) return t.updateMandatory();
            t.items.forEach(t.updateItem);
          });
        },
        updateInternalValue: function updateInternalValue(t) {
          this.multiple ? this.updateMultiple(t) : this.updateSingle(t);
        },
        updateMandatory: function updateMandatory(t) {
          if (this.items.length) {
            var e = this.items.slice();
            t && e.reverse();
            var i = e.find(function (t) {
              return !t.disabled;
            });

            if (i) {
              var s = this.items.indexOf(i);
              this.updateInternalValue(this.getValue(i, s));
            }
          }
        },
        updateMultiple: function updateMultiple(t) {
          var e = Array.isArray(this.internalValue) ? this.internalValue : [],
              i = e.slice(),
              s = i.findIndex(function (e) {
            return e === t;
          });
          this.mandatory && s > -1 && i.length - 1 < 1 || null != this.max && s < 0 && i.length + 1 > this.max || (s > -1 ? i.splice(s, 1) : i.push(t), this.internalValue = i);
        },
        updateSingle: function updateSingle(t) {
          var e = t === this.internalValue;
          this.mandatory && e || (this.internalValue = e ? void 0 : t);
        }
      },
      render: function render(t) {
        return t(this.tag, this.genData(), this.$slots["default"]);
      }
    });
    l.extend({
      name: "v-item-group",
      provide: function provide() {
        return {
          itemGroup: this
        };
      }
    });
  },
  "608c": function c(t, e, i) {},
  "61d2": function d2(t, e, i) {},
  "67d5": function d5(t, e, i) {
    "use strict";

    i.r(e);

    var s = function s() {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("v-container", [i("v-row", [i("v-col", {
        staticClass: "align-center py-0 my-0",
        attrs: {
          cols: "12"
        }
      }, [i("v-btn", {
        staticClass: "px-0 back_button",
        attrs: {
          ripple: !1,
          link: "",
          text: "",
          to: "/order/delivery"
        }
      }, [i("v-icon", {
        staticClass: "mr-3 mt-0",
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [t._v("mdi-chevron-left")]), i("span", {
        staticClass: "text-h6 text-capitalize font-weight-bold text-decoration-underline"
      }, [t._v("Back")])], 1)], 1), i("v-col", {
        attrs: {
          cols: "8"
        }
      }, [i("v-card", {
        staticClass: "d-flex align-center pl-0 py-5 mb-7",
        attrs: {
          flat: "",
          to: "/order/delivery/new"
        }
      }, [i("v-row", {
        staticClass: "align-center",
        attrs: {
          align: "center"
        }
      }, [i("v-col", {
        staticClass: "d-flex align-center"
      }, [i("v-icon", {
        staticClass: "delivery_icon mr-5",
        attrs: {
          color: "#E0CF5E",
          size: "25"
        }
      }, [t._v("mdi-basket-outline")]), i("span", {
        staticClass: "text-subtitle-1 font-weight-bold"
      }, [t._v(t._s(t.$store.state.address.type) + " : " + t._s(t.$store.state.address.house) + ", " + t._s(t.$store.state.address.street) + ", " + t._s(t.$store.state.address.city) + ", " + t._s(t.$store.state.address.pincode))])], 1)], 1)], 1), i("v-divider", {
        staticClass: "mt-5 "
      })], 1), i("v-col", {
        attrs: {
          cols: "8"
        }
      }, [i("menuItems")], 1), i("v-col", [t.$store.state.loggedIn ? i("v-card", {
        staticClass: "pa-5 white--text mb-5",
        attrs: {
          outlined: "",
          tile: ""
        }
      }, [i("div", [i("v-text-field", {
        staticClass: "ma-0 pa-0",
        attrs: {
          solo: "",
          flat: "",
          "hide-details": "",
          label: "Name",
          "prepend-icon": "mdi-face"
        },
        on: {
          blur: t.printconsole
        },
        model: {
          value: t.$store.state.user.name,
          callback: function callback(e) {
            t.$set(t.$store.state.user, "name", e);
          },
          expression: "$store.state.user.name"
        }
      }), i("v-text-field", {
        staticClass: "ma-0 pa-0",
        attrs: {
          solo: "",
          flat: "",
          "hide-details": "",
          label: "Mobile Number",
          "prepend-icon": "mdi-phone"
        },
        on: {
          blur: t.printconsole
        },
        model: {
          value: t.$store.state.user.mobile,
          callback: function callback(e) {
            t.$set(t.$store.state.user, "mobile", e);
          },
          expression: "$store.state.user.mobile"
        }
      }), i("v-text-field", {
        staticClass: "ma-0 pa-0",
        attrs: {
          readonly: "",
          solo: "",
          flat: "",
          "hide-details": "",
          label: "Email",
          "prepend-icon": "mdi-mail"
        },
        model: {
          value: t.$store.state.user.email,
          callback: function callback(e) {
            t.$set(t.$store.state.user, "email", e);
          },
          expression: "$store.state.user.email"
        }
      }), i("v-text-field", {
        staticClass: "ma-0 pa-0",
        attrs: {
          solo: "",
          flat: "",
          "hide-details": "",
          label: "Payment Method",
          "prepend-icon": "mdi-card"
        },
        model: {
          value: t.$store.state.user.cardpay,
          callback: function callback(e) {
            t.$set(t.$store.state.user, "cardpay", e);
          },
          expression: "$store.state.user.cardpay"
        }
      }), i("v-checkbox", {
        staticClass: "ma-0 py-3",
        attrs: {
          "hide-details": "",
          label: "Receive promotions",
          required: ""
        },
        on: {
          change: t.printconsole
        },
        model: {
          value: t.$store.state.user.promotionreceive,
          callback: function callback(e) {
            t.$set(t.$store.state.user, "promotionreceive", e);
          },
          expression: "$store.state.user.promotionreceive"
        }
      }), i("v-btn", {
        staticClass: "pl-0 white--text",
        attrs: {
          text: "",
          color: "blue-grey"
        },
        on: {
          click: t.loggingOut
        }
      }, [i("v-icon", {
        staticClass: "mr-5"
      }, [t._v("mdi-cloud-upload")]), t._v(" Logout ")], 1)], 1)]) : i("v-card", {
        staticClass: "pa-5 white--text mb-5",
        attrs: {
          outlined: "",
          tile: ""
        }
      }, [i("v-dialog", {
        attrs: {
          fullscreen: "",
          "hide-overlay": "",
          transition: "dialog-bottom-transition"
        },
        scopedSlots: t._u([{
          key: "activator",
          fn: function fn(e) {
            var s = e.on,
                n = e.attrs;
            return [i("v-btn", t._g(t._b({
              attrs: {
                "x-large": "",
                block: "",
                depressed: "",
                ripple: !1,
                tile: "",
                color: "primary"
              }
            }, "v-btn", n, !1), s), [t._v(" LOGIN ")])];
          }
        }]),
        model: {
          value: t.$store.state.dialog2,
          callback: function callback(e) {
            t.$set(t.$store.state, "dialog2", e);
          },
          expression: "$store.state.dialog2"
        }
      }, [i("v-card", [i("v-toolbar", {
        attrs: {
          flat: "",
          color: "primary",
          dark: ""
        },
        scopedSlots: t._u([{
          key: "extension",
          fn: function fn() {
            return [i("v-tabs", {
              attrs: {
                centered: "",
                dark: "",
                "icons-and-text": "",
                "fixed-tabs": ""
              },
              model: {
                value: t.activeTab,
                callback: function callback(e) {
                  t.activeTab = e;
                },
                expression: "activeTab"
              }
            }, [i("v-tab", [i("v-icon", {
              attrs: {
                left: ""
              }
            }, [t._v("mdi-lock")]), t._v(" Login ")], 1), i("v-tab", [i("v-icon", {
              attrs: {
                left: ""
              }
            }, [t._v("mdi-account")]), t._v(" Sign Up ")], 1)], 1)];
          },
          proxy: !0
        }])
      }, [i("v-toolbar-title", [t._v("User Login / SignUp")]), i("v-spacer"), i("v-btn", {
        attrs: {
          color: "forth",
          text: ""
        },
        on: {
          click: function click(e) {
            t.$store.state.dialog2 = !1;
          }
        }
      }, [t._v("Cancle")])], 1), i("v-tabs-items", {
        model: {
          value: t.activeTab,
          callback: function callback(e) {
            t.activeTab = e;
          },
          expression: "activeTab"
        }
      }, [i("v-tab-item", [i("v-container", {
        staticClass: "mt-3"
      }, [i("login", {
        on: {
          "change-tab": function changeTab(e) {
            t.activeTab = 1;
          }
        }
      })], 1)], 1), i("v-tab-item", [i("v-container", {
        staticClass: "mt-3"
      }, [i("signup")], 1)], 1)], 1)], 1)], 1)], 1), i("cart")], 1)], 1)], 1);
    },
        n = [],
        a = (i("4de4"), i("e740")),
        r = i("78fa"),
        o = function o() {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("v-card", {
        staticClass: "pa-0 white--text",
        attrs: {
          outlined: "",
          tile: ""
        }
      }, [i("v-card-title", {
        staticClass: "headline primary px-5"
      }, [t._v(" Basket "), i("v-spacer"), t._v(" CA$" + t._s(t.total_cart_price.toFixed(2)) + " ")], 1), 0 == t.$store.state.cart.length ? i("v-card-text", [i("v-card", {
        attrs: {
          flat: ""
        }
      }, [i("v-card-title", [t._v(" Your cart is empty ")])], 1)], 1) : i("v-card-text", [i("v-list", {
        attrs: {
          "two-line": ""
        }
      }, [t._l(t.$store.state.cart, function (e, s) {
        return [i("v-list-item", {
          key: s
        }, [[i("v-list-item-content", [i("v-list-item-title", {
          staticClass: "text-h6 mb-3 forth--text font-weight-bold",
          domProps: {
            textContent: t._s(e.item)
          }
        }), t._l(e.configure.sides, function (e) {
          return i("v-list-item-subtitle", {
            key: e.name,
            domProps: {
              textContent: t._s(e.name)
            }
          });
        })], 2), i("v-list-item-action", [i("v-list-item-action-text", {
          staticClass: "text-h5 font-weight-bold forth--text",
          domProps: {
            textContent: t._s("CA$" + e.total_price.toFixed(2))
          }
        }), i("span", [i("v-btn", {
          attrs: {
            outlined: "",
            icon: "",
            color: "grey lighten-1"
          },
          on: {
            click: function click(i) {
              return t.cart_decrease(e._id, s);
            }
          }
        }, [t._v(" - ")]), t._v(" " + t._s(e.count) + " "), i("v-btn", {
          attrs: {
            outlined: "",
            icon: "",
            color: "grey lighten-1"
          },
          on: {
            click: function click(i) {
              return t.cart_increase(e._id, s);
            }
          }
        }, [t._v(" + ")])], 1)], 1)]], 2), i("v-divider", {
          key: "divider" + s,
          attrs: {
            inset: t.inset
          }
        })];
      })], 2)], 1), t.$store.state.cart.length > 0 ? i("v-card-actions", {
        staticClass: "pa-5"
      }, [i("v-btn", {
        attrs: {
          "x-large": "",
          block: "",
          depressed: "",
          ripple: !1,
          tile: "",
          color: "primary"
        }
      }, [t._v("Preorder")])], 1) : t._e()], 1);
    },
        l = [],
        c = (i("7db0"), i("a434"), i("13d5"), {
      data: function data() {
        return {
          inset: !1
        };
      },
      methods: {
        cart_increase: function cart_increase(t, e) {
          for (var i in console.log(t), this.$store.state.cart[e].count++, this.$store.state.cart[e].total_price = (this.$store.state.cart[e].price + this.$store.state.cart[e].sides_total_price) * this.$store.state.cart[e].count, this.$store.state.group_by_category) {
            var s = this.$store.state.group_by_category[i].find(function (e) {
              return e._id == t;
            });
            s && s.count++;
          }
        },
        cart_decrease: function cart_decrease(t, e) {
          for (var i in this.$store.state.cart[e].count--, this.$store.state.cart[e].total_price = (this.$store.state.cart[e].price + this.$store.state.cart[e].sides_total_price) * this.$store.state.cart[e].count, this.$store.state.group_by_category) {
            var s = this.$store.state.group_by_category[i].find(function (e) {
              return e._id == t;
            });
            s && (s.count--, 0 == this.$store.state.cart[e].count && this.$store.state.cart.splice(e, 1));
          }
        }
      },
      computed: {
        total_cart_price: function total_cart_price() {
          return this.$store.state.cart.reduce(function (t, e) {
            return t + e.total_price;
          }, 0);
        }
      }
    }),
        u = c,
        d = i("2877"),
        h = i("6544"),
        p = i.n(h),
        f = i("8336"),
        v = i("b0af"),
        m = i("99d9"),
        g = i("ce7e"),
        b = i("b85c"),
        x = i("5530"),
        w = (i("0481"), i("c740"), i("3ad0"), i("8dd9")),
        _ = w["a"].extend().extend({
      name: "v-list",
      provide: function provide() {
        return {
          isInList: !0,
          list: this
        };
      },
      inject: {
        isInMenu: {
          "default": !1
        },
        isInNav: {
          "default": !1
        }
      },
      props: {
        dense: Boolean,
        disabled: Boolean,
        expand: Boolean,
        flat: Boolean,
        nav: Boolean,
        rounded: Boolean,
        subheader: Boolean,
        threeLine: Boolean,
        twoLine: Boolean
      },
      data: function data() {
        return {
          groups: []
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, w["a"].options.computed.classes.call(this)), {}, {
            "v-list--dense": this.dense,
            "v-list--disabled": this.disabled,
            "v-list--flat": this.flat,
            "v-list--nav": this.nav,
            "v-list--rounded": this.rounded,
            "v-list--subheader": this.subheader,
            "v-list--two-line": this.twoLine,
            "v-list--three-line": this.threeLine
          });
        }
      },
      methods: {
        register: function register(t) {
          this.groups.push(t);
        },
        unregister: function unregister(t) {
          var e = this.groups.findIndex(function (e) {
            return e._uid === t._uid;
          });
          e > -1 && this.groups.splice(e, 1);
        },
        listClick: function listClick(t) {
          if (!this.expand) {
            var e,
                i = Object(b["a"])(this.groups);

            try {
              for (i.s(); !(e = i.n()).done;) {
                var s = e.value;
                s.toggle(t);
              }
            } catch (n) {
              i.e(n);
            } finally {
              i.f();
            }
          }
        }
      },
      render: function render(t) {
        var e = {
          staticClass: "v-list",
          "class": this.classes,
          style: this.styles,
          attrs: Object(x["a"])({
            role: this.isInNav || this.isInMenu ? void 0 : "list"
          }, this.attrs$)
        };
        return t(this.tag, this.setBackgroundColor(this.color, e), [this.$slots["default"]]);
      }
    }),
        $ = (i("61d2"), i("a9ad")),
        y = i("1c87"),
        C = i("4e82"),
        k = i("7560"),
        O = i("f2e7"),
        I = i("5607"),
        V = i("80d2"),
        j = i("d9bd"),
        A = i("58df"),
        B = Object(A["a"])($["a"], y["a"], k["a"], Object(C["a"])("listItemGroup"), Object(O["b"])("inputValue")),
        S = B.extend().extend({
      name: "v-list-item",
      directives: {
        Ripple: I["a"]
      },
      inject: {
        isInGroup: {
          "default": !1
        },
        isInList: {
          "default": !1
        },
        isInMenu: {
          "default": !1
        },
        isInNav: {
          "default": !1
        }
      },
      inheritAttrs: !1,
      props: {
        activeClass: {
          type: String,
          "default": function _default() {
            return this.listItemGroup ? this.listItemGroup.activeClass : "";
          }
        },
        dense: Boolean,
        inactive: Boolean,
        link: Boolean,
        selectable: {
          type: Boolean
        },
        tag: {
          type: String,
          "default": "div"
        },
        threeLine: Boolean,
        twoLine: Boolean,
        value: null
      },
      data: function data() {
        return {
          proxyClass: "v-list-item--active"
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({
            "v-list-item": !0
          }, y["a"].options.computed.classes.call(this)), {}, {
            "v-list-item--dense": this.dense,
            "v-list-item--disabled": this.disabled,
            "v-list-item--link": this.isClickable && !this.inactive,
            "v-list-item--selectable": this.selectable,
            "v-list-item--three-line": this.threeLine,
            "v-list-item--two-line": this.twoLine
          }, this.themeClasses);
        },
        isClickable: function isClickable() {
          return Boolean(y["a"].options.computed.isClickable.call(this) || this.listItemGroup);
        }
      },
      created: function created() {
        this.$attrs.hasOwnProperty("avatar") && Object(j["e"])("avatar", this);
      },
      methods: {
        click: function click(t) {
          t.detail && this.$el.blur(), this.$emit("click", t), this.to || this.toggle();
        },
        genAttrs: function genAttrs() {
          var t = Object(x["a"])({
            "aria-disabled": !!this.disabled || void 0,
            tabindex: this.isClickable && !this.disabled ? 0 : -1
          }, this.$attrs);
          return this.$attrs.hasOwnProperty("role") || this.isInNav || (this.isInGroup ? (t.role = "option", t["aria-selected"] = String(this.isActive)) : this.isInMenu ? (t.role = this.isClickable ? "menuitem" : void 0, t.id = t.id || "list-item-".concat(this._uid)) : this.isInList && (t.role = "listitem")), t;
        }
      },
      render: function render(t) {
        var e = this,
            i = this.generateRouteLink(),
            s = i.tag,
            n = i.data;
        n.attrs = Object(x["a"])(Object(x["a"])({}, n.attrs), this.genAttrs()), n[this.to ? "nativeOn" : "on"] = Object(x["a"])(Object(x["a"])({}, n[this.to ? "nativeOn" : "on"]), {}, {
          keydown: function keydown(t) {
            t.keyCode === V["p"].enter && e.click(t), e.$emit("keydown", t);
          }
        }), this.inactive && (s = "div"), this.inactive && this.to && (n.on = n.nativeOn, delete n.nativeOn);
        var a = this.$scopedSlots["default"] ? this.$scopedSlots["default"]({
          active: this.isActive,
          toggle: this.toggle
        }) : this.$slots["default"];
        return t(s, this.setTextColor(this.color, n), a);
      }
    }),
        T = i("2b0e"),
        P = T["a"].extend({
      name: "v-list-item-action",
      functional: !0,
      render: function render(t, e) {
        var i = e.data,
            s = e.children,
            n = void 0 === s ? [] : s;
        i.staticClass = i.staticClass ? "v-list-item__action ".concat(i.staticClass) : "v-list-item__action";
        var a = n.filter(function (t) {
          return !1 === t.isComment && " " !== t.text;
        });
        return a.length > 1 && (i.staticClass += " v-list-item__action--stack"), t("div", i, n);
      }
    }),
        E = i("ade3"),
        R = (i("466d"), i("ac1f"), i("db42"), i("9d26")),
        N = (i("498a"), T["a"].extend({
      name: "v-list-item-icon",
      functional: !0,
      render: function render(t, e) {
        var i = e.data,
            s = e.children;
        return i.staticClass = "v-list-item__icon ".concat(i.staticClass || "").trim(), t("div", i, s);
      }
    })),
        L = i("7e2b"),
        M = i("9d65"),
        D = i("3206"),
        z = i("0789"),
        G = Object(A["a"])(L["a"], M["a"], $["a"], Object(D["a"])("list"), O["a"]),
        H = (G.extend().extend({
      name: "v-list-group",
      directives: {
        ripple: I["a"]
      },
      props: {
        activeClass: {
          type: String,
          "default": ""
        },
        appendIcon: {
          type: String,
          "default": "$expand"
        },
        color: {
          type: String,
          "default": "primary"
        },
        disabled: Boolean,
        group: String,
        noAction: Boolean,
        prependIcon: String,
        ripple: {
          type: [Boolean, Object],
          "default": !0
        },
        subGroup: Boolean
      },
      computed: {
        classes: function classes() {
          return {
            "v-list-group--active": this.isActive,
            "v-list-group--disabled": this.disabled,
            "v-list-group--no-action": this.noAction,
            "v-list-group--sub-group": this.subGroup
          };
        }
      },
      watch: {
        isActive: function isActive(t) {
          !this.subGroup && t && this.list && this.list.listClick(this._uid);
        },
        $route: "onRouteChange"
      },
      created: function created() {
        this.list && this.list.register(this), this.group && this.$route && null == this.value && (this.isActive = this.matchRoute(this.$route.path));
      },
      beforeDestroy: function beforeDestroy() {
        this.list && this.list.unregister(this);
      },
      methods: {
        click: function click(t) {
          var e = this;
          this.disabled || (this.isBooted = !0, this.$emit("click", t), this.$nextTick(function () {
            return e.isActive = !e.isActive;
          }));
        },
        genIcon: function genIcon(t) {
          return this.$createElement(R["a"], t);
        },
        genAppendIcon: function genAppendIcon() {
          var t = !this.subGroup && this.appendIcon;
          return t || this.$slots.appendIcon ? this.$createElement(N, {
            staticClass: "v-list-group__header__append-icon"
          }, [this.$slots.appendIcon || this.genIcon(t)]) : null;
        },
        genHeader: function genHeader() {
          return this.$createElement(S, {
            staticClass: "v-list-group__header",
            attrs: {
              "aria-expanded": String(this.isActive),
              role: "button"
            },
            "class": Object(E["a"])({}, this.activeClass, this.isActive),
            props: {
              inputValue: this.isActive
            },
            directives: [{
              name: "ripple",
              value: this.ripple
            }],
            on: Object(x["a"])(Object(x["a"])({}, this.listeners$), {}, {
              click: this.click
            })
          }, [this.genPrependIcon(), this.$slots.activator, this.genAppendIcon()]);
        },
        genItems: function genItems() {
          var t = this;
          return this.showLazyContent(function () {
            return [t.$createElement("div", {
              staticClass: "v-list-group__items",
              directives: [{
                name: "show",
                value: t.isActive
              }]
            }, Object(V["l"])(t))];
          });
        },
        genPrependIcon: function genPrependIcon() {
          var t = this.subGroup && null == this.prependIcon ? "$subgroup" : this.prependIcon;
          return t || this.$slots.prependIcon ? this.$createElement(N, {
            staticClass: "v-list-group__header__prepend-icon"
          }, [this.$slots.prependIcon || this.genIcon(t)]) : null;
        },
        onRouteChange: function onRouteChange(t) {
          if (this.group) {
            var e = this.matchRoute(t.path);
            e && this.isActive !== e && this.list && this.list.listClick(this._uid), this.isActive = e;
          }
        },
        toggle: function toggle(t) {
          var e = this,
              i = this._uid === t;
          i && (this.isBooted = !0), this.$nextTick(function () {
            return e.isActive = i;
          });
        },
        matchRoute: function matchRoute(t) {
          return null !== t.match(this.group);
        }
      },
      render: function render(t) {
        return t("div", this.setTextColor(this.isActive && this.color, {
          staticClass: "v-list-group",
          "class": this.classes
        }), [this.genHeader(), t(z["a"], this.genItems())]);
      }
    }), i("899c"), i("604c")),
        W = Object(A["a"])(H["a"], $["a"]).extend({
      name: "v-list-item-group",
      provide: function provide() {
        return {
          isInGroup: !0,
          listItemGroup: this
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, H["a"].options.computed.classes.call(this)), {}, {
            "v-list-item-group": !0
          });
        }
      },
      methods: {
        genData: function genData() {
          return this.setTextColor(this.color, Object(x["a"])(Object(x["a"])({}, H["a"].options.methods.genData.call(this)), {}, {
            attrs: {
              role: "listbox"
            }
          }));
        }
      }
    }),
        X = (i("a9e3"), i("3408"), i("24b2")),
        U = i("a236"),
        q = Object(A["a"])($["a"], X["a"], U["a"]).extend({
      name: "v-avatar",
      props: {
        left: Boolean,
        right: Boolean,
        size: {
          type: [Number, String],
          "default": 48
        }
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])({
            "v-avatar--left": this.left,
            "v-avatar--right": this.right
          }, this.roundedClasses);
        },
        styles: function styles() {
          return Object(x["a"])({
            height: Object(V["f"])(this.size),
            minWidth: Object(V["f"])(this.size),
            width: Object(V["f"])(this.size)
          }, this.measurableStyles);
        }
      },
      render: function render(t) {
        var e = {
          staticClass: "v-avatar",
          "class": this.classes,
          style: this.styles,
          on: this.$listeners
        };
        return t("div", this.setBackgroundColor(this.color, e), this.$slots["default"]);
      }
    }),
        F = q,
        Y = (F.extend({
      name: "v-list-item-avatar",
      props: {
        horizontal: Boolean,
        size: {
          type: [Number, String],
          "default": 40
        }
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({
            "v-list-item__avatar--horizontal": this.horizontal
          }, F.options.computed.classes.call(this)), {}, {
            "v-avatar--tile": this.tile || this.horizontal
          });
        }
      },
      render: function render(t) {
        var e = F.options.render.call(this, t);
        return e.data = e.data || {}, e.data.staticClass += " v-list-item__avatar", e;
      }
    }), Object(V["g"])("v-list-item__action-text", "span")),
        J = Object(V["g"])("v-list-item__content", "div"),
        K = Object(V["g"])("v-list-item__title", "div"),
        Q = Object(V["g"])("v-list-item__subtitle", "div"),
        Z = i("2fa4"),
        tt = Object(d["a"])(u, o, l, !1, null, null, null),
        et = tt.exports;

    p()(tt, {
      VBtn: f["a"],
      VCard: v["a"],
      VCardActions: m["a"],
      VCardText: m["b"],
      VCardTitle: m["c"],
      VDivider: g["a"],
      VList: _,
      VListItem: S,
      VListItemAction: P,
      VListItemActionText: Y,
      VListItemContent: J,
      VListItemSubtitle: Q,
      VListItemTitle: K,
      VSpacer: Z["a"]
    });

    var it = function it() {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("v-container", [i("v-expansion-panels", {
        attrs: {
          multiple: "",
          flat: "",
          light: ""
        },
        model: {
          value: t.openedPanels,
          callback: function callback(e) {
            t.openedPanels = e;
          },
          expression: "openedPanels"
        }
      }, t._l(Object.keys(t.$store.state.group_by_category), function (e, s) {
        return i("v-expansion-panel", {
          key: s,
          staticClass: "pb-4"
        }, [i("v-card", {
          staticClass: "pa-0 primary--text",
          attrs: {
            outlined: "",
            tile: ""
          }
        }, [i("v-card-title", {
          staticClass: "pa-0"
        }, [i("v-expansion-panel-header", {
          staticClass: "text-h6 font-weight-regular",
          scopedSlots: t._u([{
            key: "actions",
            fn: function fn() {
              return [i("v-icon", {
                attrs: {
                  color: "primary"
                }
              }, [t._v("mdi-menu-down")])];
            },
            proxy: !0
          }], null, !0)
        }, [t._v(" " + t._s(e) + " ")])], 1)], 1), i("v-expansion-panel-content", [i("v-list", {
          attrs: {
            "two-line": ""
          }
        }, [i("v-row", [t._l(t.$store.state.group_by_category[e], function (s, n) {
          return [i("v-col", {
            key: n,
            attrs: {
              cols: "6"
            }
          }, [i("v-list-item", {
            "class": {
              primary: s.count > 0
            }
          }, [[i("v-list-item-content", {
            staticStyle: {
              cursor: "pointer"
            },
            on: {
              click: function click(e) {
                return t.selecting(s);
              }
            }
          }, [i("v-list-item-title", {
            staticClass: "text-h6 mb-3 forth--text font-weight-bold",
            domProps: {
              textContent: t._s(s.item)
            }
          }), i("v-list-item-subtitle", {
            domProps: {
              textContent: t._s(s.description)
            }
          })], 1), i("v-list-item-action", [i("v-list-item-action-text", {
            staticClass: "text-h5 font-weight-bold forth--text",
            domProps: {
              textContent: t._s("CA$" + s.price)
            }
          }), 0 != s.count ? i("span", [i("v-btn", {
            attrs: {
              small: "",
              outlined: "",
              icon: "",
              color: "forth"
            },
            on: {
              click: function click(e) {
                s.count--, t.menu_decrease(s._id);
              }
            }
          }, [t._v(" - ")]), t._v(" " + t._s(s.count) + " "), i("v-btn", {
            attrs: {
              small: "",
              outlined: "",
              icon: "",
              color: "forth"
            },
            on: {
              click: function click(e) {
                s.count++, t.menu_increase(s._id);
              }
            }
          }, [t._v(" + ")])], 1) : t._e()], 1)]], 2), n + 1 < e.length ? i("v-divider", {
            key: "divider" + n
          }) : t._e()], 1)];
        })], 2)], 1)], 1)], 1);
      }), 1), i("v-dialog", {
        attrs: {
          persistent: "",
          "max-width": "500px"
        },
        model: {
          value: t.dialog,
          callback: function callback(e) {
            t.dialog = e;
          },
          expression: "dialog"
        }
      }, [i("v-card", [null != t.dialog_object ? i("v-card-title", [t._v(" " + t._s(t.dialog_object.item) + " ")]) : t._e(), null != t.dialog_object ? i("v-list", [i("v-list-item-group", {
        attrs: {
          multiple: ""
        },
        model: {
          value: t.config,
          callback: function callback(e) {
            t.config = e;
          },
          expression: "config"
        }
      }, [t._l(t.dialog_object.configure.sides, function (e, s) {
        return i("v-list-item", {
          key: "item-" + s,
          attrs: {
            value: e.item,
            "active-class": "deep-purple--text text--accent-4"
          },
          scopedSlots: t._u([{
            key: "default",
            fn: function fn(s) {
              var n = s.active;
              return [i("v-list-item-content", [i("v-list-item-title", {
                domProps: {
                  textContent: t._s(e.name)
                }
              })], 1), i("v-list-item-action", [i("v-checkbox", {
                attrs: {
                  ripple: !1,
                  "input-value": n,
                  color: "deep-purple accent-4"
                }
              })], 1)];
            }
          }], null, !0)
        });
      })], 2)], 1) : t._e(), i("v-card-actions", [i("v-btn", {
        attrs: {
          color: "primary",
          text: ""
        },
        on: {
          click: t.closing_dialog
        }
      }, [t._v(" Close ")]), i("v-spacer"), i("v-btn", {
        attrs: {
          color: "primary",
          text: ""
        },
        on: {
          click: function click(e) {
            return t.adding_cart(t.dialog_object, t.config);
          }
        }
      }, [t._v(" Add ")])], 1)], 1)], 1)], 1);
    },
        st = [],
        nt = i("53ca"),
        at = (i("b64b"), i("caad"), i("d81d"), {
      data: function data() {
        return {
          openedPanels: [0, 1, 2],
          dialog: !1,
          dialog_object: null,
          selected: [],
          config: []
        };
      },
      methods: {
        selecting: function selecting(t) {
          if (0 != t.configure.sides.length) this.dialog_object = t, this.dialog = !0;else {
            t.count += 1;
            var e = 0;

            if (0 != this.$store.state.cart.length) {
              for (var i = 0; i < this.$store.state.cart.length; i++) {
                if (t._id == this.$store.state.cart[i]._id) {
                  this.$store.state.cart[i].count += 1, this.$store.state.cart[i].total_price = Number(this.$store.state.cart[i].count) * Number(this.$store.state.cart[i].price), e = 1;
                  break;
                }
              }

              if (0 == e) {
                var s = {
                  _id: t._id,
                  item: t.item,
                  price: t.price,
                  total_price: Number(t.price) * Number(t.count),
                  count: 1,
                  sides_total_price: 0,
                  configure: {
                    sides: []
                  }
                };
                this.$store.state.cart.push(s);
              }
            } else {
              var n = {
                _id: t._id,
                item: t.item,
                price: t.price,
                total_price: t.price * t.count,
                count: 1,
                sides_total_price: 0,
                configure: {
                  sides: []
                }
              };
              this.$store.state.cart.push(n);
            }
          }
        },
        adding_cart: function adding_cart(t, e) {
          e.sort(), t.count += 1;

          var i = function i(t) {
            return null != t && "object" === Object(nt["a"])(t);
          },
              s = function t(e, s) {
            console.log("Checking if equal", s);
            var n = Object.keys(e),
                a = Object.keys(s),
                r = ["category", "description", "price", "total_price", "count", "sides_total_price"];
            if (n = n.filter(function (t) {
              return !r.includes(t);
            }), a = a.filter(function (t) {
              return !r.includes(t);
            }), n.length !== a.length) return console.log("Not equal1"), !1;
            var o,
                l = Object(b["a"])(n);

            try {
              for (l.s(); !(o = l.n()).done;) {
                var c = o.value;
                console.log(c);
                var u = e[c],
                    d = s[c],
                    h = i(u) && i(d);
                if (console.log("areObjects", u, d), h && !t(u, d) || !h && u !== d) return console.log("Not equal2"), !1;
              }
            } catch (p) {
              l.e(p);
            } finally {
              l.f();
            }

            return console.log("Equal"), !0;
          };

          if (0 == this.$store.state.cart.length) {
            if (0 == e.length) {
              var n = {
                _id: t._id,
                item: t.item,
                price: t.price,
                sides_total_price: 0,
                total_price: Number(t.price) * Number(t.count),
                count: 1,
                configure: {
                  sides: []
                }
              };
              this.$store.state.cart.push(n);
            } else {
              for (var a = {
                _id: t._id,
                item: t.item,
                price: t.price,
                sides_total_price: 0,
                total_price: t.price * t.count,
                count: 1,
                configure: {
                  sides: []
                }
              }, r = 0; r < e.length; r++) {
                a.configure.sides.push(t.configure.sides[e[r]]), a.sides_total_price += Number(a.configure.sides[r].price);
              }

              a.total_price = a.count * (a.price + a.sides_total_price), this.$store.state.cart.push(a);
            }
          } else {
            var o = 0;

            if (0 == e.length) {
              for (var l = 0; l < this.$store.state.cart.length; l++) {
                if (0 == this.$store.state.cart[l].configure.sides.length && t._id == this.$store.state.cart[l]._id) {
                  this.$store.state.cart[l].count += 1, this.$store.state.cart[l].total_price = Number(this.$store.state.cart[l].count) * Number(this.$store.state.cart[l].price), o = 1;
                  break;
                }
              }

              if (0 == o) {
                var c = {
                  _id: t._id,
                  item: t.item,
                  price: t.price,
                  sides_total_price: 0,
                  total_price: Number(t.price),
                  count: 1,
                  configure: {
                    sides: []
                  }
                };
                this.$store.state.cart.push(c);
              }
            } else {
              for (var u = {
                _id: t._id,
                item: t.item,
                price: t.price,
                sides_total_price: 0,
                total_price: 0,
                count: 1,
                configure: {
                  sides: []
                }
              }, d = 0; d < e.length; d++) {
                u.configure.sides.push(t.configure.sides[e[d]]);
              }

              for (var h = 0; h < this.$store.state.cart.length; h++) {
                if (console.log("Checking"), s(u, this.$store.state.cart[h])) {
                  console.log("EXIST"), this.$store.state.cart[h].count += 1;

                  for (var p = 0; p < e.length; p++) {
                    u.sides_total_price += Number(u.configure.sides[p].price);
                  }

                  this.$store.state.cart[h].total_price = Number(this.$store.state.cart[h].count) * (Number(this.$store.state.cart[h].price) + u.sides_total_price), o = 1;
                  break;
                }
              }

              if (0 == o) {
                for (var f = 0; f < e.length; f++) {
                  u.sides_total_price += Number(u.configure.sides[f].price);
                }

                u.total_price = u.count * (u.price + u.sides_total_price), this.$store.state.cart.push(u);
              }

              console.log(u);
            }
          }
          this.config = [], this.dialog = !1;
        },
        menu_increase: function menu_increase(t) {
          var e = this.$store.state.cart.map(function (t) {
            return t._id;
          }).lastIndexOf(t);
          -1 == e ? console.log() : this.$store.state.cart[e].count++;
        },
        menu_decrease: function menu_decrease(t) {
          var e = this.$store.state.cart.map(function (t) {
            return t._id;
          }).lastIndexOf(t);
          -1 == e ? console.log() : (this.$store.state.cart[e].count--, 0 == this.$store.state.cart[e].count && this.$store.state.cart.splice(e, 1));
        },
        closing_dialog: function closing_dialog() {
          this.config = [], this.dialog = !1;
        }
      },
      computed: {},
      created: function created() {
        var t = this;

        if ("" == this.$store.state.group_by_category) {
          this.$axios.get("http://localhost:3000/menu").then(function (i) {
            t.menu = i.data, t.$store.state.group_by_category = e(t.menu, "category");
          });

          var e = function e(t, _e) {
            return t.reduce(function (t, i) {
              return (t[i[_e]] = t[i[_e]] || []).push(i), t;
            }, {});
          };
        }
      }
    }),
        rt = at,
        ot = (i("3521"), i("d3b7"), i("25f0"), i("6ca7"), i("ec29"), i("c37a")),
        lt = T["a"].extend({
      name: "rippleable",
      directives: {
        ripple: I["a"]
      },
      props: {
        ripple: {
          type: [Boolean, Object],
          "default": !0
        }
      },
      methods: {
        genRipple: function genRipple() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.ripple ? (t.staticClass = "v-input--selection-controls__ripple", t.directives = t.directives || [], t.directives.push({
            name: "ripple",
            value: {
              center: !0
            }
          }), this.$createElement("div", t)) : null;
        }
      }
    }),
        ct = T["a"].extend({
      name: "comparable",
      props: {
        valueComparator: {
          type: Function,
          "default": V["h"]
        }
      }
    });

    function ut(t) {
      t.preventDefault();
    }

    var dt = Object(A["a"])(ot["a"], lt, ct).extend({
      name: "selectable",
      model: {
        prop: "inputValue",
        event: "change"
      },
      props: {
        id: String,
        inputValue: null,
        falseValue: null,
        trueValue: null,
        multiple: {
          type: Boolean,
          "default": null
        },
        label: String
      },
      data: function data() {
        return {
          hasColor: this.inputValue,
          lazyValue: this.inputValue
        };
      },
      computed: {
        computedColor: function computedColor() {
          if (this.isActive) return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "primary";
        },
        isMultiple: function isMultiple() {
          return !0 === this.multiple || null === this.multiple && Array.isArray(this.internalValue);
        },
        isActive: function isActive() {
          var t = this,
              e = this.value,
              i = this.internalValue;
          return this.isMultiple ? !!Array.isArray(i) && i.some(function (i) {
            return t.valueComparator(i, e);
          }) : void 0 === this.trueValue || void 0 === this.falseValue ? e ? this.valueComparator(e, i) : Boolean(i) : this.valueComparator(i, this.trueValue);
        },
        isDirty: function isDirty() {
          return this.isActive;
        },
        rippleState: function rippleState() {
          return this.isDisabled || this.validationState ? this.validationState : void 0;
        }
      },
      watch: {
        inputValue: function inputValue(t) {
          this.lazyValue = t, this.hasColor = t;
        }
      },
      methods: {
        genLabel: function genLabel() {
          var t = ot["a"].options.methods.genLabel.call(this);
          return t ? (t.data.on = {
            click: ut
          }, t) : t;
        },
        genInput: function genInput(t, e) {
          return this.$createElement("input", {
            attrs: Object.assign({
              "aria-checked": this.isActive.toString(),
              disabled: this.isDisabled,
              id: this.computedId,
              role: t,
              type: t
            }, e),
            domProps: {
              value: this.value,
              checked: this.isActive
            },
            on: {
              blur: this.onBlur,
              change: this.onChange,
              focus: this.onFocus,
              keydown: this.onKeydown,
              click: ut
            },
            ref: "input"
          });
        },
        onBlur: function onBlur() {
          this.isFocused = !1;
        },
        onClick: function onClick(t) {
          this.onChange(), this.$emit("click", t);
        },
        onChange: function onChange() {
          var t = this;

          if (this.isInteractive) {
            var e = this.value,
                i = this.internalValue;

            if (this.isMultiple) {
              Array.isArray(i) || (i = []);
              var s = i.length;
              i = i.filter(function (i) {
                return !t.valueComparator(i, e);
              }), i.length === s && i.push(e);
            } else i = void 0 !== this.trueValue && void 0 !== this.falseValue ? this.valueComparator(i, this.trueValue) ? this.falseValue : this.trueValue : e ? this.valueComparator(i, e) ? null : e : !i;

            this.validate(!0, i), this.internalValue = i, this.hasColor = i;
          }
        },
        onFocus: function onFocus() {
          this.isFocused = !0;
        },
        onKeydown: function onKeydown(t) {}
      }
    }),
        ht = dt.extend({
      name: "v-checkbox",
      props: {
        indeterminate: Boolean,
        indeterminateIcon: {
          type: String,
          "default": "$checkboxIndeterminate"
        },
        offIcon: {
          type: String,
          "default": "$checkboxOff"
        },
        onIcon: {
          type: String,
          "default": "$checkboxOn"
        }
      },
      data: function data() {
        return {
          inputIndeterminate: this.indeterminate
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, ot["a"].options.computed.classes.call(this)), {}, {
            "v-input--selection-controls": !0,
            "v-input--checkbox": !0,
            "v-input--indeterminate": this.inputIndeterminate
          });
        },
        computedIcon: function computedIcon() {
          return this.inputIndeterminate ? this.indeterminateIcon : this.isActive ? this.onIcon : this.offIcon;
        },
        validationState: function validationState() {
          if (!this.isDisabled || this.inputIndeterminate) return this.hasError && this.shouldValidate ? "error" : this.hasSuccess ? "success" : null !== this.hasColor ? this.computedColor : void 0;
        }
      },
      watch: {
        indeterminate: function indeterminate(t) {
          var e = this;
          this.$nextTick(function () {
            return e.inputIndeterminate = t;
          });
        },
        inputIndeterminate: function inputIndeterminate(t) {
          this.$emit("update:indeterminate", t);
        },
        isActive: function isActive() {
          this.indeterminate && (this.inputIndeterminate = !1);
        }
      },
      methods: {
        genCheckbox: function genCheckbox() {
          return this.$createElement("div", {
            staticClass: "v-input--selection-controls__input"
          }, [this.$createElement(R["a"], this.setTextColor(this.validationState, {
            props: {
              dense: this.dense,
              dark: this.dark,
              light: this.light
            }
          }), this.computedIcon), this.genInput("checkbox", Object(x["a"])(Object(x["a"])({}, this.attrs$), {}, {
            "aria-checked": this.inputIndeterminate ? "mixed" : this.isActive.toString()
          })), this.genRipple(this.setTextColor(this.rippleState))]);
        },
        genDefaultSlot: function genDefaultSlot() {
          return [this.genCheckbox(), this.genLabel()];
        }
      }
    }),
        pt = i("62ad"),
        ft = i("a523"),
        vt = i("169a"),
        mt = Object(A["a"])(Object(C["a"])("expansionPanels", "v-expansion-panel", "v-expansion-panels"), Object(D["b"])("expansionPanel", !0)).extend({
      name: "v-expansion-panel",
      props: {
        disabled: Boolean,
        readonly: Boolean
      },
      data: function data() {
        return {
          content: null,
          header: null,
          nextIsActive: !1
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])({
            "v-expansion-panel--active": this.isActive,
            "v-expansion-panel--next-active": this.nextIsActive,
            "v-expansion-panel--disabled": this.isDisabled
          }, this.groupClasses);
        },
        isDisabled: function isDisabled() {
          return this.expansionPanels.disabled || this.disabled;
        },
        isReadonly: function isReadonly() {
          return this.expansionPanels.readonly || this.readonly;
        }
      },
      methods: {
        registerContent: function registerContent(t) {
          this.content = t;
        },
        unregisterContent: function unregisterContent() {
          this.content = null;
        },
        registerHeader: function registerHeader(t) {
          this.header = t, t.$on("click", this.onClick);
        },
        unregisterHeader: function unregisterHeader() {
          this.header = null;
        },
        onClick: function onClick(t) {
          t.detail && this.header.$el.blur(), this.$emit("click", t), this.isReadonly || this.isDisabled || this.toggle();
        },
        toggle: function toggle() {
          var t = this;
          this.content && (this.content.isBooted = !0), this.$nextTick(function () {
            return t.$emit("change");
          });
        }
      },
      render: function render(t) {
        return t("div", {
          staticClass: "v-expansion-panel",
          "class": this.classes,
          attrs: {
            "aria-expanded": String(this.isActive)
          }
        }, Object(V["l"])(this));
      }
    }),
        gt = Object(A["a"])(M["a"], $["a"], Object(D["a"])("expansionPanel", "v-expansion-panel-content", "v-expansion-panel")),
        bt = gt.extend().extend({
      name: "v-expansion-panel-content",
      computed: {
        isActive: function isActive() {
          return this.expansionPanel.isActive;
        }
      },
      created: function created() {
        this.expansionPanel.registerContent(this);
      },
      beforeDestroy: function beforeDestroy() {
        this.expansionPanel.unregisterContent();
      },
      render: function render(t) {
        var e = this;
        return t(z["a"], this.showLazyContent(function () {
          return [t("div", e.setBackgroundColor(e.color, {
            staticClass: "v-expansion-panel-content",
            directives: [{
              name: "show",
              value: e.isActive
            }]
          }), [t("div", {
            "class": "v-expansion-panel-content__wrap"
          }, Object(V["l"])(e))])];
        }));
      }
    }),
        xt = Object(A["a"])($["a"], Object(D["a"])("expansionPanel", "v-expansion-panel-header", "v-expansion-panel")),
        wt = xt.extend().extend({
      name: "v-expansion-panel-header",
      directives: {
        ripple: I["a"]
      },
      props: {
        disableIconRotate: Boolean,
        expandIcon: {
          type: String,
          "default": "$expand"
        },
        hideActions: Boolean,
        ripple: {
          type: [Boolean, Object],
          "default": !1
        }
      },
      data: function data() {
        return {
          hasMousedown: !1
        };
      },
      computed: {
        classes: function classes() {
          return {
            "v-expansion-panel-header--active": this.isActive,
            "v-expansion-panel-header--mousedown": this.hasMousedown
          };
        },
        isActive: function isActive() {
          return this.expansionPanel.isActive;
        },
        isDisabled: function isDisabled() {
          return this.expansionPanel.isDisabled;
        },
        isReadonly: function isReadonly() {
          return this.expansionPanel.isReadonly;
        }
      },
      created: function created() {
        this.expansionPanel.registerHeader(this);
      },
      beforeDestroy: function beforeDestroy() {
        this.expansionPanel.unregisterHeader();
      },
      methods: {
        onClick: function onClick(t) {
          this.$emit("click", t);
        },
        genIcon: function genIcon() {
          var t = Object(V["l"])(this, "actions") || [this.$createElement(R["a"], this.expandIcon)];
          return this.$createElement(z["b"], [this.$createElement("div", {
            staticClass: "v-expansion-panel-header__icon",
            "class": {
              "v-expansion-panel-header__icon--disable-rotate": this.disableIconRotate
            },
            directives: [{
              name: "show",
              value: !this.isDisabled
            }]
          }, t)]);
        }
      },
      render: function render(t) {
        var e = this;
        return t("button", this.setBackgroundColor(this.color, {
          staticClass: "v-expansion-panel-header",
          "class": this.classes,
          attrs: {
            tabindex: this.isDisabled ? -1 : null,
            type: "button"
          },
          directives: [{
            name: "ripple",
            value: this.ripple
          }],
          on: Object(x["a"])(Object(x["a"])({}, this.$listeners), {}, {
            click: this.onClick,
            mousedown: function mousedown() {
              return e.hasMousedown = !0;
            },
            mouseup: function mouseup() {
              return e.hasMousedown = !1;
            }
          })
        }), [Object(V["l"])(this, "default", {
          open: this.isActive
        }, !0), this.hideActions || this.genIcon()]);
      }
    }),
        _t = (i("210b"), H["a"].extend({
      name: "v-expansion-panels",
      provide: function provide() {
        return {
          expansionPanels: this
        };
      },
      props: {
        accordion: Boolean,
        disabled: Boolean,
        flat: Boolean,
        hover: Boolean,
        focusable: Boolean,
        inset: Boolean,
        popout: Boolean,
        readonly: Boolean,
        tile: Boolean
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, H["a"].options.computed.classes.call(this)), {}, {
            "v-expansion-panels": !0,
            "v-expansion-panels--accordion": this.accordion,
            "v-expansion-panels--flat": this.flat,
            "v-expansion-panels--hover": this.hover,
            "v-expansion-panels--focusable": this.focusable,
            "v-expansion-panels--inset": this.inset,
            "v-expansion-panels--popout": this.popout,
            "v-expansion-panels--tile": this.tile
          });
        }
      },
      created: function created() {
        this.$attrs.hasOwnProperty("expand") && Object(j["a"])("expand", "multiple", this), Array.isArray(this.value) && this.value.length > 0 && "boolean" === typeof this.value[0] && Object(j["a"])(':value="[true, false, true]"', ':value="[0, 2]"', this);
      },
      methods: {
        updateItem: function updateItem(t, e) {
          var i = this.getValue(t, e),
              s = this.getValue(t, e + 1);
          t.isActive = this.toggleMethod(i), t.nextIsActive = this.toggleMethod(s);
        }
      }
    })),
        $t = i("132d"),
        yt = i("0fd9"),
        Ct = Object(d["a"])(rt, it, st, !1, null, "855fd6b6", null),
        kt = Ct.exports;

    p()(Ct, {
      VBtn: f["a"],
      VCard: v["a"],
      VCardActions: m["a"],
      VCardTitle: m["c"],
      VCheckbox: ht,
      VCol: pt["a"],
      VContainer: ft["a"],
      VDialog: vt["a"],
      VDivider: g["a"],
      VExpansionPanel: mt,
      VExpansionPanelContent: bt,
      VExpansionPanelHeader: wt,
      VExpansionPanels: _t,
      VIcon: $t["a"],
      VList: _,
      VListItem: S,
      VListItemAction: P,
      VListItemActionText: Y,
      VListItemContent: J,
      VListItemGroup: W,
      VListItemSubtitle: Q,
      VListItemTitle: K,
      VRow: yt["a"],
      VSpacer: Z["a"]
    });
    var Ot = {
      components: {
        login: a["default"],
        signup: r["default"],
        cart: et,
        menuItems: kt
      },
      data: function data() {
        return {
          loggedIn: !1,
          menu: null,
          activeTab: null,
          total_price: 0
        };
      },
      watch: {
        name: function name() {
          setTimeout(function () {
            console.log("waiting");
          }, 5e3).then(function (t) {
            console.log(t);
          });
        }
      },
      methods: {
        printconsole: function printconsole() {
          console.log("printconsole triggered"), this.$axios.put(this.$store.getters.getBaseUrl + "/updateuserdetails", this.$store.state.user).then(function (t) {
            console.log(t);
          })["catch"](function () {
            console.log("ERROR");
          });
        },
        mouseLeave: function mouseLeave() {
          alert("Mouse Leave");
        },
        loggingOut: function loggingOut() {
          var t = this;
          t.$axios.get("http://localhost:3000/user/logout").then(function (e) {
            t.$store.dispatch("removeTokenForUser", {
              token: e.data
            }), t.$store.state.loggedIn = !1;
          })["catch"](function () {
            console.log("ERROR");
          });
        }
      },
      computed: {
        name: {
          get: function get() {
            return this.username;
          },
          set: function set(t) {
            this.$store.commit("updateUsername", t);
          }
        },
        configlist: function configlist() {
          return this.info.filter(function (t) {
            return "one" === t.col;
          });
        }
      },
      created: function created() {
        this.$store.state.address = JSON.parse(window.localStorage.getItem("location")), this.$store.state.address.street || this.$router.push("/order");
      }
    },
        It = Ot,
        Vt = (i("259c"), i("5319"), Object(A["a"])(y["a"], Object(C["a"])("tabsBar"), k["a"])),
        jt = Vt.extend().extend().extend({
      name: "v-tab",
      props: {
        ripple: {
          type: [Boolean, Object],
          "default": !0
        }
      },
      data: function data() {
        return {
          proxyClass: "v-tab--active"
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({
            "v-tab": !0
          }, y["a"].options.computed.classes.call(this)), {}, {
            "v-tab--disabled": this.disabled
          }, this.groupClasses);
        },
        value: function value() {
          var t = this.to || this.href || "";

          if (this.$router && this.to === Object(this.to)) {
            var e = this.$router.resolve(this.to, this.$route, this.append);
            t = e.href;
          }

          return t.replace("#", "");
        }
      },
      mounted: function mounted() {
        this.onRouteChange();
      },
      methods: {
        click: function click(t) {
          this.href && this.href.indexOf("#") > -1 && t.preventDefault(), t.detail && this.$el.blur(), this.$emit("click", t), this.to || this.toggle();
        }
      },
      render: function render(t) {
        var e = this,
            i = this.generateRouteLink(),
            s = i.tag,
            n = i.data;
        return n.attrs = Object(x["a"])(Object(x["a"])({}, n.attrs), {}, {
          "aria-selected": String(this.isActive),
          role: "tab",
          tabindex: 0
        }), n.on = Object(x["a"])(Object(x["a"])({}, n.on), {}, {
          keydown: function keydown(t) {
            t.keyCode === V["p"].enter && e.click(t), e.$emit("keydown", t);
          }
        }), t(s, n, this.$slots["default"]);
      }
    }),
        At = i("1e6c"),
        Bt = At["a"].extend({
      name: "v-tab-item",
      props: {
        id: String
      },
      methods: {
        genWindowItem: function genWindowItem() {
          var t = At["a"].options.methods.genWindowItem.call(this);
          return t.data.domProps = t.data.domProps || {}, t.data.domProps.id = this.id || this.value, t;
        }
      }
    }),
        St = (i("b0c0"), i("1bfb"), i("99af"), i("fb6a"), i("608c"), T["a"].extend({
      name: "mobile",
      props: {
        mobileBreakpoint: {
          type: [Number, String],
          "default": function _default() {
            return this.$vuetify ? this.$vuetify.breakpoint.mobileBreakpoint : void 0;
          },
          validator: function validator(t) {
            return !isNaN(Number(t)) || ["xs", "sm", "md", "lg", "xl"].includes(String(t));
          }
        }
      },
      computed: {
        isMobile: function isMobile() {
          var t = this.$vuetify.breakpoint,
              e = t.mobile,
              i = t.width,
              s = t.name,
              n = t.mobileBreakpoint;
          if (n === this.mobileBreakpoint) return e;
          var a = parseInt(this.mobileBreakpoint, 10),
              r = !isNaN(a);
          return r ? i < a : s === this.mobileBreakpoint;
        }
      },
      created: function created() {
        this.$attrs.hasOwnProperty("mobile-break-point") && Object(j["d"])("mobile-break-point", "mobile-breakpoint", this);
      }
    })),
        Tt = i("dc22"),
        Pt = i("c3f0"),
        Et = Object(A["a"])(H["a"], St).extend({
      name: "base-slide-group",
      directives: {
        Resize: Tt["a"],
        Touch: Pt["a"]
      },
      props: {
        activeClass: {
          type: String,
          "default": "v-slide-item--active"
        },
        centerActive: Boolean,
        nextIcon: {
          type: String,
          "default": "$next"
        },
        prevIcon: {
          type: String,
          "default": "$prev"
        },
        showArrows: {
          type: [Boolean, String],
          validator: function validator(t) {
            return "boolean" === typeof t || ["always", "desktop", "mobile"].includes(t);
          }
        }
      },
      data: function data() {
        return {
          internalItemsLength: 0,
          isOverflowing: !1,
          resizeTimeout: 0,
          startX: 0,
          scrollOffset: 0,
          widths: {
            content: 0,
            wrapper: 0
          }
        };
      },
      computed: {
        __cachedNext: function __cachedNext() {
          return this.genTransition("next");
        },
        __cachedPrev: function __cachedPrev() {
          return this.genTransition("prev");
        },
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, H["a"].options.computed.classes.call(this)), {}, {
            "v-slide-group": !0,
            "v-slide-group--has-affixes": this.hasAffixes,
            "v-slide-group--is-overflowing": this.isOverflowing
          });
        },
        hasAffixes: function hasAffixes() {
          switch (this.showArrows) {
            case "always":
              return !0;

            case "desktop":
              return !this.isMobile;

            case !0:
              return this.isOverflowing || Math.abs(this.scrollOffset) > 0;

            case "mobile":
              return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;

            default:
              return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
          }
        },
        hasNext: function hasNext() {
          if (!this.hasAffixes) return !1;
          var t = this.widths,
              e = t.content,
              i = t.wrapper;
          return e > Math.abs(this.scrollOffset) + i;
        },
        hasPrev: function hasPrev() {
          return this.hasAffixes && 0 !== this.scrollOffset;
        }
      },
      watch: {
        internalValue: "setWidths",
        isOverflowing: "setWidths",
        scrollOffset: function scrollOffset(t) {
          this.$refs.content.style.transform = "translateX(".concat(-t, "px)");
        }
      },
      beforeUpdate: function beforeUpdate() {
        this.internalItemsLength = (this.$children || []).length;
      },
      updated: function updated() {
        this.internalItemsLength !== (this.$children || []).length && this.setWidths();
      },
      methods: {
        genNext: function genNext() {
          var t = this,
              e = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
          return this.$createElement("div", {
            staticClass: "v-slide-group__next",
            "class": {
              "v-slide-group__next--disabled": !this.hasNext
            },
            on: {
              click: function click() {
                return t.onAffixClick("next");
              }
            },
            key: "next"
          }, [e]);
        },
        genContent: function genContent() {
          return this.$createElement("div", {
            staticClass: "v-slide-group__content",
            ref: "content"
          }, this.$slots["default"]);
        },
        genData: function genData() {
          return {
            "class": this.classes,
            directives: [{
              name: "resize",
              value: this.onResize
            }]
          };
        },
        genIcon: function genIcon(t) {
          var e = t;
          this.$vuetify.rtl && "prev" === t ? e = "next" : this.$vuetify.rtl && "next" === t && (e = "prev");
          var i = "".concat(t[0].toUpperCase()).concat(t.slice(1)),
              s = this["has".concat(i)];
          return this.showArrows || s ? this.$createElement(R["a"], {
            props: {
              disabled: !s
            }
          }, this["".concat(e, "Icon")]) : null;
        },
        genPrev: function genPrev() {
          var t = this,
              e = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
          return this.$createElement("div", {
            staticClass: "v-slide-group__prev",
            "class": {
              "v-slide-group__prev--disabled": !this.hasPrev
            },
            on: {
              click: function click() {
                return t.onAffixClick("prev");
              }
            },
            key: "prev"
          }, [e]);
        },
        genTransition: function genTransition(t) {
          return this.$createElement(z["b"], [this.genIcon(t)]);
        },
        genWrapper: function genWrapper() {
          var t = this;
          return this.$createElement("div", {
            staticClass: "v-slide-group__wrapper",
            directives: [{
              name: "touch",
              value: {
                start: function start(e) {
                  return t.overflowCheck(e, t.onTouchStart);
                },
                move: function move(e) {
                  return t.overflowCheck(e, t.onTouchMove);
                },
                end: function end(e) {
                  return t.overflowCheck(e, t.onTouchEnd);
                }
              }
            }],
            ref: "wrapper"
          }, [this.genContent()]);
        },
        calculateNewOffset: function calculateNewOffset(t, e, i, s) {
          var n = i ? -1 : 1,
              a = n * s + ("prev" === t ? -1 : 1) * e.wrapper;
          return n * Math.max(Math.min(a, e.content - e.wrapper), 0);
        },
        onAffixClick: function onAffixClick(t) {
          this.$emit("click:".concat(t)), this.scrollTo(t);
        },
        onResize: function onResize() {
          this._isDestroyed || this.setWidths();
        },
        onTouchStart: function onTouchStart(t) {
          var e = this.$refs.content;
          this.startX = this.scrollOffset + t.touchstartX, e.style.setProperty("transition", "none"), e.style.setProperty("willChange", "transform");
        },
        onTouchMove: function onTouchMove(t) {
          this.scrollOffset = this.startX - t.touchmoveX;
        },
        onTouchEnd: function onTouchEnd() {
          var t = this.$refs,
              e = t.content,
              i = t.wrapper,
              s = e.clientWidth - i.clientWidth;
          e.style.setProperty("transition", null), e.style.setProperty("willChange", null), this.$vuetify.rtl ? this.scrollOffset > 0 || !this.isOverflowing ? this.scrollOffset = 0 : this.scrollOffset <= -s && (this.scrollOffset = -s) : this.scrollOffset < 0 || !this.isOverflowing ? this.scrollOffset = 0 : this.scrollOffset >= s && (this.scrollOffset = s);
        },
        overflowCheck: function overflowCheck(t, e) {
          t.stopPropagation(), this.isOverflowing && e(t);
        },
        scrollIntoView: function scrollIntoView() {
          if (!this.selectedItem && this.items.length) {
            var t = this.items[this.items.length - 1].$el.getBoundingClientRect(),
                e = this.$refs.wrapper.getBoundingClientRect();
            (this.$vuetify.rtl && e.right < t.right || !this.$vuetify.rtl && e.left > t.left) && this.scrollTo("prev");
          }

          this.selectedItem && (0 === this.selectedIndex || !this.centerActive && !this.isOverflowing ? this.scrollOffset = 0 : this.centerActive ? this.scrollOffset = this.calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl) : this.isOverflowing && (this.scrollOffset = this.calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset)));
        },
        calculateUpdatedOffset: function calculateUpdatedOffset(t, e, i, s) {
          var n = t.clientWidth,
              a = i ? e.content - t.offsetLeft - n : t.offsetLeft;
          i && (s = -s);
          var r = e.wrapper + s,
              o = n + a,
              l = .4 * n;
          return a <= s ? s = Math.max(a - l, 0) : r <= o && (s = Math.min(s - (r - o - l), e.content - e.wrapper)), i ? -s : s;
        },
        calculateCenteredOffset: function calculateCenteredOffset(t, e, i) {
          var s = t.offsetLeft,
              n = t.clientWidth;

          if (i) {
            var a = e.content - s - n / 2 - e.wrapper / 2;
            return -Math.min(e.content - e.wrapper, Math.max(0, a));
          }

          var r = s + n / 2 - e.wrapper / 2;
          return Math.min(e.content - e.wrapper, Math.max(0, r));
        },
        scrollTo: function scrollTo(t) {
          this.scrollOffset = this.calculateNewOffset(t, {
            content: this.$refs.content ? this.$refs.content.clientWidth : 0,
            wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
          }, this.$vuetify.rtl, this.scrollOffset);
        },
        setWidths: function setWidths() {
          var t = this;
          window.requestAnimationFrame(function () {
            var e = t.$refs,
                i = e.content,
                s = e.wrapper;
            t.widths = {
              content: i ? i.clientWidth : 0,
              wrapper: s ? s.clientWidth : 0
            }, t.isOverflowing = t.widths.wrapper + 1 < t.widths.content, t.scrollIntoView();
          });
        }
      },
      render: function render(t) {
        return t("div", this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
      }
    }),
        Rt = (Et.extend({
      name: "v-slide-group",
      provide: function provide() {
        return {
          slideGroup: this
        };
      }
    }), i("d10f")),
        Nt = Object(A["a"])(Et, Rt["a"], k["a"]).extend({
      name: "v-tabs-bar",
      provide: function provide() {
        return {
          tabsBar: this
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, Et.options.computed.classes.call(this)), {}, {
            "v-tabs-bar": !0,
            "v-tabs-bar--is-mobile": this.isMobile,
            "v-tabs-bar--show-arrows": this.showArrows
          }, this.themeClasses);
        }
      },
      watch: {
        items: "callSlider",
        internalValue: "callSlider",
        $route: "onRouteChange"
      },
      methods: {
        callSlider: function callSlider() {
          this.isBooted && this.$emit("call:slider");
        },
        genContent: function genContent() {
          var t = Et.options.methods.genContent.call(this);
          return t.data = t.data || {}, t.data.staticClass += " v-tabs-bar__content", t;
        },
        onRouteChange: function onRouteChange(t, e) {
          if (!this.mandatory) {
            var i,
                s = this.items,
                n = t.path,
                a = e.path,
                r = !1,
                o = !1,
                l = Object(b["a"])(s);

            try {
              for (l.s(); !(i = l.n()).done;) {
                var c = i.value;
                if (c.to === n ? r = !0 : c.to === a && (o = !0), r && o) break;
              }
            } catch (u) {
              l.e(u);
            } finally {
              l.f();
            }

            !r && o && (this.internalValue = void 0);
          }
        }
      },
      render: function render(t) {
        var e = Et.options.render.call(this, t);
        return e.data.attrs = {
          role: "tablist"
        }, e;
      }
    }),
        Lt = i("f665"),
        Mt = Lt["a"].extend({
      name: "v-tabs-items",
      props: {
        mandatory: {
          type: Boolean,
          "default": !1
        }
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])(Object(x["a"])({}, Lt["a"].options.computed.classes.call(this)), {}, {
            "v-tabs-items": !0
          });
        },
        isDark: function isDark() {
          return this.rootIsDark;
        }
      },
      methods: {
        getValue: function getValue(t, e) {
          return t.id || H["a"].options.methods.getValue.call(this, t, e);
        }
      }
    }),
        Dt = Object(A["a"])($["a"]).extend({
      name: "v-tabs-slider",
      render: function render(t) {
        return t("div", this.setBackgroundColor(this.color, {
          staticClass: "v-tabs-slider"
        }));
      }
    }),
        zt = i("a452"),
        Gt = Object(A["a"])($["a"], zt["a"], k["a"]),
        Ht = Gt.extend().extend({
      name: "v-tabs",
      directives: {
        Resize: Tt["a"]
      },
      props: {
        activeClass: {
          type: String,
          "default": ""
        },
        alignWithTitle: Boolean,
        backgroundColor: String,
        centerActive: Boolean,
        centered: Boolean,
        fixedTabs: Boolean,
        grow: Boolean,
        height: {
          type: [Number, String],
          "default": void 0
        },
        hideSlider: Boolean,
        iconsAndText: Boolean,
        mobileBreakpoint: [String, Number],
        nextIcon: {
          type: String,
          "default": "$next"
        },
        optional: Boolean,
        prevIcon: {
          type: String,
          "default": "$prev"
        },
        right: Boolean,
        showArrows: [Boolean, String],
        sliderColor: String,
        sliderSize: {
          type: [Number, String],
          "default": 2
        },
        vertical: Boolean
      },
      data: function data() {
        return {
          resizeTimeout: 0,
          slider: {
            height: null,
            left: null,
            right: null,
            top: null,
            width: null
          },
          transitionTime: 300
        };
      },
      computed: {
        classes: function classes() {
          return Object(x["a"])({
            "v-tabs--align-with-title": this.alignWithTitle,
            "v-tabs--centered": this.centered,
            "v-tabs--fixed-tabs": this.fixedTabs,
            "v-tabs--grow": this.grow,
            "v-tabs--icons-and-text": this.iconsAndText,
            "v-tabs--right": this.right,
            "v-tabs--vertical": this.vertical
          }, this.themeClasses);
        },
        isReversed: function isReversed() {
          return this.$vuetify.rtl && this.vertical;
        },
        sliderStyles: function sliderStyles() {
          return {
            height: Object(V["f"])(this.slider.height),
            left: this.isReversed ? void 0 : Object(V["f"])(this.slider.left),
            right: this.isReversed ? Object(V["f"])(this.slider.right) : void 0,
            top: this.vertical ? Object(V["f"])(this.slider.top) : void 0,
            transition: null != this.slider.left ? null : "none",
            width: Object(V["f"])(this.slider.width)
          };
        },
        computedColor: function computedColor() {
          return this.color ? this.color : this.isDark && !this.appIsDark ? "white" : "primary";
        }
      },
      watch: {
        alignWithTitle: "callSlider",
        centered: "callSlider",
        centerActive: "callSlider",
        fixedTabs: "callSlider",
        grow: "callSlider",
        iconsAndText: "callSlider",
        right: "callSlider",
        showArrows: "callSlider",
        vertical: "callSlider",
        "$vuetify.application.left": "onResize",
        "$vuetify.application.right": "onResize",
        "$vuetify.rtl": "onResize"
      },
      mounted: function mounted() {
        var t = this;
        this.$nextTick(function () {
          window.setTimeout(t.callSlider, 30);
        });
      },
      methods: {
        callSlider: function callSlider() {
          var t = this;
          return !this.hideSlider && this.$refs.items && this.$refs.items.selectedItems.length ? (this.$nextTick(function () {
            var e = t.$refs.items.selectedItems[0];
            if (!e || !e.$el) return t.slider.width = 0, void (t.slider.left = 0);
            var i = e.$el;
            t.slider = {
              height: t.vertical ? i.scrollHeight : Number(t.sliderSize),
              left: t.vertical ? 0 : i.offsetLeft,
              right: t.vertical ? 0 : i.offsetLeft + i.offsetWidth,
              top: i.offsetTop,
              width: t.vertical ? Number(t.sliderSize) : i.scrollWidth
            };
          }), !0) : (this.slider.width = 0, !1);
        },
        genBar: function genBar(t, e) {
          var i = this,
              s = {
            style: {
              height: Object(V["f"])(this.height)
            },
            props: {
              activeClass: this.activeClass,
              centerActive: this.centerActive,
              dark: this.dark,
              light: this.light,
              mandatory: !this.optional,
              mobileBreakpoint: this.mobileBreakpoint,
              nextIcon: this.nextIcon,
              prevIcon: this.prevIcon,
              showArrows: this.showArrows,
              value: this.internalValue
            },
            on: {
              "call:slider": this.callSlider,
              change: function change(t) {
                i.internalValue = t;
              }
            },
            ref: "items"
          };
          return this.setTextColor(this.computedColor, s), this.setBackgroundColor(this.backgroundColor, s), this.$createElement(Nt, s, [this.genSlider(e), t]);
        },
        genItems: function genItems(t, e) {
          var i = this;
          return t || (e.length ? this.$createElement(Mt, {
            props: {
              value: this.internalValue
            },
            on: {
              change: function change(t) {
                i.internalValue = t;
              }
            }
          }, e) : null);
        },
        genSlider: function genSlider(t) {
          return this.hideSlider ? null : (t || (t = this.$createElement(Dt, {
            props: {
              color: this.sliderColor
            }
          })), this.$createElement("div", {
            staticClass: "v-tabs-slider-wrapper",
            style: this.sliderStyles
          }, [t]));
        },
        onResize: function onResize() {
          this._isDestroyed || (clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.callSlider, 0));
        },
        parseNodes: function parseNodes() {
          for (var t = null, e = null, i = [], s = [], n = this.$slots["default"] || [], a = n.length, r = 0; r < a; r++) {
            var o = n[r];
            if (o.componentOptions) switch (o.componentOptions.Ctor.options.name) {
              case "v-tabs-slider":
                e = o;
                break;

              case "v-tabs-items":
                t = o;
                break;

              case "v-tab-item":
                i.push(o);
                break;

              default:
                s.push(o);
            } else s.push(o);
          }

          return {
            tab: s,
            slider: e,
            items: t,
            item: i
          };
        }
      },
      render: function render(t) {
        var e = this.parseNodes(),
            i = e.tab,
            s = e.slider,
            n = e.items,
            a = e.item;
        return t("div", {
          staticClass: "v-tabs",
          "class": this.classes,
          directives: [{
            name: "resize",
            modifiers: {
              quiet: !0
            },
            value: this.onResize
          }]
        }, [this.genBar(i, s), this.genItems(n, a)]);
      }
    }),
        Wt = i("8654"),
        Xt = i("71d9"),
        Ut = Object(V["g"])("v-toolbar__title"),
        qt = Object(V["g"])("v-toolbar__items"),
        Ft = (Xt["a"], Object(d["a"])(It, s, n, !1, null, "596013be", null));
    e["default"] = Ft.exports;
    p()(Ft, {
      VBtn: f["a"],
      VCard: v["a"],
      VCheckbox: ht,
      VCol: pt["a"],
      VContainer: ft["a"],
      VDialog: vt["a"],
      VDivider: g["a"],
      VIcon: $t["a"],
      VRow: yt["a"],
      VSpacer: Z["a"],
      VTab: jt,
      VTabItem: Bt,
      VTabs: Ht,
      VTabsItems: Mt,
      VTextField: Wt["a"],
      VToolbar: Xt["a"],
      VToolbarTitle: Ut
    });
  },
  "6ca7": function ca7(t, e, i) {},
  "78fa": function fa(t, e, i) {
    "use strict";

    i.r(e);

    var s = function s() {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("v-container", {
        staticClass: "pa-0",
        attrs: {
          "fill-height": ""
        }
      }, [i("v-row", {
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [i("v-card", {
        staticClass: "pa-4",
        attrs: {
          align: "center",
          outlined: ""
        }
      }, [i("v-row", {
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [i("v-col", {
        staticClass: "pa-0",
        attrs: {
          cols: "5"
        }
      }, [i("div", {
        staticClass: "display-1 text--primary"
      }, [i("v-icon", {
        staticClass: "pr-3",
        attrs: {
          color: "primary",
          large: ""
        }
      }, [t._v("mdi-account")]), t._v("Sign Up ")], 1)]), i("v-col", {
        attrs: {
          cols: "7"
        }
      }, [i("v-card", {
        attrs: {
          flat: ""
        }
      }, [i("v-card-text", [i("v-form", {
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
      }, [i("div", {
        staticClass: "user_login text-xs-left"
      }, [i("v-text-field", {
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
      }), i("v-text-field", {
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
      })], 1), i("v-btn", {
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
        n = [],
        a = i("1da1"),
        r = (i("96cf"), i("bc3a")),
        o = i.n(r),
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
          return Object(a["a"])(_regenerator["default"].mark(function e() {
            var i, s;
            return _regenerator["default"].wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    return t.loading = !0, i = {
                      email: t.email,
                      password: t.password
                    }, s = t, e.next = 5, o.a.post(s.$store.getters.getBaseUrl + "/user/register", i).then(function (t) {
                      console.log(t), "email already exist" === t.data ? (s.loading = !1, s.$store.commit("createSnackbar", {
                        color: "red",
                        content: t.data
                      })) : t.data.details ? (s.loading = !1, s.$store.commit("createSnackbar", {
                        color: "red",
                        content: t.data.details[0].message
                      })) : (s.loading = !1, s.$store.state.user.email = s.email, s.$store.dispatch("setTokenForUser", {
                        token: t.data
                      }).then(function () {
                        o.a.post(s.$store.getters.getBaseUrl + "/userdetails", s.$store.state.user).then(function (t) {
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
              i = this;
          o.a.post(this.$store.getters.getBaseUrl + "/auth/login", e).then(function (e) {
            !1 === e.data.success ? (i.$store.commit("createSnackbar", {
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
            console.error(t), i.$store.commit("networkError");
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
        u = i("2877"),
        d = i("6544"),
        h = i.n(d),
        p = i("8336"),
        f = i("b0af"),
        v = i("99d9"),
        m = i("62ad"),
        g = i("a523"),
        b = i("4bd4"),
        x = i("132d"),
        w = i("0fd9"),
        _ = i("8654"),
        $ = Object(u["a"])(c, s, n, !1, null, "6c498290", null);

    e["default"] = $.exports;
    h()($, {
      VBtn: p["a"],
      VCard: f["a"],
      VCardText: v["b"],
      VCol: m["a"],
      VContainer: g["a"],
      VForm: b["a"],
      VIcon: x["a"],
      VRow: w["a"],
      VTextField: _["a"]
    });
  },
  "899c": function c(t, e, i) {},
  a434: function a434(t, e, i) {
    "use strict";

    var s = i("23e7"),
        n = i("23cb"),
        a = i("a691"),
        r = i("50c4"),
        o = i("7b0b"),
        l = i("65f0"),
        c = i("8418"),
        u = i("1dde"),
        d = u("splice"),
        h = Math.max,
        p = Math.min,
        f = 9007199254740991,
        v = "Maximum allowed length exceeded";
    s({
      target: "Array",
      proto: !0,
      forced: !d
    }, {
      splice: function splice(t, e) {
        var i,
            s,
            u,
            d,
            m,
            g,
            b = o(this),
            x = r(b.length),
            w = n(t, x),
            _ = arguments.length;
        if (0 === _ ? i = s = 0 : 1 === _ ? (i = 0, s = x - w) : (i = _ - 2, s = p(h(a(e), 0), x - w)), x + i - s > f) throw TypeError(v);

        for (u = l(b, s), d = 0; d < s; d++) {
          m = w + d, m in b && c(u, d, b[m]);
        }

        if (u.length = s, i < s) {
          for (d = w; d < x - s; d++) {
            m = d + s, g = d + i, m in b ? b[g] = b[m] : delete b[g];
          }

          for (d = x; d > x - s + i; d--) {
            delete b[d - 1];
          }
        } else if (i > s) for (d = x - s; d > w; d--) {
          m = d + s - 1, g = d + i - 1, m in b ? b[g] = b[m] : delete b[g];
        }

        for (d = 0; d < i; d++) {
          b[d + w] = arguments[d + 2];
        }

        return b.length = x - s + i, u;
      }
    });
  },
  a821: function a821(t, e, i) {},
  afdd: function afdd(t, e, i) {
    "use strict";

    var s = i("8336");
    e["a"] = s["a"];
  },
  c3f0: function c3f0(t, e, i) {
    "use strict";

    i("159b");

    var s = i("80d2"),
        n = function n(t) {
      var e = t.touchstartX,
          i = t.touchendX,
          s = t.touchstartY,
          n = t.touchendY,
          a = .5,
          r = 16;
      t.offsetX = i - e, t.offsetY = n - s, Math.abs(t.offsetY) < a * Math.abs(t.offsetX) && (t.left && i < e - r && t.left(t), t.right && i > e + r && t.right(t)), Math.abs(t.offsetX) < a * Math.abs(t.offsetY) && (t.up && n < s - r && t.up(t), t.down && n > s + r && t.down(t));
    };

    function a(t, e) {
      var i = t.changedTouches[0];
      e.touchstartX = i.clientX, e.touchstartY = i.clientY, e.start && e.start(Object.assign(t, e));
    }

    function r(t, e) {
      var i = t.changedTouches[0];
      e.touchendX = i.clientX, e.touchendY = i.clientY, e.end && e.end(Object.assign(t, e)), n(e);
    }

    function o(t, e) {
      var i = t.changedTouches[0];
      e.touchmoveX = i.clientX, e.touchmoveY = i.clientY, e.move && e.move(Object.assign(t, e));
    }

    function l(t) {
      var e = {
        touchstartX: 0,
        touchstartY: 0,
        touchendX: 0,
        touchendY: 0,
        touchmoveX: 0,
        touchmoveY: 0,
        offsetX: 0,
        offsetY: 0,
        left: t.left,
        right: t.right,
        up: t.up,
        down: t.down,
        start: t.start,
        move: t.move,
        end: t.end
      };
      return {
        touchstart: function touchstart(t) {
          return a(t, e);
        },
        touchend: function touchend(t) {
          return r(t, e);
        },
        touchmove: function touchmove(t) {
          return o(t, e);
        }
      };
    }

    function c(t, e, i) {
      var n = e.value,
          a = n.parent ? t.parentElement : t,
          r = n.options || {
        passive: !0
      };

      if (a) {
        var o = l(e.value);
        a._touchHandlers = Object(a._touchHandlers), a._touchHandlers[i.context._uid] = o, Object(s["q"])(o).forEach(function (t) {
          a.addEventListener(t, o[t], r);
        });
      }
    }

    function u(t, e, i) {
      var n = e.value.parent ? t.parentElement : t;

      if (n && n._touchHandlers) {
        var a = n._touchHandlers[i.context._uid];
        Object(s["q"])(a).forEach(function (t) {
          n.removeEventListener(t, a[t]);
        }), delete n._touchHandlers[i.context._uid];
      }
    }

    var d = {
      inserted: c,
      unbind: u
    };
    e["a"] = d;
  },
  c740: function c740(t, e, i) {
    "use strict";

    var s = i("23e7"),
        n = i("b727").findIndex,
        a = i("44d2"),
        r = "findIndex",
        o = !0;
    r in [] && Array(1)[r](function () {
      o = !1;
    }), s({
      target: "Array",
      proto: !0,
      forced: o
    }, {
      findIndex: function findIndex(t) {
        return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), a(r);
  },
  db42: function db42(t, e, i) {},
  e1af: function e1af(t, e, i) {},
  e740: function e740(t, e, i) {
    "use strict";

    i.r(e);

    var s = function s() {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;
      return i("v-container", {
        staticClass: "pa-0",
        attrs: {
          "fill-height": ""
        }
      }, [i("v-row", {
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [i("v-card", {
        staticClass: "pa-4",
        attrs: {
          align: "center",
          outlined: ""
        }
      }, [i("v-row", {
        attrs: {
          align: "center",
          justify: "center"
        }
      }, [i("v-col", {
        staticClass: "pa-0",
        attrs: {
          cols: "5"
        }
      }, [i("div", {
        staticClass: "display-1 text--primary"
      }, [i("v-icon", {
        staticClass: "pr-3",
        attrs: {
          color: "primary"
        }
      }, [t._v(" mdi-account ")]), t._v(" Log in ")], 1), i("div", {
        staticClass: "mt-5"
      }, [i("a", {
        on: {
          click: function click(e) {
            return t.$emit("change-tab");
          }
        }
      }, [t._v("New User?")])])]), i("v-col", {
        attrs: {
          cols: "7"
        }
      }, [i("v-card", {
        attrs: {
          flat: ""
        }
      }, [i("v-card-text", [i("v-form", {
        nativeOn: {
          keyup: function keyup(e) {
            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.login(e);
          }
        },
        model: {
          value: t.validx,
          callback: function callback(e) {
            t.validx = e;
          },
          expression: "validx"
        }
      }, [i("div", {
        staticClass: "user_login text-xs-left"
      }, [i("v-text-field", {
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
      }), i("v-text-field", {
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
      })], 1), i("v-btn", {
        staticClass: " white--text font-weight-bold",
        attrs: {
          disabled: !t.validx,
          loading: t.loading,
          rounded: "",
          outlined: "",
          color: "primary"
        },
        on: {
          click: t.login
        }
      }, [t._v("LOGIN")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    },
        n = [],
        a = i("1da1"),
        r = (i("96cf"), i("bc3a")),
        o = i.n(r),
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
            return t && t.length >= 6 || "Email must be greater than 6 characters";
          }],
          password: null,
          passwordRules: [function (t) {
            return !!t || "Password is required";
          }, function (t) {
            return t && t.length >= 1 || "Password must have 5+ characters";
          }]
        };
      },
      methods: {
        login: function login() {
          var t = this;
          return Object(a["a"])(_regenerator["default"].mark(function e() {
            var i, s;
            return _regenerator["default"].wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    return t.loading = !0, i = {
                      email: t.email,
                      password: t.password
                    }, s = t, e.next = 5, o.a.post(t.$store.getters.getBaseUrl + "/user/login", i).then(function (t) {
                      s.loading = !1, s.$store.state.user.email = s.email, s.$store.dispatch("setTokenForUser", {
                        token: t.data
                      }).then(function () {
                        s.$store.state.dialog2 = !1, s.$store.state.loggedIn = !0, s.$axios.get("http://localhost:3000/getuserdetails", {
                          params: {
                            email: s.$store.state.user.email
                          }
                        }).then(function (t) {
                          console.log(t.data), s.$store.state.user = t.data, console.log(s.$store.state.user);
                        })["catch"](function () {
                          console.log("ERROR");
                        });
                      });
                    })["catch"](function (t) {
                      s.loading = !1, s.$store.commit("createSnackbar", {
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
        }
      },
      computed: {
        valid: function valid() {
          return "" != this.email && "" != this.password;
        }
      }
    },
        c = l,
        u = i("2877"),
        d = i("6544"),
        h = i.n(d),
        p = i("8336"),
        f = i("b0af"),
        v = i("99d9"),
        m = i("62ad"),
        g = i("a523"),
        b = i("4bd4"),
        x = i("132d"),
        w = i("0fd9"),
        _ = i("8654"),
        $ = Object(u["a"])(c, s, n, !1, null, null, null);

    e["default"] = $.exports;
    h()($, {
      VBtn: p["a"],
      VCard: f["a"],
      VCardText: v["b"],
      VCol: m["a"],
      VContainer: g["a"],
      VForm: b["a"],
      VIcon: x["a"],
      VRow: w["a"],
      VTextField: _["a"]
    });
  },
  ec29: function ec29(t, e, i) {},
  f665: function f665(t, e, i) {
    "use strict";

    var s = i("5530"),
        n = (i("99af"), i("7db0"), i("c740"), i("13b3"), i("c3f0")),
        a = i("afdd"),
        r = i("9d26"),
        o = i("604c");
    e["a"] = o["a"].extend({
      name: "v-window",
      directives: {
        Touch: n["a"]
      },
      provide: function provide() {
        return {
          windowGroup: this
        };
      },
      props: {
        activeClass: {
          type: String,
          "default": "v-window-item--active"
        },
        continuous: Boolean,
        mandatory: {
          type: Boolean,
          "default": !0
        },
        nextIcon: {
          type: [Boolean, String],
          "default": "$next"
        },
        prevIcon: {
          type: [Boolean, String],
          "default": "$prev"
        },
        reverse: Boolean,
        showArrows: Boolean,
        showArrowsOnHover: Boolean,
        touch: Object,
        touchless: Boolean,
        value: {
          required: !1
        },
        vertical: Boolean
      },
      data: function data() {
        return {
          changedByDelimiters: !1,
          internalHeight: void 0,
          transitionHeight: void 0,
          transitionCount: 0,
          isBooted: !1,
          isReverse: !1
        };
      },
      computed: {
        isActive: function isActive() {
          return this.transitionCount > 0;
        },
        classes: function classes() {
          return Object(s["a"])(Object(s["a"])({}, o["a"].options.computed.classes.call(this)), {}, {
            "v-window--show-arrows-on-hover": this.showArrowsOnHover
          });
        },
        computedTransition: function computedTransition() {
          if (!this.isBooted) return "";
          var t = this.vertical ? "y" : "x",
              e = this.internalReverse ? !this.isReverse : this.isReverse,
              i = e ? "-reverse" : "";
          return "v-window-".concat(t).concat(i, "-transition");
        },
        hasActiveItems: function hasActiveItems() {
          return Boolean(this.items.find(function (t) {
            return !t.disabled;
          }));
        },
        hasNext: function hasNext() {
          return this.continuous || this.internalIndex < this.items.length - 1;
        },
        hasPrev: function hasPrev() {
          return this.continuous || this.internalIndex > 0;
        },
        internalIndex: function internalIndex() {
          var t = this;
          return this.items.findIndex(function (e, i) {
            return t.internalValue === t.getValue(e, i);
          });
        },
        internalReverse: function internalReverse() {
          return this.$vuetify.rtl ? !this.reverse : this.reverse;
        }
      },
      watch: {
        internalIndex: function internalIndex(t, e) {
          this.isReverse = this.updateReverse(t, e);
        }
      },
      mounted: function mounted() {
        var t = this;
        window.requestAnimationFrame(function () {
          return t.isBooted = !0;
        });
      },
      methods: {
        genContainer: function genContainer() {
          var t = [this.$slots["default"]];
          return this.showArrows && t.push(this.genControlIcons()), this.$createElement("div", {
            staticClass: "v-window__container",
            "class": {
              "v-window__container--is-active": this.isActive
            },
            style: {
              height: this.internalHeight || this.transitionHeight
            }
          }, t);
        },
        genIcon: function genIcon(t, e, i) {
          var s,
              n = this,
              o = {
            click: function click(t) {
              t.stopPropagation(), n.changedByDelimiters = !0, i();
            }
          },
              l = {
            "aria-label": this.$vuetify.lang.t("$vuetify.carousel.".concat(t))
          },
              c = null != (s = null == this.$scopedSlots[t] ? void 0 : this.$scopedSlots[t]({
            on: o,
            attrs: l
          })) ? s : [this.$createElement(a["a"], {
            props: {
              icon: !0
            },
            attrs: l,
            on: o
          }, [this.$createElement(r["a"], {
            props: {
              large: !0
            }
          }, e)])];
          return this.$createElement("div", {
            staticClass: "v-window__".concat(t)
          }, c);
        },
        genControlIcons: function genControlIcons() {
          var t = [],
              e = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;

          if (this.hasPrev && e && "string" === typeof e) {
            var i = this.genIcon("prev", e, this.prev);
            i && t.push(i);
          }

          var s = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;

          if (this.hasNext && s && "string" === typeof s) {
            var n = this.genIcon("next", s, this.next);
            n && t.push(n);
          }

          return t;
        },
        getNextIndex: function getNextIndex(t) {
          var e = (t + 1) % this.items.length,
              i = this.items[e];
          return i.disabled ? this.getNextIndex(e) : e;
        },
        getPrevIndex: function getPrevIndex(t) {
          var e = (t + this.items.length - 1) % this.items.length,
              i = this.items[e];
          return i.disabled ? this.getPrevIndex(e) : e;
        },
        next: function next() {
          if (this.hasActiveItems && this.hasNext) {
            var t = this.getNextIndex(this.internalIndex),
                e = this.items[t];
            this.internalValue = this.getValue(e, t);
          }
        },
        prev: function prev() {
          if (this.hasActiveItems && this.hasPrev) {
            var t = this.getPrevIndex(this.internalIndex),
                e = this.items[t];
            this.internalValue = this.getValue(e, t);
          }
        },
        updateReverse: function updateReverse(t, e) {
          var i = this.items.length,
              s = i - 1;
          return i <= 2 ? t < e : t === s && 0 === e || (0 !== t || e !== s) && t < e;
        }
      },
      render: function render(t) {
        var e = this,
            i = {
          staticClass: "v-window",
          "class": this.classes,
          directives: []
        };

        if (!this.touchless) {
          var s = this.touch || {
            left: function left() {
              e.$vuetify.rtl ? e.prev() : e.next();
            },
            right: function right() {
              e.$vuetify.rtl ? e.next() : e.prev();
            },
            end: function end(t) {
              t.stopPropagation();
            },
            start: function start(t) {
              t.stopPropagation();
            }
          };
          i.directives.push({
            name: "touch",
            value: s
          });
        }

        return t("div", i, [this.genContainer()]);
      }
    });
  }
}]);