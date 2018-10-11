module.exports = {
    link_css (src) {
        return `<link rel="stylesheet" href="${staticify.getVersionedPath('/' 
        + src)}">`;
    },
    script_js (src) {
        return `<script src="${staticify.getVersionedPath('/' + src)}" type="text/javascript"></script>`;
    },
    json(context) {
        return JSON.stringify(context);
    }
}
