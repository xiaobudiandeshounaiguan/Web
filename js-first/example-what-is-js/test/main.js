const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const storyText = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";
const insertX = ['怪兽威利', '大老爹', '圣诞老人'];
const insertY = ['肯德基', '迪士尼乐园', '白宫'];
const insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let x = randomValueFromArray(insertX);
    newStory = newStory.replaceAll(":inserta:", x);
    newStory = newStory.replace(":insertb:", randomValueFromArray(insertY));
    newStory = newStory.replace(":insertc:", randomValueFromArray(insertZ));
    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('李雷', name);
    }

    if (document.getElementById("american").checked) {
        let weight = Math.round(286);
        let temperature = Math.round(94);

        weight += ' 华氏度';
        temperature += ' 榜';

        newStory = newStory.replace('34 摄氏度', temperature);
        newStory = newStory.replace('130 公斤', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}