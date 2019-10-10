"use strict";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    global: {
        production: false,
        serverPath: "http://localhost:51540",
        productCode: "000"
    },
    security: {
        AccessTokenExpiration: 1440,
        allowForAnnonymous: true
    },
    localization: {
        defaultLang: 'en-US',
        localStorageLangKey: 'UCP_Lang',
    },
    file: {
        AllowedFileSize: 5,
        AllowedImageExtensions: ["jpg", "png", "gif", "jpeg"],
        AllowedAttachmentExtensions: ".jpg, .png , .gif , .pdf, .doc, .docx, .jpeg",
    },
    pager: {
        pageSize: 1,
        pageLinks: 8,
        rowsPerPageOptions: [5, 10, 20]
    },
    patterns: {
        mobilePattern: "^\\d{4,20}$",
        emailPattern: "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$",
        urlPattern: "^(http:\\/\\/www\.|https:\\/\\/www\.|http:\\/\\/|https:\\/\\/|www\.)[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
        percentagePattern: "^\\d{0,2}(\\.\\d{0,2})?$",
        numberPattern: "^\\d{0,10}$",
        floatNumberPattern: "^\\d{0,10}(\\.\\d{0,10})?$",
        passwordPattern: ".*"
    },
    sorting: {
        orderBy: "CreationDate",
        orderBySort: "desc"
    },
    dateFormat: {
        date: "DD/MM/YYYY",
        dateWithTime: "DD/MM/YYYY h:mm:ss A",
        apiDate: "MM/DD/YYYY",
        apiDateWithTime: "MM/DD/YYYY HH:mm",
        apiTime: "HH:mm",
        calendarDate: "dd/mm/yy"
    },
    navigation: {
        loginPageUrl: "/account/login",
        accessDeniedPageUrl: "/accessdenied",
        admin: "/administration",
        changePasswordPageUrl: "/account/changepassword"
    },
    photos: {
        defaulrUserLogo: "img/default-user-image.jpg",
        defaultLogo: "",
        defaultProviderLogo: "img/logo5.png"
    },
    map: {
        apiKey: 'AIzaSyCSMYwyoSLIHWP3ypSZwFsCWqLwI7kHVxs',
        defaultLat: 23.583946,
        defaultLng: 58.2835788
    },
    resources: {
        All_EnglishText: "All",
        All_ArabicText: "الكل"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map