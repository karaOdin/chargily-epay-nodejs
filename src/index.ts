import { EPAY_CHARGILY_URL, Invoice, Mode } from "./configuration";
import axios from "axios";

export const createPayment = (invoice: Invoice) => {
  axios
    .post(EPAY_CHARGILY_URL, invoice, {
      headers: {
        Accept: "application/json",
        "X-Authorization": invoice.appKey,
      },
    })
    .then((res) => {
      return res.data.checkout_url;
    })
    .catch((error) => {
      return error.response.data.errors;
    });
};
