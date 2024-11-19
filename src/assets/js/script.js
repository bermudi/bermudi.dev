document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector("#container"),
        tile = document.querySelector(".tile");

  if (container && tile) {
    for(let i = 0; i < 1599; i++) {
      container.appendChild(tile.cloneNode());
    }
  } else {
    console.error('Container or tile element not found.');
  }

  const profileImg = document.getElementById('profile-img');

  if (profileImg) {
    const profileImages = [
      'profile-01.png',
      'profile-02.png',
      'profile-03.jpeg',
      'profile-04.png',
      'profile-05.jpeg',
      'profile-06.jpeg'
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