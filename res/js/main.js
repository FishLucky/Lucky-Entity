document.addEventListener('DOMContentLoaded',function()
{
    // 创建弹窗元素
    const popup = document.createElement('tip');
    popup.id = 'popup';
    popup.style.display = 'none'; // 初始时隐藏弹窗

    // 创建标题
    const title = document.createElement('type');
    const typeElement = document.getElementById('type');
    title.style.color = "#d2d206";
    if (typeElement)  title.textContent = typeElement.value;
    if (title.textContent == "挑战已达成！")  title.style.color = '#d273d2';
    if (!typeElement)
    {
        title.textContent = '出错了！';
        title.style.color = "red";
    }

    // 创建内容
    const content = document.createElement('text');
    const textElement = document.getElementById('text');
    if (textElement)  content.textContent = textElement.value;
    if (!textElement)  content.textContent = '真不好意思';

    // 创建介绍
    const intro = document.createElement('intro');
    const introElement = document.getElementById('intro');
    if (introElement)  intro.textContent = introElement.value;
    if (!introElement)  intro.textContent = '请立即联系 ED_Builder';

    // 创建图片元素
    const img = document.createElement('img');
    const imgElement = document.getElementById('img-src');
    if (imgElement) {
        img.src = imgElement.value;
    } else {
        img.src = '/assets/icon.png';
    }
    img.style.width = '80px';
    img.style.height = '80px';

    // 添加到弹窗
    popup.appendChild(img);
    popup.appendChild(title);
    popup.appendChild(content);
    popup.appendChild(intro);

    // 将弹窗添加到页面
    document.body.appendChild(popup);

    // 显示弹窗
    function showPopup() {
        popup.style.display = 'block';
        popup.style.animation = 'slideIn 0.5s forwards';
    }

    // 隐藏弹窗
    function hidePopup() {
        popup.style.animation = 'slideOut 0.5s forwards';
    }

    // 页面加载时直接显示弹窗
    showPopup();
    setTimeout(hidePopup, 5000);
});