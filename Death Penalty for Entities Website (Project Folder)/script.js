// 定义生物分类和名字的对象
const bioCategories = {
    "原版生物": [
        "悦灵", "美西螈", "蝙蝠", "蜜蜂", "烈焰人", "猫", "洞穴蜘蛛", "鸡", "鳕鱼", "牛",
        "苦力怕", "海豚", "驴", "溺尸", "远古守卫者", "末影人", "末影螨", "唤魔者", "狐狸",
        "青蛙", "恶魂", "发光鱿鱼", "山羊", "守卫者", "疣猪兽", "马", "尸壳", "羊驼",
        "岩浆怪", "哞菇", "骡", "豹猫", "熊猫", "鹦鹉", "幻翼", "猪", "猪灵", "猪灵蛮兵",
        "掠夺者", "北极熊", "河豚", "兔子", "劫掠兽", "鲑鱼", "绵羊", "潜影贝", "蠹虫",
        "骷髅", "骷髅马", "史莱姆", "蜘蛛", "鱿鱼", "流浪者", "炽足兽", "蝌蚪", "行商羊驼",
        "热带鱼", "海龟", "恼鬼", "村民", "卫道士", "流浪商人", "监守者", "女巫", "凋灵骷髅",
        "狼", "僵尸疣猪兽", "僵尸", "僵尸马", "僵尸村民", "僵尸猪灵", "末影龙", "凋灵",
        "闪电苦力怕", "铁傀儡", "雪傀儡", "旋风人", "犰狳", "嗅探兽", "骆驼"
    ],
    "更好的下界生物": [
        "萤火虫", "氢水母", "娜迦", "蝠猪", "丛林骷髅", "髑"
    ],
    "AdventureZ": [
        "黑石傀儡", "小黑石傀儡", "猪灵兽", "梦魇马", "灵魂收割者", "凋零死灵法师", "凋零傀儡",
        "骷髅先锋", "唤灵者", "烈焰守卫者", "眼球", "虚空之影", "红色真菌", "棕色真菌", "兽人",
        "猛犸象", "虚空碎片", "末影之鲸", "鬣蜥", "紫水晶傀儡", "沙犀", "萨满", "鹿",
        "末影疣猪"
    ],
    // ...（省略了其他分类以节省空间，但格式与上述相同）
    "你将失去的生物群系": [
        "僧帽水母", "南瓜守卫"
    ],
    "Bygone Nether": [
        "猪灵囚犯", "猪灵猎人", "凋灵恼鬼", "诡异末影人", "凋零死士", "凋零蛮兵", "凋零骷髅骑士",
        "凋灵骷髅马"
    ],
    "Charm": [
        "珊瑚鱿鱼", "哞花"
    ],
    "Deeper and Darker": [
        "Sculk Centipede", "Sculk Leech", "Sculk Snapper", "Shattered", "Shriek Worm", "Stalker"
    ],
    "葡园酒香": [
        "骡", "流浪酿酒师"
    ],
    "丰富的生态": [
        "椰子蟹", "骆驼", "企鹅", "松鼠"
    ],
    "伊甸星环": [
        "盘翼"
    ],
    "Friendsandfoes": [
        "铜傀儡", "怒目怪", "冰术师", "幻术师", "大胃怪", "哞花", "淘气鬼", "凝灰岩傀儡", "野火"
    ],
    "Frostiful": [
        "Frostologer", "Chillager", "Biter", "Sparkle", "Spectre", "Specterpillar"
    ],
    "Goblintraders": [
        "哥布林商人", "熔岩哥布林商人"
    ],
    "Goodall": [
        "Rhino", "Dumbo Octopus", "Pelican", "Fennec Fox", "Kiwi", "Manatee", "Seal", "Deer",
        "Flamingo", "Songbird", "Toucan", "Tortoise", "River Turtle", "Owl", "Ant",
        "Grizzly Bear", "Guard"
    ],
    "Meadow": [
        "白化牛", "水牛", "曲奇牛", "奶油牛", "奶牛", "深色牛", "花斑牛", "日落牛", "阴影牛",
        "羊毛牛", "棕熊", "斑点羊", "绒毛羊", "角羊", "墨水羊", "长鼻羊", "拼接羊", "岩石羊",
        "Warped Cow", "Alpine Chicken"
    ],
    "自然主义": [
        "蜗牛", "灰熊", "蝴蝶", "萤火虫", "蛇", "珊瑚蛇", "响尾蛇", "鹿", "冠蓝鸦", "主红雀",
        "金丝雀", "旅鸫", "毛毛虫", "犀牛", "狮子", "大象", "斑马", "长颈鹿", "Hippo", "Vulture",
        "Boar", "Dragonfly", "Catfish", "Alligator", "Bass", "Lizard", "Tortoise", "Duck"
    ],
    "更好的下界岩浆海鱼": [
        "熔岩河豚", "黑曜鱼", "灼热鳕鱼", "骷髅鱼", "凋零鱼", "烈焰鱼", "岩浆怪鱼", "萤石鱼",
        "魂吸鱼", "Fortress Grouper", "Eyeball Fish"
    ],
    "Oxidized": [
        "铜傀儡"
    ],
    "Promenade": [
        "鸭", "繁茂苦力怕", "沉溺者", "Burned", "Frostbitten", "Swampy", "Undead Miner", "Mummy",
        "Glacial Hunter", "Dead Beard", "Immortal"
    ],
    "Takesapillage": [
        "远弓手", "突击手", "重装军"
    ],
    "蜜蜂领域": [
        "蜂蜜史莱姆", "巨蜂", "蜂后"
    ],
    "暮色森林": [
        "信徒（未实现）", "雪怪首领", "武装巨人", "大角羊", "链锤哥布林", "野猪", "砷铅铁寄生虫",
        "砷铅铁守卫", "砷铅铁恶灵", "砷铅铁傀儡", "死灵书", "野鹿", "侏儒兔", "喷火甲虫",
        "巨人矿工", "噩兆方块（未实现）", "树篱蜘蛛", "寄居蟹", "恶狼", "九头蛇", "冰晶",
        "国王蜘蛛", "幻影骑士", "狗头人", "巫妖", "哥布林骑士", "迷宫史莱姆", "米诺菇",
        "牛头人", "迷雾狼", "蚊群", "娜迦", "企鹅", "巨钳甲虫", "谜题羊", "渡鸦",
        "红帽哥布林", "红帽工兵", "悬浮立方（未实现）", "骷髅德鲁伊", "黏液甲虫", "冰雪守卫",
        "冰雪女王", "松鼠", "冰精灵", "集群蜘蛛", "小鸟", "塔木蛀虫", "洞穴巨魔",
        "破碎冰精灵", "暮初恶魂", "寒冬狼", "幽灵", "雪怪", "Firefly", "Woodpecker"
    ]
};

// 这里可以添加函数来处理生物分类和名字的显示，比如通过按钮来选择分类
// ...
document.addEventListener('DOMContentLoaded', function() {
    const backgroundContainer = document.getElementById('background-container');
    const startButton = document.getElementById('startButton');
    const selectionContainer = document.getElementById('selectionContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const confirmButton = document.getElementById('confirmButton');
    const creatureTypeSelect = document.getElementById('creatureType');
    const changeBackgroundButton = document.getElementById('change-background');
    const selectBackgroundButton = document.getElementById('select-background');
    const uploadInput = document.getElementById('upload-input');

    let userSetBackground = false; // 用户是否设置了自定义背景图
    let changeInterval; // 用于存储定时器ID

    const imageFolder = './images/'; // 确保这是正确的路径
    const imagePrefix = 'background';
    const imageSuffix = '.jpg';
    let currentImageIndex = 0;
    const totalImages = 20; 

    function setBackgroundImage(index) {
        const imageName = `${imagePrefix}_${index + 1}${imageSuffix}`;
        backgroundContainer.style.backgroundImage = `url(${imageFolder}${imageName})`;
    }

    function changeBackgroundRandomly() {
        if (!userSetBackground) {
            const randomIndex = Math.floor(Math.random() * totalImages);
            setBackgroundImage(randomIndex);
        }
    }

    function changeBackgroundSequentially() {
        if (!userSetBackground) {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            setBackgroundImage(currentImageIndex);
        }
    }

    changeInterval = setInterval(changeBackgroundSequentially, 60000);

    // 用户点击更换背景按钮时
    changeBackgroundButton.addEventListener('click', changeBackgroundRandomly);

    // 用户点击选择背景图按钮时
    selectBackgroundButton.addEventListener('click', function() {
        uploadInput.click();
    });

    // 用户选择了一个文件后
    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                backgroundContainer.style.backgroundImage = `url(${e.target.result})`;
                userSetBackground = true; // 用户设置了自定义背景图
                clearInterval(changeInterval); // 清除自动更换背景图的定时器
            };
            reader.readAsDataURL(file);
        } else {
            alert('请选择一个有效的图片文件。');
        }
    });

    // 初始背景图
    setBackgroundImage(currentImageIndex);

    // 显示选择界面
    function showSelection() {
        startButton.style.display = 'block';
        selectionContainer.style.display = 'none';
        resultsContainer.style.display = 'none';
    }

    // 随机抽取并显示结果
    function displayRandomCreaturesAndDeaths() {
        const selectedCreatures = bioCategories[creatureTypeSelect.value] || [];
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'block';
        selectionContainer.style.display = 'none';

        for (let i = 0; i < 5; i++) {
            const creature = selectedCreatures[Math.floor(Math.random() * selectedCreatures.length)];
            const death = deaths[Math.floor(Math.random() * deaths.length)];
            const deathDescription = death.split('（')[1].split('）')[0];

            const entry = document.createElement('div');
            entry.className = 'entry';
            entry.innerHTML = `
                <span>${creature}</span>
                <span style="margin-left: 20px;">${death}<br><small class="small-text">(${deathDescription})</small></span>
            `;

            resultsContainer.appendChild(entry);
        }
    }

    // 为开始按钮添加点击事件监听器
    startButton.addEventListener('click', showSelection);

    // 为确认按钮添加点击事件监听器
    confirmButton.addEventListener('click', displayRandomCreaturesAndDeaths);
});

function openPopup(authorId) {
    // 根据authorId获取相应的内容并填充到弹出窗口中
    // ...
    const popup = document.getElementById('authorPopup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('authorPopup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

var soundFiles = [
    'C:/Users/1/Desktop/Sound/sound1.mp3',
    'C:/Users/1/Desktop/Sound/sound2.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',
    'C:/Users/1/Desktop/Sound/sound3.mp3',// 增加的sound3以保证随机到sound3的概率更大
    'C:/Users/1/Desktop/Sound/Shulker_ambient4.mp3',
    'C:/Users/1/Desktop/Sound/Enderman_teleport1.mp3',
    // 更多音效文件...
];