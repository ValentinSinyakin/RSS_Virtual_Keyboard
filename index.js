
    let popap = document.createElement('div')
    popap.innerHTML = `
  <div class="popap">
  <div class="container">
        <div class="night_mode">
            <div class="toggle_circle"></div>
        </div>
        <div class="change_light_color">
            <div class="colors">
                <input class="colors_input" type="color" >
            </div>
        </div>
        <div class="keyboard_wrapp">
            <div class="keyboard_lights"></div>
            <div class="keyboard_keys">
            <p>Windows 10</p>
                <div class="row">
                    <div class="keys Backquote" data="96">~</div>
                    <div class="keys" data="49">1</div>
                    <div class="keys" data="50">2</div>
                    <div class="keys" data="51">3</div>
                    <div class="keys" data="52">4</div>
                    <div class="keys" data="53">5</div>
                    <div class="keys" data="54">6</div>
                    <div class="keys" data="55">7</div>
                    <div class="keys" data="56">8</div>
                    <div class="keys" data="57">9</div>
                    <div class="keys" data="48">0</div>
                    <div class="keys" data="45">-</div>
                    <div class="keys" data="61">=</div>
                    <div class="keys backspace_key" data="8">Backspace</div>
                </div>
                <div class="row">
                    <div class="keys tab_key">Tab</div>
                    <div class="keys">Q</div>
                    <div class="keys">W</div>
                    <div class="keys">E</div>
                    <div class="keys">R</div>
                    <div class="keys">T</div>
                    <div class="keys">Y</div>
                    <div class="keys">U</div>
                    <div class="keys">I</div>
                    <div class="keys">O</div>
                    <div class="keys">P</div>
                    <div class="keys">{</div>
                    <div class="keys">}</div>
                    <div class="keys slash_key">&#8260;</div>
                </div>
                <div class="row">
                    <div class="keys caps_lock_key">Caps Lock</div>
                    <div class="keys">A</div>
                    <div class="keys">S</div>
                    <div class="keys">D</div>
                    <div class="keys">F</div>
                    <div class="keys">G</div>
                    <div class="keys">H</div>
                    <div class="keys">J</div>
                    <div class="keys">K</div>
                    <div class="keys">L</div>
                    <div class="keys">;</div>
                    <div class="keys">"</div>
                    <div class="keys enter_key">Enter</div>
                </div>
                <div class="row">
                    <div class="keys shift_key shift_left">Shift</div>
                    <div class="keys">Z</div>
                    <div class="keys">X</div>
                    <div class="keys">C</div>
                    <div class="keys">V</div>
                    <div class="keys">B</div>
                    <div class="keys">N</div>
                    <div class="keys">M</div>
                    <div class="keys"><</div>
                    <div class="keys">></div>
                    <div class="keys">/</div>
                    <div class="keys">?</div>
                    <div class="keys shift_key shift_right">Shift</div>
                </div>
                <div class="row">
                    <div class="keys ctrl_key ctrl_left">Ctrl</div>
                    <div class="keys win_key">Win</div>
                    <div class="keys alt_key alt_left">Alt</div>
                    <div class="keys space_key"></div>
                    <div class="keys alt_key alt_right">Alt</div>
                    <div class="keys">Fn</div>
                    <div class="keys ctrl_key ctrl_right">Ctrl</div>
                </div>
            </div>
        </div>
        <input class="text" type="text">
    </div>
  </div>`
  
    document.body.append(popap)
/*   ------------------------------------------- */
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');
let ctrl_left = document.querySelector('.ctrl_left');
let win_key = document.querySelector('.win_key');
let backquote = document.querySelector('.Backquote');
let slash_key = document.querySelector('.slash_key');
let ctrl_right = document.querySelector('.ctrl_right');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
        /* ------ */
        if(e.code == 'ControlLeft') {
            ctrl_left.classList.add('active');
        }
        if(e.code == 'MetaLeft') {
            win_key.classList.add('active');
        }
    
        if(e.code == 'Backquote') {
            backquote.classList.add('active');
        }
        
        if(e.code == 'Backslash') {
            slash_key.classList.add('active');
        }
        
        if(e.code == 'ControlRight') {
            ctrl_right.classList.add('active');
        }

    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
    
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
        if(e.code == 'ControlLeft') {
            ctrl_left.classList.remove('active');
            ctrl_left.classList.remove('remove')
        }
        if(e.code == 'MetaLeft') {
            win_key.classList.remove('active');
            win_key.classList.remove('remove')
        }
        if(e.code == 'Backquote') {
            backquote.classList.remove('active');
            backquote.classList.remove('remove')
        }
        if(e.code == 'Backslash') {
            slash_key.classList.remove('active');
            slash_key.classList.remove('remove')
        }
        if(e.code == 'ControlRight') {
            ctrl_right.classList.remove('active');
            ctrl_right.classList.remove('remove')
        }
    }
})


night_mode.addEventListener('click',function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

colors_input.addEventListener('input',function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colors_input.value
    }
    keyboard_lights.style.background = colors_input.value;
})


 keys.forEach(key => {
    key.onmousedown = () => key.classList.add('active');
    key.onmouseup = () => key.classList.remove('active');

}) 

const keyboard = [
    96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114,
    116, 121, 117, 105, 111, 112, 91, 93, 46, 20, 97, 115, 100, 102, 103, 104,
    106, 107, 108, 59, 222, 92, 13, 16, 122, 120, 99, 118, 98, 110, 109, 44, 46,
    47, 38, 16, 17, 17, 18, 32, 18, 37, 40, 39, 17,
  ];

  const inputText = document.querySelector('.text');
const cc = function (event) {
  document
    .querySelector(`.keys[data="${event.keyCode}"]`)
    inputText.focus();
};
document.onkeypress = cc;
document.onkeydown = cc;
document.querySelectorAll('.keys').forEach((element) => {
  element.onclick = function (event) {
    
    inputText.value += element.textContent;
  };
});


keys.forEach(key => {
    key.onmousedown = () => key.classList.add('active');
    key.onmouseup = () => key.classList.remove('active');
}) 

document.querySelector('.space_key ').textContent = ' ';















alert( "Прошу простить,что пришлось вам подождать.Попал в больницу и вышел только во вторник, ссылку на деплой задания делала моя деввушка.поэтому она ведёт main" );



