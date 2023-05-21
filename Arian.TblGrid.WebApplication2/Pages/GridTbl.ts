class GridTbl extends GridCard<any> {

    constructor($X) {
        super({
            name: "543c2856-52ad-4596-8a51-685ea1981a7e",
            records: [{ Title: 'AA', AuthorStatement: 'Ali' }],
            columns: [{ name: 'Title', title: "ستون عنوان" },
                { name: 'AuthorStatement', title: "ستون ایکس" }],
            actions: []
        });

        this.$card.appendTo($X);
    }

}
$(function () {
    var tbl = new GridTbl($("#mainPage"));

})