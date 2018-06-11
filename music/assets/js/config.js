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
        listMaxHeight: '400px',
        lrcType: 3,
	theme: '#000000',
        audio: [{
            name: 'Let Me Down Slowly',
            artist: 'Alec Benjamin',
            url: 'https://drive.google.com/uc?export=download&id=1sv9f57RlnoGRJxZMxDjS2SNwLR7fJF3b',
            cover: '',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Bad Karma',
            artist: 'Axel Thesleff',
            url: 'https://drive.google.com/uc?export=download&id=1WBxI-Na09K1qTdqanEEM8pKXyErSda88',
            cover: '',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Break it Down',
            artist: 'Kidz In The Hall',
            url: 'https://drive.google.com/uc?export=download&id=1S_DZnnwLxOKLATYr5v5IXIVbUCkyn1b3',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Tokyo Drift',
            artist: 'Teriyaki Boyz',
            url: 'https://drive.google.com/uc?export=download&id=1Uc5PKDIf6LC1QhnkIZTQNwSABVeJAUJ_',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Top Songs',
            artist: 'Skillet',
            url: 'https://drive.google.com/uc?export=download&id=1j27KxrLTaIsWhhKQq6nut0REcV8JRDes',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'New Face',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1tL5cyymzw-i2rvNyFH0yoHpX4vYcEymp',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'I LUV IT',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1N_TWPqyX_LMS27ZYNa1p0vWlXvjFh9-6',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'GENTLEMAN',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1k3Inj6b2C_J_Q5WknoRL-OhzLxaCaoBt',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'DADDY',
            artist: 'PSY',
            url: 'https://drive.google.com/uc?export=download&id=1Ndk2BJxkNfWAnXm_nollppHZkuu970lr',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Zombie',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1os0GxPuR1ZFkEQtigpx-Sk8w8n0caB4L',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Zig Zag',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1xroflm5QLnBze7WmOrwF6LNNx5-54uUC',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Worst Day of My Life ',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1l_sbw0PjH9Z1zOhQG77LMqnE2zzG84ja',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Why Do I',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1vqAAKvFDiRfauhYq-hTZJfrxgQ92ITq-',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Umbrella',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1llHm8dNA8Gd7H_LKpc9IISt-xCI-YDUc',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Try everything ',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1iFVDAoo5OLWv5zvW37PMRsW7kZaxOG9D',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'The Zombie Song',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=13Tq7ppa1UciUChJ1cIt26K3RNLrmBB3L',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Superhero',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1KgOau-rrE7aA_tKF-TV6BaD3_N8AC-Kv',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'I need a Hero',
            artist: 'Nightcore S',
            url: 'https://drive.google.com/uc?export=download&id=1ohVtkKTJh8QqW7lr1m0fQcG1nCt0HhGl',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Rockefeller Street',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1JNRx5m6cixuesagVdrw5yq78gG8yiM6E',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Prom Queen',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1LFik6Ib0XyfXfIZ5XHkOP7Us-pQybd9L',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Pretending',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1p5fmnzsqA4ACLHknsK2FgKTj4pihg5hg',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Memes',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1u1OrB2qkhAeG3w7ToDurv2ooPaFuryzJ',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Meet Me On The Battlefield',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=10GMUZWvkIC8aH7aJ8qou7QBfEqB4ayJk',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Legend',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1vRo8hwcJaDHr99klVVy8QSeGqemdIj7h',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Infected',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1eL4qIUj-dy-Or1EITGXzUMfZqOq6otY-',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Infected (Lyrics)',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=18ripzgykBm18q0XD3jfIp6vp4R31imiF',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Ievan Polkka (VSNS Remix)',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=18cxNChCJb7BhfTesRfV8eQVY7vV6INNR',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Blow',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1yG_QDDVqWjEgCSMjT4_EjjC602X945SY',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Shiva ',
            artist: 'Inkyz',
            url: 'https://drive.google.com/uc?export=download&id=1l9NlqDZGXzqxgkIDKfNDBLToRqPwGXMp',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: '60 minute mix of Caravan Palace',
            artist: 'Caravan Palace',
            url: 'https://drive.google.com/uc?export=download&id=1P4M6Q6JsKgeKyGKa-33hPGYeSGqCJ3mc',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Best of ELECTRO SWING Mix March 2018',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1uca46Cw1E9lmmIXSBBdQKWcgsSiB_HDZ',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Ignite',
            artist: 'Nightcore',
            url: 'https://drive.google.com/uc?export=download&id=1H5H_liCchBRtveF0tWz8YYm9Lb2HBhno',
            cover: '',
            lrc: '',
            theme: '#505d6b'
        }]
    });
}
