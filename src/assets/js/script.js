document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector("#container"),
    tile = document.querySelector(".tile");

  if (container && tile) {
    for (let i = 0; i < 1599; i++) {
      container.appendChild(tile.cloneNode());
    }
  } else {
    console.error('Container or tile element not found.');
  }

  const profileImg = document.getElementById('profile-img');

  if (profileImg) {
    const profileImages = [
      'profile-01.webp',
      'profile-02.webp',
      'profile-03.webp',
      'profile-04.webp',
      'profile-05.webp',
      'profile-06.webp'
    ];

    const getRandomProfileImage = () => {
      const randomIndex = Math.floor(Math.random() * profileImages.length);
      return profileImages[randomIndex];
    };

    const morphProfileImage = () => {
      profileImg.style.opacity = 0;

      setTimeout(() => {
        profileImg.src = `/assets/img/${getRandomProfileImage()}`;
        profileImg.onload = () => {
          profileImg.style.opacity = 1;
        };
      }, 500);
    };

    setInterval(morphProfileImage, 10000);
  } else {
    console.error('Profile image element not found.');
  }

});