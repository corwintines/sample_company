window.onload = function() {
  splash_fade_in();
  about_fade_in();
  process_fade_in();
  pre_processing_fade_in();
  insertion_fade_in();
  post_processing_fade_in();
  targetting_fade_in();
  contact_fade_in();
};

window.onscroll = function() {
  splash_fade_in();
  about_fade_in();
  process_fade_in();
  pre_processing_fade_in();
  insertion_fade_in();
  post_processing_fade_in();
  targetting_fade_in();
  contact_fade_in();
};

function splash_fade_in() {
  var splash_video = document.getElementById('splash-video').getBoundingClientRect().y;
  if (splash_video < 200 && splash_video > -150) {
    var splash_video_div = document.getElementById('splash-video');
    splash_video_div.classList.add('fade-in-animation');
    splash_video_div.style.opacity = '1';
  }

  var splash_text = document.getElementById('splash-text').getBoundingClientRect().y;
  if (splash_text > 0) {
    var splash_text_div = document.getElementById('splash-text');
    splash_text_div.classList.add('fade-in-animation');
    splash_text_div.style.opacity = '1';
  }
}

function about_fade_in() {
  var about_title = document.getElementById('about-title').getBoundingClientRect().y;
  if (about_title < 400 && about_title > 0) {
    var about_title_div = document.getElementById('about-title');
    about_title_div.classList.add('fade-in-animation');
    about_title_div.style.opacity = '1';
  }

  var about_information = document.getElementById('about-information').getBoundingClientRect().y;
  if (about_information > 0 && about_information < 400) {
    var about_information_div = document.getElementById('about-information');
    about_information_div.classList.add('fade-in-animation');
    about_information_div.style.opacity = '1';
  }
}

function process_fade_in() {
  var process_text = document.getElementById('process-text').getBoundingClientRect().y;
  if (process_text > 0 && process_text < 400) {
    var process_text_div = document.getElementById('process-text');
    process_text_div.classList.add('fade-in-animation');
    process_text_div.style.opacity = '1';
  }

  var process_sections = document.getElementById('process-sections').getBoundingClientRect().y;
  if (process_sections > 0 && process_text < 400) {
    setTimeout(function() {
      var process_pre_processing = document.getElementById('process-pre-processing');
      process_pre_processing.classList.add('fade-in-animation');
      process_pre_processing.style.opacity = '1';
    }, 200);
    setTimeout(function() {
      var process_insertion = document.getElementById('process-insertion');
      process_insertion.classList.add('fade-in-animation');
      process_insertion.style.opacity = '1';
    }, 400);
    setTimeout(function() {
      var process_post_processing = document.getElementById('process-post-processing');
      process_post_processing.classList.add('fade-in-animation');
      process_post_processing.style.opacity = '1';
    }, 600);
    setTimeout(function() {
      var process_targetting = document.getElementById('process-targetting');
      process_targetting.classList.add('fade-in-animation');
      process_targetting.style.opacity = '1';
    }, 800);
  }
}

function pre_processing_fade_in() {
  var pre_processing_text = document.getElementById('pre-processing-text').getBoundingClientRect().y;
  if (pre_processing_text > 0 && pre_processing_text < 400) {
    var pre_process_text_div = document.getElementById('pre-processing-text');
    pre_process_text_div.classList.add('fade-in-animation');
    pre_process_text_div.style.opacity = '1';

    var pre_process_img_div = document.getElementById('pre-processing-images');
    pre_process_img_div.classList.add('fade-in-animation');
    pre_process_img_div.style.opacity = '1';
  }
}

function insertion_fade_in() {
  var insertion_text = document.getElementById('insertion-text').getBoundingClientRect().y;
  if (insertion_text > 0 && insertion_text < 400) {
    var insertion_text_div = document.getElementById('insertion-text');
    insertion_text_div.classList.add('fade-in-animation');
    insertion_text_div.style.opacity = '1';

    var insertion_img_div = document.getElementById('insertion-images');
    insertion_img_div.classList.add('fade-in-animation');
    insertion_img_div.style.opacity = '1';
  }
}

function post_processing_fade_in() {
  var post_processing_text = document.getElementById('post-processing-text').getBoundingClientRect().y;
  if (post_processing_text > 0 && post_processing_text < 400) {
    var post_processing_text_div = document.getElementById('post-processing-text');
    post_processing_text_div.classList.add('fade-in-animation');
    post_processing_text_div.style.opacity = '1';

    var post_processing_img_div = document.getElementById('post-processing-images');
    post_processing_img_div.classList.add('fade-in-animation');
    post_processing_img_div.style.opacity = '1';
  }
}

function targetting_fade_in() {
  var targetting_text = document.getElementById('targetting-text').getBoundingClientRect().y;
  if (targetting_text > 0 && targetting_text < 400) {
    var targetting_text_div = document.getElementById('targetting-text');
    targetting_text_div.classList.add('fade-in-animation');
    targetting_text_div.style.opacity = '1';

    var targetting_img_div = document.getElementById('targetting-images');
    targetting_img_div.classList.add('fade-in-animation');
    targetting_img_div.style.opacity = '1';
  }
}

function contact_fade_in() {
  var contact_content = document.getElementById('contact-content').getBoundingClientRect().y;
  if (contact_content > 0 && contact_content < 450) {
    var contact_content_div = document.getElementById('contact-content');
    contact_content_div.classList.add('fade-in-animation');
    contact_content_div.style.opacity = '1';
  }
}

function scroll_to_section(section_id) {
  console.log(section_id);
  var section_y = document.getElementById(section_id).getBoundingClientRect().y;
  window.scrollBy(0, section_y-54);
}
