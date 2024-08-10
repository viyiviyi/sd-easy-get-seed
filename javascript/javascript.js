(function () {
    onUiUpdate(function () {
        // 获取所有的img标签
        if (!opts) return;
        function band(p = "txt") {
            let btn = document.getElementById(p + "2img_reuse_seed");
            let info = document.getElementById("html_info_" + p + "2img");
            if (!btn || !info) return;

            let nBtn = document.createElement("button");
            nBtn.innerHTML = btn.innerHTML;
            nBtn.className = btn.className;
            nBtn.removeEventListener;
            nBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                let infoText = info.innerText;
                if (infoText.indexOf("Seed:") != -1) {
                    let seed = infoText.split("Seed:")[1].split(",")[0].trim();
                    document.getElementById(p + "2img_seed").getElementsByTagName("input")[0].value = seed;
                }
            });
            btn.parentNode.replaceChild(nBtn, btn);
            return true
        }
        band('txt')
        band('img')
    });
})();
