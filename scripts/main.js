const text1='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus voluptas repellat amet aliquam voluptatem officiis ex, dolorem eveniet veniam id rem animi, sequi quaerat recusandae!  Aliquid velit ad porro reiciendis laboriosam maxime asperiores?';
const text2='Esse maxime praesentium accusantium rerum, voluptate temporibus veniam nihil molestias impedit quaerat ipsa vero sapiente, sunt aperiam quidem perspiciatis, molestiae recusandae modi suscipit consequatur distinctio aliquam nam consectetur. Odio, dolores ut.';
let qIntro=document.querySelector('#intro');
qIntro.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/desktoptab.jpg');
    img.setAttribute('alt', 'Kosminė stotis');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('Intro');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});
let qWork=document.querySelector('#work');
qWork.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/desktoptab.jpg');
    img.setAttribute('alt', 'Kosminė stotis');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('Work');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});
let qAbout=document.querySelector('#about');
qAbout.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/desktoptab.jpg');
    img.setAttribute('alt', 'Kosminė stotis');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('About');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});
let qContacts=document.querySelector('#contacts');
qContacts.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/desktoptab.jpg');
    img.setAttribute('alt', 'Kosminė stotis');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('Contacts');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});