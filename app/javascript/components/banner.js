import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Create cocktails", "Edit cocktails", "Share your creations"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
