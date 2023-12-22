// Elements
const poetsPicture = document.querySelector('[data-name="profile-picture"]');
const poetsName = document.querySelector('[data-name="profile-picture"] + p');
const poem = document.querySelectorAll('#poem p');
const paginationBtns = document.querySelectorAll('#paginations #btns span');

// Sadi Inforamations
const sadi_picture = 'url(../1/pictures/sadi.jpg)';
const sadi_name = 'سعدی شیرازی'
const sadi_poem = [
  'ای ساربان آهسته ران کارام جانم می رود',
  'وان دل که با خود داشتم با دلستانم می رود',
  'من مانده ام مهجور از او بیچاره و رنجور از او',
  'گویی که نیشی دور از او بر استخوانم می رود'
];

// Hafez Inforamations
const hafez_picture = 'url(../1/pictures/hafez.jpg)';
const hafez_name = 'حافظ شیرازی';
const hafez_poem = [
  'راهیست راه عشق که هیچش کناره نیست',
  'آنجا جز آن که جان بسپارند چاره نیست',
  'هر گه که دل به عشق دهی خوش دمی بود',
  'در کار خیر حاجت هیچ استخاره نیست'
];

// Molana Inforamations
const molana_picture = 'url(../1/pictures/molana.jpg)';
const molana_name = 'مولانا';
const molana_poem = [
  'جان من و جهان من، روی سپید تو شده‌ست',
  'عاقبتم چنین شود، مرگ من و بقای تو',
  'از تو برآید از دلم، هر نفس و تنفسم',
  'من نروم ز کوی تو، تا که شوم فنای تو'
];

// Khayam Inforamations
const khayam_picture = 'url(../1/pictures/khayam.jpg)';
const khayam_name = 'خیام نیشابوری';
const khayam_poem = [
  'این کوزه چو من عاشق زاری بوده است',
  'در بند سر زلف نگاری بوده‌ست',
  'این دسته که بر گردن او می‌بینی',
  'دستی‌ست که برگردن یاری بوده‌ست'
];

// Events
window.addEventListener('load', () => {
  poetsName.textContent = sadi_name;
  poetsPicture.style.backgroundImage = sadi_picture;
  for (const [index, p] of poem.entries()) {
    p.textContent = sadi_poem[index];
  }
});

for (const [index, btn] of paginationBtns.entries()) {
  btn.addEventListener('click', () => {
    
    if (index === 0) {
      poetsName.textContent = sadi_name;
      poetsPicture.style.backgroundImage = sadi_picture;
      for (const [index, p] of poem.entries()) {
        p.textContent = sadi_poem[index];
      }
    }
    
    if (index === 1) {
      poetsName.textContent = hafez_name;
      poetsPicture.style.backgroundImage = hafez_picture;
      for (const [index, p] of poem.entries()) {
        p.textContent = hafez_poem[index];
      }    
    }

    if (index === 2) {
      poetsName.textContent = molana_name;
      poetsPicture.style.backgroundImage = molana_picture;
      for (const [index, p] of poem.entries()) {
        p.textContent = molana_poem[index];
      }
    }
    
    if (index === 3) {
      poetsName.textContent = khayam_name;
      poetsPicture.style.backgroundImage = khayam_picture;
      for (const [index, p] of poem.entries()) {
        p.textContent = khayam_poem[index];
      }
    }

    for (let i = 0; i <= 3; i++) {
      if (i === index) {
        paginationBtns[i].classList.add('active');
      }else {
        paginationBtns[i].classList.remove('active');
      }
    }
  });
}