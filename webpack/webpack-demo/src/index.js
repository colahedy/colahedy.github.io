import _ from 'lodash';
import './style.css';
import Icon from './background.jpg';
import Data from './data.xml';
    function component() {
        var element = document.createElement('div');

        // lodash（现在由这个脚本导入）
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

        //将图像添加到现有的div
        var img = new Image();
        img.src = Icon;
        element.appendChild(img)

        console.log(Data);

        return element;
    }

document.body.appendChild(component());