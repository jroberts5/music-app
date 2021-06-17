const song_img = document.querySelector('#song-image');
const song_title = document.querySelector('.song-title');
const song_artist = document.querySelector('.song-artist');
const next_song = document.querySelector('#next-song');
const play_btn = document.querySelector('#play-btn');
const play_ico = document.querySelector('#play-ico');
const prev_btn = document.querySelector('#prev-btn');
const nxt_btn = document.querySelector('#nxt-btn');
const audio_player = document.querySelector('#audio-player');


let currentSongIndex;
let nextSongIndex;
let song;

let songs = [
    {
        title: 'Galactic Swing',
        artist: 'Florida Skyline',
        song_path: 'https://www.mboxdrive.com/Wczczxb65SuD.128.mp3',
        img_path: 'https://i1.sndcdn.com/artworks-000230788251-9jo8c0-t500x500.jpg'
    },
    {
        title: 'Gaze',
        artist: 'A.L.I.S.O.N',
        song_path: 'https://www.mboxdrive.com/my7tch848rUz.128.mp3',
        img_path: 'https://i1.sndcdn.com/artworks-000404159808-1hnxdw-t500x500.jpg'

    },
    {
        title: 'Flare',
        artist: 'Jasper De Ceuster',
        song_path: 'https://www.mboxdrive.com/FkeztSOCBVEA.128.mp3',
        img_path: 'https://i1.sndcdn.com/artworks-000647493079-3n8mvk-t500x500.jpg'
    },
    {
        title: 'Infinite Adventures',
        artist: 'Rosentwig',
        song_path: 'https://www.mboxdrive.com/WdLdYyRw5oms.128.mp3',
        img_path: 'https://i1.sndcdn.com/artworks-000426091929-gv1iwo-t500x500.jpg'
    }
]

play_btn.addEventListener('click', TogglePlaySong);
nxt_btn.addEventListener('click', () => ChangeSong());
prev_btn.addEventListener('click', () => ChangeSong(false));

InitPlayer();

function InitPlayer() {
    currentSongIndex = 0;
    nextSongIndex = currentSongIndex + 1;
    UpdatePlayer();
}

function UpdatePlayer() {
    song = songs[currentSongIndex];
    song_img.style = "background-image: url('" + song.img_path + "')";
    song_title.innerText = song.title;
    song_artist.innerText = song.artist;
    next_song.innerText = songs[nextSongIndex].title + " by " + songs[nextSongIndex].artist;
    audio_player.src = song.song_path;
}

function TogglePlaySong (){
    if(audio_player.paused) {
        audio_player.play();
        play_ico.classList.remove('fa-play');
        play_ico.classList.add('fa-pause');
    } else {
        audio_player.pause();
        play_ico.classList.remove('fa-pause');
        play_ico.classList.add('fa-play');
    }
}

function ChangeSong (next = true) {
    if (next) {
        currentSongIndex++;
        nextSongIndex = currentSongIndex + 1;

        if (currentSongIndex > song.length - 1 ) {
            currentSongIndex = 0;
            nextSongIndex = currentSongIndex + 1;

        }

        if(nextSongIndex > song.length - 1) {
            nextSongIndex = 0;
        }
    } else {
        currentSongIndex--;
        nextSongIndex = currentSongIndex + 1;

        if (currentSongIndex < 0) {
            currentSongIndex = song.length - 1;
            nextSongIndex = 0
        }
    }
    UpdatePlayer();
    TogglePlaySong();
}

