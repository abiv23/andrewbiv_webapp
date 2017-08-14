/*
======================
    Contact
======================
*/

/* form-submission validation */
if (validateHuman(data.honeypot)) {
    return false;
}

/* email form handling is google script from this source:
https://github.com/dwyl/html-form-send-email-via-google-script-without-server

app url is here: https://script.google.com/macros/s/AKfycbwr2NsPKDEHzWcE-ZfqO80ecs197mMfGpXehum2juEhJgyCnjo/exec*/

/* Messages sent to this google form: https://docs.google.com/spreadsheets/d/1dEPs34Y_kFVNQLzOrueCjRGqeAJg4qkzj9-wgEJP-1U/edit#gid=0 */
