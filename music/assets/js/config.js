docute.init({
    landing: 'landing.html',
    title: 'Music',
    plugins: [
        evanyou(),
        player()
    ]
});
function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayer () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer'),
        mini: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: '190px',
        lrcType: 3,
	theme: '#000000',
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}
