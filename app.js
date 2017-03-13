(function() {
    var data = {
        catList: [{
            id: "cat01",
            name: "01",
            counter: 0
        }, {
            id: "cat02",
            name: "02",
            counter: 0
        }, {
            id: "cat03",
            name: "03",
            counter: 0
        }, {
            id: "cat04",
            name: "04",
            counter: 0
        }, {
            id: "cat05",
            name: "05",
            counter: 0
        }],
        curCat: {}
    };

    var view = {
        init: function() {
            this.renderList();
            this.renderDiv();
        },
        renderList: function() {
            var ul = document.createElement("ul");
            octopus.getCatList().forEach(function(cat) {
                var li = document.createElement("li");
                li.innerHTML = '<a href="#">' + cat.name + '</a>';
                li.addEventListener('click', function() {
                    octopus.setCurCat(cat);
                });
                ul.appendChild(li);
            });
            document.body.appendChild(ul);
        },
        renderDiv: function() {
            var div = document.createElement("div");
            div.setAttribute("class", "cat-section");

            var h2 = document.createElement("h2");
            h2.innerHTML = "";

            var p = document.createElement("p");
            p.setAttribute("id", "click");

            var img = document.createElement("img");
            img.addEventListener('click', function() {
                octopus.getCurCat().click();
                p.innerHTML = octopus.getCurCat().counter;
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
            img.setAttribute("src", "catImg/" + cat.name + ".jpg");
            var p = document.getElementById("click");
            p.innerHTML = cat.counter;
        }
    };

    var octopus = {
        init: function() {
            view.init();
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
        }
    };

    octopus.init();
})();
