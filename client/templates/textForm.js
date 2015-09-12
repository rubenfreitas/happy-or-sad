Template.textForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();

        // create the new text
        var newText = {
            text: tmpl.find("#text").value,
            isHappy: "unknown",
            createdAt: new Date()
        };

    }
};
