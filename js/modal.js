const galleries = {
  'gallery-fa': [
    { src: 'imgs/Still_life_1.png', title: 'Fine Arts 1', description: 'Everyday Essentials in Still Life' },
    { src: 'imgs/Still_life_2.png', title: 'Fine Arts 2', description: 'Reflections of Simplicity' },
    { src: 'imgs/Still_life_3.png', title: 'Fine Arts 3', description: 'The Elegance of Oil and Freshness' },
    { src: 'imgs/Still_life_4.png', title: 'Fine Arts 4', description: 'Gifts from A Basket of Nature' },
  ],
  'gallery-gd': [
    { src: 'imgs/gd1.jpg', title: 'Graphic Design 1', description: 'Flavor Journey: A Sweet Exploration of Cities' },
    { src: 'imgs/gd2.jpg', title: 'Graphic Design 2', description: 'Guard & Fuwe: Strategic Branding in Cards' },
    { src: 'imgs/gd3.jpg', title: 'Graphic Design 3', description: 'Print Production Manual: A Guide to Perfection' },
    { src: 'imgs/gd4.jpg', title: 'Graphic Design 4', description: 'Funwe Studio Business Cards: Minimalism Meets Boldness' },
    { src: 'imgs/gd5.jpg', title: 'Graphic Design 5', description: 'Secret Mission Poster: Gamified Visual Communication' },
  ],
  'gallery-idt': [
    { src: 'imgs/idt1.jpg', title: 'Information Design 1', description: 'EcoYummy Branding Across Devices' },
    { src: 'imgs/idt2.jpg', title: 'Information Design 2', description: 'Milestones of My Journey: A Timeline of Growth' },
    { src: 'imgs/idt3.jpg', title: 'Information Design 3', description: 'Course Registration Portal: A Seamless Academic Planning Experience' },
    { src: 'imgs/idt4.jpg', title: 'Information Design 4', description: 'Pandemic Ripple Visualizing the Economis Impact of the Pandemic Across Different U.S. Sectors' },
  ],
};

// 全局变量
let currentGallery = [];
let currentIndex = 0;

// 设置模态框内容
function setModalImage(src, title, description, index = null) {
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('imageModalLabel');
  const modalDescription = document.getElementById('modalDescription');

  modalImage.src = src;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  if (index !== null) {
    currentIndex = index;
  }
}

// 初始化主图片点击事件
const mainImages = document.querySelectorAll('.gallery-img');
mainImages.forEach((img) => {
  img.addEventListener('click', () => {
    const group = img.getAttribute('data-group'); // 获取图片组名
    currentGallery = galleries[group] || []; // 加载对应的子画廊

    if (currentGallery.length > 0) {
      const { src, title, description } = currentGallery[0]; // 加载第一张图片
      setModalImage(src, title, description, 0);
    }
  });
});

// 切换到上一张图片
document.getElementById('prevImage').addEventListener('click', () => {
  if (currentGallery.length === 0) return; // 无图片直接返回
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  const { src, title, description } = currentGallery[currentIndex];
  setModalImage(src, title, description);
});

// 切换到下一张图片
document.getElementById('nextImage').addEventListener('click', () => {
  if (currentGallery.length === 0) return; // 无图片直接返回
  currentIndex = (currentIndex + 1) % currentGallery.length;
  const { src, title, description } = currentGallery[currentIndex];
  setModalImage(src, title, description);
});

// 设置模态框内容的函数
function setModalImage(src, description) {
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');

  // 设置模态框的图片和描述内容
  modalImage.src = src;
  modalDescription.textContent = description;
}

// 初始化地图点击事件
const clickableMaps = document.querySelectorAll('.clickable-map');
clickableMaps.forEach((map) => {
  map.addEventListener('click', () => {
    // 从HTML中获取图片和描述
    const src = map.getAttribute('data-bs-src'); // 假设将图片路径存储在data-bs-src中
    const description = map.getAttribute('data-bs-description'); // 假设描述存储在data-bs-description中

    // 设置模态框内容
    setModalImage(src, description);
  });
});
