import { burger, fontAwesome, createFooterYear, createFooter, createHeader } from "./utils.js";

document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    createFooter();
    createFooterYear();
    fontAwesome();
    burger();
});
