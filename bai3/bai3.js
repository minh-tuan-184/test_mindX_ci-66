class appToShortenLink{
    $container = document.createElement('div');
    $slogan = document.createElement('div');
    $box = document.createElement('div');
    $title = document.createElement('div');
    $inputBox = document.createElement('input');
    $note = document.createElement('div');

    constructor() {
        this.$container.appendChild(this.$slogan);
        this.$container.appendChild(this.$box);
        this.$box.appendChild(this.$title);
        this.$box.appendChild(this.$inputBox);
        this.$box.appendChild(this.$note);


        this.$slogan.innerHTML = 'The privacy-friendly URL Shortener';
        this.$title.innerHTML = 'Shorten link: ' 
        this.$note.innerHTML = 'I have tried to figure out how to use API but it not working as I expected, but I wanna left this link to let you know I have tried:  https://app.bitly.com/BlahekxMPkm/bitlinks/'
    }
}

export {appToShortenLink};
