let hot;

// default sheet data (if Firestore is empty)
let defaultData = [
    ["Name", "Age", "City"],
    ["Ali", 30, "Montreal"],
    ["John", 25, "Toronto"],
    ["Sara", 28, "Vancouver"]
];

// wait for login
auth.onAuthStateChanged(async (user) => {

    if (!user) return;

    document.getElementById("userEmail").innerText = user.email;

    const isAdmin = user.email === "ali.h.mousa.1996@gmail.com"; // CHANGE THIS

    // load data from Firestore
    const doc = await db.collection("sheet").doc("main").get();

    let data = doc.exists ? doc.data().data : defaultData;

    const container = document.getElementById("spreadsheet");

    hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        stretchH: "all",
        contextMenu: true,
        filters: true,
        dropdownMenu: true,
        manualRowResize: true,
        manualColumnResize: true,
        licenseKey: "non-commercial-and-evaluation",

        // IMPORTANT: user permissions
        readOnly: !isAdmin
    });

    // SAVE TO FIREBASE (auto-save)
    hot.addHook("afterChange", function (changes, source) {

        if (source === "loadData") return;

        if (!isAdmin) return;

        db.collection("sheet").doc("main").set({
            data: hot.getData()
        });

    });

});
