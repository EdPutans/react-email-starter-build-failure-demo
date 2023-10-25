"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 1963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emails_notion_magic_link)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "@react-email/components"
var components_ = __webpack_require__(219);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ../emails/notion-magic-link.tsx



const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const NotionMagicLinkEmail = ({ loginCode ="sparo-ndigo-amurt-secan"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Preview, {
                children: "Log in with this magic link"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Body, {
                style: main,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Container, {
                    style: container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Heading, {
                            style: h1,
                            children: "Login"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                            href: "https://notion.so",
                            target: "_blank",
                            style: {
                                ...notion_magic_link_link,
                                display: "block",
                                marginBottom: "16px"
                            },
                            children: "Click here to log in with this magic link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                            style: {
                                ...notion_magic_link_text,
                                marginBottom: "14px"
                            },
                            children: "Or, copy and paste this temporary login code:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                            style: code,
                            children: loginCode
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                            style: {
                                ...notion_magic_link_text,
                                color: "#ababab",
                                marginTop: "14px",
                                marginBottom: "16px"
                            },
                            children: "If you didn't try to login, you can safely ignore this email."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Text, {
                            style: {
                                ...notion_magic_link_text,
                                color: "#ababab",
                                marginTop: "12px",
                                marginBottom: "38px"
                            },
                            children: "Hint: You can set a permanent password in Settings & members → My account."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                            src: `${baseUrl}/static/notion-logo.png`,
                            width: "32",
                            height: "32",
                            alt: "Notion's Logo"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                            style: footer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                    href: "https://notion.so",
                                    target: "_blank",
                                    style: {
                                        ...notion_magic_link_link,
                                        color: "#898989"
                                    },
                                    children: "Notion.so"
                                }),
                                ", the all-in-one-workspace",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "for your notes, tasks, wikis, and databases."
                            ]
                        })
                    ]
                })
            })
        ]
    });
/* harmony default export */ const notion_magic_link = (NotionMagicLinkEmail);
const main = {
    backgroundColor: "#ffffff"
};
const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto"
};
const h1 = {
    color: "#333",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0"
};
const notion_magic_link_link = {
    color: "#2754C5",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline"
};
const notion_magic_link_text = {
    color: "#333",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0"
};
const footer = {
    color: "#898989",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "12px",
    lineHeight: "22px",
    marginTop: "12px",
    marginBottom: "24px"
};
const code = {
    display: "inline-block",
    padding: "16px 4.5%",
    width: "90.5%",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: "#333"
};

;// CONCATENATED MODULE: ./emails/notion-magic-link.tsx

/* harmony default export */ const emails_notion_magic_link = (notion_magic_link);


/***/ })

};
;