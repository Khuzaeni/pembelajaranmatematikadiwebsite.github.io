var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Sifat-sifat Eksponen',
        'name': 'Sifat-sifat Eksponen.mp4',
        'duration': '27:55',
    },
    {
        'id': 'a2',
        'title': 'Fungsi Eksponen',
        'name': 'Fungsi Eksponen.mp4',
        'duration': '20:12',
    },
    {
        'id': 'a3',
        'title': 'Pertidaksamaan Eksponen',
        'name': 'Pertidaksamaan Eksponen.mp4',
        'duration': '39:50',
    },

    {
        'id': 'a4',
        'title': 'Konsep Dasar dan Sifat-sifat Logaritma',
        'name': 'Konsep Dasar dan Sifat-sifat Logaritma.mp4',
        'duration': '22:51',
    },
    {
        'id': 'a5',
        'title': 'Fungsi Logaritma',
        'name': 'Fungsi Logaritma.mp4',
        'duration': '14:05',
    },
    {
        'id': 'a6',
        'title': 'Persamaan Logaritma',
        'name': 'Persamaan Logaritma.mp4',
        'duration': '19:46',
    },
    {
        'id': 'a7',
        'title': 'Pertidaksamaan Logaritma',
        'name': 'Pertidaksamaan Logaritma.mp4',
        'duration': '21:43',
    },
    {
        'id': 'a8',
        'title': 'Konsep Dasar Vektor',
        'name': 'Konsep Dasar Vektor Vektor Bagian 1.mp4',
        'duration': '17:12',
    },   
    {
        'id': 'a9',
        'title': 'Vektor Posisi',
        'name': 'Vektor Posisi Vektor Bagian 2.mp4',
        'duration': '13:50',
    },   
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});