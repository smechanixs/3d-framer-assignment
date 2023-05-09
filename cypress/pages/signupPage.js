class signupPage {


    elements = {
        emailInput: () => '[placeholder="Email"]',
        submitButton: () => '#main > div > div.framer-y2vcw2 > div.framer-130cxjo > div.framer-pdiwkc > div.framer-bclusm-container > div > form > div:nth-child(2) > input[type=submit]'
    }
}

module.exports = new signupPage();