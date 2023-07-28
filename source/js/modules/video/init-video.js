function findVideos() {
  const videos = document.querySelectorAll('[data-video]');
  videos.forEach(function (video) {
    setupVideo(video);
  });
}

function setupVideo(video) {
  let link = video.querySelector('.intro__slide-link');
  let button = video.querySelector('.intro__slide-button');
  let id = video.dataset.src;

  button.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is-active');
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', id);
  iframe.classList.add('video__media');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted - media; gyroscope; picture-in-picture; web-share');

  return iframe;
}

export {findVideos};
