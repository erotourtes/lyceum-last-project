animeStarter();

window.isIdle = true;

$(document).ready(() => {
  disableScroll();
  $(".starter button").on("click", function () {
    anime({
      targets: ".starter",
      easing: "easeOutExpo",
      translateY: "-100%",
      duration: 500,
      complete: function() {
        anime({
          targets: ".starter",
          translateY: "-200%",
        });
      }
    });

    animeSVG();

    setTimeout(()=> {
      $(".starter").remove();
    }, 1000);

    window.isIdle = false;
    enableScroll();
    start();
  });

  if (window.mobileCheck()) return;
  moveBg();
});

function start() {
  const delay = 250;

  AOS.init();

  anime({
    targets: ".moveBtns h2",
    translateY: [-50, 0],
    delay: anime.stagger(25, { start: delay + 250, from: "center" }),
  });

  anime({
    targets: [".mainInfo h1", ".form__group input"],
    scale: [0, 1],
    delay: delay / 2,
  });

  anime({
    targets: ".footer",
    translateY: [120, 0],
    easing: "easeOutExpo",
    delay: delay + 250,
  });

  anime({
    targets: ".contactInfo p",
    translateX: 30,
    delay: anime.stagger(100, { start: delay * 3 }),
    easing: "easeOutQuart",
  });

  anime({
    targets: ".icons svg",
    translateY: [0, 2, -2, 0],
    delay: anime.stagger(100, { start: delay + 5000 }),
    easing: "easeOutExpo",
    loop: true,
  });
}

function animeStarter() {
  anime({
    targets: ".logo svg #under > path",
    translateX: ["-100%", "0%"],
    delay: anime.stagger(50, { start: 250 }),
    easing: "easeOutExpo",
    complete: function () {
      anime({
        targets: ".logo svg #under path",
        translateY: ["0", "-5px", "0%"],
        delay: anime.stagger(150, { start: 1000 }),
        loop: true,
        easing: "easeOutExpo",
      });
    },
  });

  anime({
    targets: ".logo svg #books > path",
    translateY: ["-100%", "0%"],
    delay: anime.stagger(50, { start: 900 }),
    easing: "easeOutBack",
  });

  anime({
    targets: [".logo svg #books #book5", ".logo svg #books #book7"],
    translateX: ["-110%", "0%"],
    rotate: [-5, 2, 0],
    delay: anime.stagger(50, { start: 500 }),
    easing: "easeOutQuart",
  });

  anime({
    targets: [".starter h2", ".starter h3"],
    translateY: ["-50%", "0%"],
    delay: anime.stagger(200, { start: 100 }),
    easing: "easeInOutBack",
  });
}

function animeSVG() {
  $(".moveBtns").append(
    $(".logo svg")
      .clone()
      .css({ width: "70px", position: "relative", top: "10px" })
  );

  anime({
    targets: ".moveBtns *",
    translateX: 0,
    translateY: 0,
    rotate: 0,
    delay: 0,
    duration: 0,
    complete: function () {
      anime({
        targets: ".moveBtns #books",
        translateY: ["-100%", "0"],
        complete: function () {
          anime({
            targets: ".moveBtns #books path",
            translateY: ["0", "-2px", "2px", "0"],
            delay: anime.stagger(150, { start: 0 }),
            duration: 900,
            loop: true,
            easing: "easeInOutSine",
          });
        },
      });
    },
  });
}

function moveBg() {
  const header = $("header");

  const prevCoordinates = { x: 0, y: 0 };
  $(window).mousemove(function (e) {
    if (window.isIdle) return;

    const speed = 0.1;
    const backgroundX = getBackgroundX(header, e, speed, prevCoordinates);
    const backgroundY = getBackgroundY(header, e, speed, prevCoordinates);

    header.css({
      "background-position": `${backgroundX}% ${backgroundY}%`,
    });
  });
}

function getBackgroundX(header, e, speed, prevCoordinates) {
  let backgroundX = parseFloat(header.css("background-positionX").slice(0, -1));
  const mouseX = e.pageX;

  if (mouseX > prevCoordinates.x) backgroundX += speed;
  else backgroundX -= speed;

  if (backgroundX >= 100) {
    backgroundX = 100;
  }
  if (backgroundX <= 0) {
    backgroundX = 0;
  }

  prevCoordinates.x = mouseX;

  return backgroundX;
}

function getBackgroundY(header, e, speed, prevCoordinates) {
  let backgroundY = parseFloat(header.css("background-positionY").slice(0, -1));
  const mouseY = e.pageY;

  if (mouseY > prevCoordinates.y) backgroundY += speed;
  else backgroundY -= speed;

  if (backgroundY >= 100) {
    backgroundY = 100;
  }
  if (backgroundY <= 0) {
    backgroundY = 0;
  }

  prevCoordinates.y = mouseY;

  return backgroundY;
}

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

function disableScroll() {
  $("html").css({
    overflow: "hidden",
    height: "100%",
  });
}
function enableScroll() {
  $("html").css({
    overflow: "auto",
    height: "auto",
  });
}
