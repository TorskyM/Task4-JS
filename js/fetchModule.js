/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const fetchData = {
  init: () => {
    const blogImage = document.querySelectorAll('.blog-image');
    const dateNumber = document.querySelectorAll('.blog-date-number');
    const dateMonth = document.querySelectorAll('.blog-month');
    const blogTitle = document.querySelectorAll('.blog-title');
    const blogParagraph = document.querySelectorAll('.blog-paragraph');
    const blogViewNumber = document.querySelectorAll('.blog-view-number');
    const blogSpeechNumber = document.querySelectorAll('.blog-speech-number');
    const blogsHeading = document.querySelectorAll('.blogs-heading');
    const blogsImage = document.querySelectorAll('.blogs-image');
    const blogsParagraph = document.querySelectorAll('.blogs-paragraph');
    const API = 'http://localhost:3000/api/blogs';
    const dateFormat = {
      day: {
        day: '2-digit',
      },
      month: {
        month: 'short',
      },
      full: {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      },
    };

    fetch(API)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < blogImage.length; i++) {
            const date = new Date(data.blogs[i].published);
            const dataLeng = data.blogs.length;
            blogTitle[i].innerHTML = data.blogs[i].title;
            blogParagraph[i].innerHTML = data.blogs[i].description;
            blogImage[i].src = data.blogs[i].previewImg;
            blogViewNumber[i].innerHTML = data.blogs[i].watched;
            blogSpeechNumber[i].innerHTML = data.blogs[i].comments;
            dateNumber[i].innerHTML = date.toLocaleDateString('en-GB', dateFormat.day);
            dateMonth[i].innerHTML = date.toLocaleDateString('en-GB', dateFormat.month);
            blogsParagraph[i].innerHTML = date.toLocaleDateString('en-GB', dateFormat.full);
            blogsImage[i].src = data.blogs[i].previewImg;
            blogsHeading[i].innerHTML = data.blogs[i].title;
          }
        });
  }};

export default fetchData;
