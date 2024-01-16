// script.js

document.addEventListener('DOMContentLoaded', function() {
    // 示例功能：处理订单折扣信息显示
    const discountTriggers = document.querySelectorAll('.discount-info span');
    const orderButton = document.querySelector('.order-button');

    discountTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            const discountAmount = this.innerText.match(/\$(\d+)/)[1];
            updateOrderButton(discountAmount);
        });

        trigger.addEventListener('mouseleave', function() {
            updateOrderButton(0);
        });
    });

    function updateOrderButton(discountAmount) {
        if (discountAmount > 0) {
            orderButton.innerText = `在折扣后订购 > $${discountAmount} OFF`;
        } else {
            orderButton.innerText = '立即订购 >>';
        }
    }

    // 此处可以添加更多功能，如商品轮播、购物车数量更新等
});
