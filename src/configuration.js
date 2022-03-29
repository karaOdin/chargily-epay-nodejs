"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = exports.EPAY_CHARGILY_URL = exports.Mode = void 0;
var Mode;
(function (Mode) {
  Mode["CIB"] = "CIB";
  Mode["EDAHABIA"] = "EDAHABIA";
})((Mode = exports.Mode || (exports.Mode = {})));
exports.EPAY_CHARGILY_URL = "http://epay.chargily.com.dz/api/invoice";
var Invoice = /** @class */ (function () {
  function Invoice() {}
  Object.defineProperty(Invoice.prototype, "APP_KEY", {
    get: function () {
      return this.app_key;
    },
    set: function (APP_KEY) {
      this.app_key = APP_KEY;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Client", {
    get: function () {
      return this.client;
    },
    set: function (client) {
      if (typeof client === "undefined")
        throw new Error("client must be declared");
      this.client = client;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Amount", {
    get: function () {
      return this.amount;
    },
    set: function (amount) {
      if (amount <= 75) throw new Error("amount must be more or equal 100");
      this.amount = amount;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Discount", {
    get: function () {
      return this.discount;
    },
    set: function (discount) {
      if (discount < 0 || discount >= 100) {
        throw new Error("The percentage is invalid");
      }
      this.discount = discount !== null && discount !== void 0 ? discount : 0;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Invoice_number", {
    get: function () {
      return this.invoice_number;
    },
    set: function (invoice_number) {
      this.invoice_number = invoice_number;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Back_url", {
    get: function () {
      return this.back_url;
    },
    set: function (back_url) {
      this.back_url = back_url;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Webhook_url", {
    get: function () {
      return this.webhook_url;
    },
    set: function (webhook_url) {
      this.webhook_url = webhook_url;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Invoice.prototype, "Mode", {
    get: function () {
      return this.mode;
    },
    set: function (mode) {
      this.mode = mode;
    },
    enumerable: false,
    configurable: true,
  });
  return Invoice;
})();
exports.Invoice = Invoice;
