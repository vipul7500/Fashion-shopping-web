// const { default: Stripe } = require("stripe");

const router = require("express").Router();
const KEY =
  "sk_test_51KaimASI6i4F9vZj7kLYhduPufxAxRcXDFick0u7DO9YD6vP7zcqgRKnlVY9lQ8HfBU75n3CSQJvOnjuLJ4upET5004CaT4CGE";
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
  try {
    await stripe.paymentIntents.create(
      {
        currency: "INR",
        amount: req.body.amount,
        payment_method_types: ["card"],
        receipt_email: "hadeklte@gmail.com",
      },
      function (err, paymentIntent) {
        if (err) {
          throw new Error("failed to charge");
        }
        res.status(200).send(paymentIntent);
      }
    );
  } catch (err) {
    console.log(err, "error occured");
  }
});

module.exports = router;
