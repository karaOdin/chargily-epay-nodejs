"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
var configuration_1 = require("./configuration");
var axios_1 = require("axios");
var invoice = new configuration_1.Invoice();
invoice.APP_KEY =
  "mg6apGyvhaEO3cl3AWYsmkFLdXvuTCTOIl9LIHKhwefGfgCAp0bRoeb7iL8zikgK";
invoice.Amount = 1000;
invoice.Client = "chawki mahdi";
invoice.Invoice_number = 1054564;
invoice.Webhook_url = "https://github.com/";
invoice.Back_url = "https://github.com/";
invoice.Mode = configuration_1.Mode.EDAHABIA;
invoice.Discount = 1;
var createPayment = function (invoice) {
  axios_1.default
    .post(configuration_1.EPAY_CHARGILY_URL, invoice, {
      headers: {
        Accept: "application/json",
        "X-Authorization": invoice.APP_KEY,
      },
    })
    .then(function (res) {
      return res.data.checkout_url;
    })
    .catch(function (error) {
      console.log(error.response.data.errors);
    });
};
exports.createPayment = createPayment;
console.log((0, exports.createPayment)(invoice));
