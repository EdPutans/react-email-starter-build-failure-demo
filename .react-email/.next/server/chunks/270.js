"use strict";
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 9270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emails_plaid_verify_identity)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "@react-email/components"
var components_ = __webpack_require__(219);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ../emails/plaid-verify-identity.tsx



const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const PlaidVerifyIdentityEmail = ({ validationCode ="144833"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Head, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Body, {
                style: main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Container, {
                        style: container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                                src: `${baseUrl}/static/plaid-logo.png`,
                                width: "212",
                                height: "88",
                                alt: "Plaid",
                                style: logo
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                style: tertiary,
                                children: "Verify Your Identity"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Heading, {
                                style: secondary,
                                children: "Enter the following code to finish linking Venmo."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Section, {
                                style: codeContainer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                    style: code,
                                    children: validationCode
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                                style: paragraph,
                                children: "Not expecting this email?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                style: paragraph,
                                children: [
                                    "Contact",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        href: "mailto:login@plaid.com",
                                        style: plaid_verify_identity_link,
                                        children: "login@plaid.com"
                                    }),
                                    " ",
                                    "if you did not request this code."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                        style: footer,
                        children: "Securely powered by Plaid."
                    })
                ]
            })
        ]
    });
/* harmony default export */ const plaid_verify_identity = (PlaidVerifyIdentityEmail);
const main = {
    backgroundColor: "#ffffff",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif"
};
const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #eee",
    borderRadius: "5px",
    boxShadow: "0 5px 10px rgba(20,50,70,.2)",
    marginTop: "20px",
    width: "360px",
    margin: "0 auto",
    padding: "68px 0 130px"
};
const logo = {
    margin: "0 auto"
};
const tertiary = {
    color: "#0a85ea",
    fontSize: "11px",
    fontWeight: 700,
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
    height: "16px",
    letterSpacing: "0",
    lineHeight: "16px",
    margin: "16px 8px 8px 8px",
    textTransform: "uppercase",
    textAlign: "center"
};
const secondary = {
    color: "#000",
    display: "inline-block",
    fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "24px",
    marginBottom: "0",
    marginTop: "0",
    textAlign: "center"
};
const codeContainer = {
    background: "rgba(0,0,0,.05)",
    borderRadius: "4px",
    margin: "16px auto 14px",
    verticalAlign: "middle",
    width: "280px"
};
const code = {
    color: "#000",
    display: "inline-block",
    fontFamily: "HelveticaNeue-Bold",
    fontSize: "32px",
    fontWeight: 700,
    letterSpacing: "6px",
    lineHeight: "40px",
    paddingBottom: "8px",
    paddingTop: "8px",
    margin: "0 auto",
    width: "100%",
    textAlign: "center"
};
const paragraph = {
    color: "#444",
    fontSize: "15px",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
    letterSpacing: "0",
    lineHeight: "23px",
    padding: "0 40px",
    margin: "0",
    textAlign: "center"
};
const plaid_verify_identity_link = {
    color: "#444",
    textDecoration: "underline"
};
const footer = {
    color: "#000",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0",
    lineHeight: "23px",
    margin: "0",
    marginTop: "20px",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
    textAlign: "center",
    textTransform: "uppercase"
};

;// CONCATENATED MODULE: ./emails/plaid-verify-identity.tsx

/* harmony default export */ const emails_plaid_verify_identity = (plaid_verify_identity);


/***/ })

};
;