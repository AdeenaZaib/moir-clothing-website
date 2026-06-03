(function () {
    document.querySelectorAll('.item-section').forEach(function (section) {
        var items = Array.from(section.querySelectorAll('.item-box'));
        if (items.length <= 3) return;

        var current = 0;
        var visible = 3;

        var wrapper = document.createElement('div');
        wrapper.className = 'slider-container';
        section.parentNode.insertBefore(wrapper, section);
        wrapper.appendChild(section);

        var prevBtn = document.createElement('button');
        prevBtn.className = 'slider-btn prev-btn';
        prevBtn.innerHTML = '&#8592;';
        prevBtn.setAttribute('aria-label', 'Previous');

        var nextBtn = document.createElement('button');
        nextBtn.className = 'slider-btn next-btn';
        nextBtn.innerHTML = '&#8594;';
        nextBtn.setAttribute('aria-label', 'Next');

        wrapper.insertBefore(prevBtn, section);
        wrapper.appendChild(nextBtn);

        function update() {
            items.forEach(function (item, i) {
                item.classList.toggle('slider-hidden', i < current || i >= current + visible);
            });
            prevBtn.disabled = current === 0;
            nextBtn.disabled = current + visible >= items.length;
        }

        prevBtn.addEventListener('click', function () {
            if (current > 0) { current--; update(); }
        });

        nextBtn.addEventListener('click', function () {
            if (current + visible < items.length) { current++; update(); }
        });

        update();
    });
})();
