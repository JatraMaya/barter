module.exports = {
    purge: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            rotate: {
                "25": "25deg",
                "-25": "-25deg",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
