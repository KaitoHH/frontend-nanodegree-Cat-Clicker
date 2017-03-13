(function() {
    var data = {
        catList: [{
            id: "cat01",
            name: "01",
            url: "catImg/01.jpg",
            counter: 0
        }, {
            id: "cat02",
            name: "02",
            url: "catImg/02.jpg",
            counter: 0
        }, {
            id: "cat03",
            name: "03",
            url: "catImg/03.jpg",
            counter: 0
        }, {
            id: "cat04",
            name: "04",
            url: "catImg/04.jpg",
            counter: 0
        }, {
            id: "cat05",
            name: "05",
            url: "catImg/05.jpg",
            counter: 0
        }],
        curCat: {},
        adminVisable: false
    };

    var view = {
        init: function() {
            this.renderList();
            this.renderDiv();
            this.initForm();
        },
        initForm: function() {
            this.form = document.getElementById("form");
            this.name = document.getElementById("nameInput");
            this.url = document.getElementById("urlInput");
            this.counter = document.getElementById("counterInput");
            document.getElementById("toogleBtn").addEventListener('click', function() {
                octopus.toogleAdmin();
            });
            var _this = this;
            document.getElementById("saveInput").addEventListener('click', function() {
                octopus.update(_this.name.value, _this.url.value, _this.counter.value);
            });
        },
        renderList: function() {
            var ul = document.getElementById("cat-list");
            ul.innerHTML = "";
            var _this = this;
            octopus.getCatList().forEach(function(cat) {
                var li = document.createElement("li");
                li.innerHTML = '<a href="#">' + cat.name + '</a>';
                li.addEventListener('click', function() {
                    octopus.setCurCat(cat);
                    _this.renderForm();
                });
                ul.appendChild(li);
            });
        },
        renderForm: function() {
            this.name.value = octopus.getCurCat().name;
            this.url.value = octopus.getCurCat().url;
            this.counter.value = octopus.getCurCat().counter;
        },
        renderDiv: function() {
            var div = document.createElement("div");
            div.setAttribute("class", "cat-section");

            var h2 = document.createElement("h2");
            h2.innerHTML = "";

            var p = document.createElement("p");
            p.setAttribute("id", "click");

            var img = document.createElement("img");
            var _this = this;
            img.addEventListener('click', function() {
                octopus.getCurCat().click();
                p.innerHTML = octopus.getCurCat().counter;
                _this.renderForm();
            }, false);
            div.appendChild(h2);
            div.appendChild(img);
            div.appendChild(p);
            document.body.appendChild(div);
        },
        replaceDiv: function(cat) {
            var h2 = document.getElementsByTagName("h2")[0];
            h2.innerHTML = cat.name;
            var img = document.getElementsByTagName("img")[0];
            img.setAttribute("src", cat.url);
            var p = document.getElementById("click");
            p.innerHTML = cat.counter;
        },
        toogleForm: function(show) {
            if (show) {
                this.form.style.display = "block";
                this.renderForm();
            } else {
                this.form.style.display = "none";
            }
        }
    };

    var octopus = {
        init: function() {
            view.init();
            this.setCurCat(data.catList[0]);
            view.toogleForm(data.adminVisable);
        },
        getCatList: function() {
            return data.catList;
        },
        setCurCat: function(cat) {
            cat.click = this.click;
            data.curCat = cat;
            view.replaceDiv(cat);
        },
        getCurCat: function() {
            return data.curCat;
        },
        click: function() {
            this.counter++;
        },
        toogleAdmin: function() {
            data.adminVisable = !data.adminVisable;
            view.toogleForm(data.adminVisable);
        },
        update: function(name, url, counter) {
            data.curCat.name = name;
            data.curCat.url = url;
            data.curCat.counter = parseInt(counter);
            view.replaceDiv(data.curCat);
            view.renderList();
        }
    };

    octopus.init();
})();
