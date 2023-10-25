"use strict";
exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emails_vercel_invite_user)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "@react-email/components"
var components_ = __webpack_require__(219);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ../emails/vercel-invite-user.tsx



const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const VercelInviteUserEmail = ({ username ="zenorocha" , userImage =`${baseUrl}/static/vercel-user.png` , invitedByUsername ="bukinoshita" , invitedByEmail ="bukinoshita@example.com" , teamName ="My Project" , teamImage =`${baseUrl}/static/vercel-team.png` , inviteLink ="https://vercel.com/teams/invite/foo" , inviteFromIp ="204.13.186.218" , inviteFromLocation ="S\xe3o Paulo, Brazil"  })=>{
    const previewText = `Join ${invitedByUsername} on Vercel`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Preview, {
                children: previewText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_.Tailwind, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Body, {
                    className: "bg-white my-auto mx-auto font-sans",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Container, {
                        className: "border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Section, {
                                className: "mt-[32px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                                    src: `${baseUrl}/static/vercel-logo.png`,
                                    width: "40",
                                    height: "37",
                                    alt: "Vercel",
                                    className: "my-0 mx-auto"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Heading, {
                                className: "text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0",
                                children: [
                                    "Join ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: teamName
                                    }),
                                    " on ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Vercel"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                className: "text-black text-[14px] leading-[24px]",
                                children: [
                                    "Hello ",
                                    username,
                                    ","
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                className: "text-black text-[14px] leading-[24px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "bukinoshita"
                                    }),
                                    " (",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        href: `mailto:${invitedByEmail}`,
                                        className: "text-blue-600 no-underline",
                                        children: invitedByEmail
                                    }),
                                    ") has invited you to the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: teamName
                                    }),
                                    " team on",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Vercel"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Section, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Row, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Column, {
                                            align: "right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                                                className: "rounded-full",
                                                src: userImage,
                                                width: "64",
                                                height: "64"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Column, {
                                            align: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                                                src: `${baseUrl}/static/vercel-arrow.png`,
                                                width: "12",
                                                height: "9",
                                                alt: "invited you to"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_.Column, {
                                            align: "left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Img, {
                                                className: "rounded-full",
                                                src: teamImage,
                                                width: "64",
                                                height: "64"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Section, {
                                className: "text-center mt-[32px] mb-[32px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_.Button, {
                                    pX: 20,
                                    pY: 12,
                                    className: "bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center",
                                    href: inviteLink,
                                    children: "Join the team"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                className: "text-black text-[14px] leading-[24px]",
                                children: [
                                    "or copy and paste this URL into your browser:",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_.Link, {
                                        href: inviteLink,
                                        className: "text-blue-600 no-underline",
                                        children: inviteLink
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_.Hr, {
                                className: "border border-solid border-[#eaeaea] my-[26px] mx-0 w-full"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_.Text, {
                                className: "text-[#666666] text-[12px] leading-[24px]",
                                children: [
                                    "This invitation was intended for",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-black",
                                        children: [
                                            username,
                                            " "
                                        ]
                                    }),
                                    ".This invite was sent from",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-black",
                                        children: inviteFromIp
                                    }),
                                    " located in",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-black",
                                        children: inviteFromLocation
                                    }),
                                    ". If you were not expecting this invitation, you can ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us."
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const vercel_invite_user = (VercelInviteUserEmail);

;// CONCATENATED MODULE: ./emails/vercel-invite-user.tsx

/* harmony default export */ const emails_vercel_invite_user = (vercel_invite_user);


/***/ })

};
;