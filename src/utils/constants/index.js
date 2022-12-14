export const THEMES = {
    Light: "light",
    Dark: "dark",
};

export const REGION = [
    "",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
];

export const FUSE_OPTIONS = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1,
    location: 0,
    threshold: 0.5,
    distance: 5,
    useExtendedSearch: false,
    ignoreLocation: false,
    ignoreFieldNorm: false,
    fieldNormWeight: 1,
    keys: [
        "name.common",
        "population",
        "region",
        "capital"
    ]
};