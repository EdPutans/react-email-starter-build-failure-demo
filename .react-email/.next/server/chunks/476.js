"use strict";
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 6476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emails_stripe_welcome)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "@react-email/components"
var components_ = __webpack_require__(219);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ../emails/stripe-welcome.tsx



const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const StripeWelcomeEmail = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Preview, {
                children: "You're now ready to make live transactions with Stripe!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Body, {
                style: main,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Container, {
                    style: container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Section, {
                        style: box,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                                src: `${baseUrl}/static/stripe-logo.png`,
                                width: "49",
                                height: "21",
                                alt: "Stripe"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Hr, {
                                style: hr
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                style: paragraph,
                                children: "Thanks for submitting your account information. You're now ready to make live transactions with Stripe!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                style: paragraph,
                                children: "You can view your payments and a variety of other information about your account right from your dashboard."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                                pX: 10,
                                pY: 10,
                                style: stripe_welcome_button,
                                href: "https://dashboard.stripe.com/login",
                                children: "View your Stripe Dashboard"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Hr, {
                                style: hr
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                style: paragraph,
                                children: [
                                    "If you haven't finished your integration, you might find our",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        style: stripe_welcome_anchor,
                                        href: "https://stripe.com/docs",
                                        children: "docs"
                                    }),
                                    " ",
                                    "handy."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                style: paragraph,
                                children: [
                                    "Once you're ready to start accepting payments, you'll just need to use your live",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        style: stripe_welcome_anchor,
                                        href: "https://dashboard.stripe.com/login?redirect=%2Fapikeys",
                                        children: "API keys"
                                    }),
                                    " ",
                                    "instead of your test API keys. Your account can simultaneously be used for both test and live requests, so you can continue testing while accepting live payments. Check out our",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        style: stripe_welcome_anchor,
                                        href: "https://stripe.com/docs/dashboard",
                                        children: "tutorial about account basics"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                style: paragraph,
                                children: [
                                    "Finally, we've put together a",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        style: stripe_welcome_anchor,
                                        href: "https://stripe.com/docs/checklist/website",
                                        children: "quick checklist"
                                    }),
                                    " ",
                                    "to ensure your website conforms to card network standards."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                style: paragraph,
                                children: [
                                    "We'll be here to help you with any step along the way. You can find answers to most questions and get in touch with us on our",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        style: stripe_welcome_anchor,
                                        href: "https://support.stripe.com/",
                                        children: "support site"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                style: paragraph,
                                children: "— The Stripe team"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Hr, {
                                style: hr
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                style: footer,
                                children: "Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080"
                            })
                        ]
                    })
                })
            })
        ]
    });
/* harmony default export */ const stripe_welcome = (StripeWelcomeEmail);
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
};
const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px"
};
const box = {
    padding: "0 48px"
};
const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0"
};
const paragraph = {
    color: "#525f7f",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left"
};
const stripe_welcome_anchor = {
    color: "#556cd6"
};
const stripe_welcome_button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "100%"
};
const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px"
};

;// CONCATENATED MODULE: ./emails/stripe-welcome.tsx

/* harmony default export */ const emails_stripe_welcome = (stripe_welcome);


/***/ })

};
;