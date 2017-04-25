/* Confirmation for copying options between blogs */

jQuery(document).ready(function($) {
$('#copy_config').submit(function() {
    var c = confirm(relevanssi.confirm);
    return c; //you can just return c because it will be true or false
});
});