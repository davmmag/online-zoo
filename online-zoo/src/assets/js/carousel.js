
function Carousel(setting = {
  "main": ".js-carousel",
  "wrap": ".js-carousel__wrap",
  "prev": ".js-carousel__prev",
  "next": ".js-carousel__next"
}) {
    if (document.querySelector(setting.wrap) === null) {
      console.error(`Carousel not fount selector ${setting.wrap}`);
      return;
    }

    /* Scope privates methods and properties */
    let privates = {};


    /* Public methods */
    // Prev slide
    this.prev_slide = () => {
      --privates.opt.position;

      if (privates.opt.position < 0) {
        privates.sel.wrap.classList.add('s-notransition');
        privates.opt.position = privates.opt.max_position - 1;
      }

      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
    };


    // Next slide
    this.next_slide = () => {
      ++privates.opt.position;

      if (privates.opt.position >= privates.opt.max_position) {
        privates.opt.position = 0;
      }

      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
    };

    privates.setting = setting;//

    privates.sel = {
      "main": document.querySelector(privates.setting.main),
      "wrap": document.querySelector(privates.setting.wrap),
      "children": document.querySelector(privates.setting.wrap).children,
      "prev": document.querySelector(privates.setting.prev),
      "next": document.querySelector(privates.setting.next)
    };

    privates.opt = {
      "position": 0,
      "max_position": document.querySelector(privates.setting.wrap).children.length
    };

    // Control
    if (privates.sel.prev !== null) {
      privates.sel.prev.addEventListener('click', () => {
        this.prev_slide();
      });
    }

    if (privates.sel.next !== null) {
      privates.sel.next.addEventListener('click', () => {
        this.next_slide();
      });
    }

  }

  // class Carousel {
  //   constructor(options) {
  //     this.options = options;
  //   }
  // }

export default Carousel;