# Редизайн на сайта на СМГ

Тук е кода на сайта, за хора с желание да се включват в разработката. Струва си за CV-то.

## Как да пусна сайта на компа си?

0. Първо се регистрираш в [github](https://github.com/join?source=header-home)
1. Сега Fork-ваш проекта в твоя профил. За да направиш това цъкаш горе дясно бутона Fork.
2. Инсталираш си [Node.js](https://nodejs.org/en/) и [Git](https://git-scm.com/) .
3. Цъкаш снимката си горе в дясно, Your profile, цъкаш repositories и намираш където пише Tolumbas/SmgSait.
4. Цъкаш зеления бутон Clone or download и копираш линка който ти дава.
5. Минимизираш браузъра и цъкаш **Shift + десен бутон** на десктопа и избираш *Open Command window here*
6. В конзолата пишеш тези команди след като заредят. //Тва ще зарежда доста време
```
git clone [rightClick + Paste]
cd SmgSait
npm i gulp-cli -g
npm install
gulp
```
Най-накрая отвори [http://localhost:8080](http://localhost:8080) и виж сайта.
> **За да спреш сървара напиши в конзолата __CTRL + C__**

## Ок, имам сайта, са к'во да правя?
Задачите се намират в [Issues таба](https://github.com/Tolumbas/SmgSait/issues) на този проект. 

## Мале колко много папки! Къде е кода?
```
|- app          // Тук е логиката на сървъра и бакенда, за сега е празен
|- history      // Тук са дизайните, главно изображения 
|- html         // Тук ще са отделните модули на html, които ще се рендерват от бакенда , Празно за сега
|- js           // Тук са JavaScript ES6 модулите за фронтенда. 
|- node_modules // Тук са библиотеки, не пипай 
|- public       // Тък са файлове за фронтенда
    |- dest           // Тук са компилираните файлове от папката js и sass
    |- imgs           // Изображения за сайта 
    |- libraries      // Библиотеки за фронтенда
    - index.html      //За сега тва е самия сайт.
|- sass         // Тук са CSS/SASS файловете за фронтенда 
- .gitignore    // Не пипай
- gulpfile.js   // Не пипай
- package.json  // Не пипай
- README.md     // Това е този файл
```
## Готов съм с кода, сега как да ти го пратя?
В папката на компютъра си отваряш конзолата и пишеш
```
git add .
git commit -a -m"kratko opisanie na tova koeto si napravil"
git push (Ще те пита за username и парола в github)
```
Отваряш github.com, влизаш си в профила, цъкаш си снимката и отиваш където е проекта и цъкаш *New pull Request*, описваш кво си
направил, този път в подробности, submit или там квото има и след това чакаш
