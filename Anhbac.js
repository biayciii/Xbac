/* ---------- DATA ---------- */
const users = [
  {
    username: "Dchou",
    password: "14082005",
    letters: [
      {
        title: "02062025: Gửi bé nhất Dchou",
        content: `Vậy là cũng đã hơn 1 tháng một chút xíu chúng ta yêu nhau, đây là lần đầu tiên anh viết thư cho em dưới hình thức lạ hoắc này. Có lẽ khoảng thời gian bên em là lúc anh cảm thấy vui vẻ nhất. Gần đây anh có đôi chút mệt mỏi vì học tập và công việc, nhưng mỗi khi được nói chuyện hay gặp em, nụ cười lại hiện lên trên môi anh. Em mang đến cho anh cảm giác hạnh phúc và háo hức, như thể mọi mệt mỏi đều tan biến khi em xuất hiện. Cảm ơn em vì đã đến bên anh, đã mang đến cho anh một tình yêu mà anh luôn mong muốn. Anh mong rằng mình sẽ còn tạo ra nhiều điều bất ngờ, nhiều niềm vui hơn thế này dành cho người con gái anh yêu nhất. <3 \n\nYêu vợ tương lai, Xbac của em <3`,
        code: "02062025"
      },
      {
        title: "02072025: Chân thành cho em iu 💖",
        content: `Mặc dù anh không hề ngại ngùng khi viết, nhưng vì muốn em rèn luyện bản thân nên anh sẽ viết bằng tiếng Anh he :))). \n\nI am very happy to open the source code to write you these sincere words. Another month has passed, we have memories, quarrels, joys, happiness, etc. But I am still the same still here, the one who holds you in his arms, listens to your stories and jokes. Thank you for being with me, even though there were times when I accidentally forgot you. I am not a perfect person, but I will try to improve myself so that we can continue together in the following days, writing letters to each other and telling each other about what we have experienced in life and love. Let me think about you :))). Love you forever <3`,
        code: "02072025"
      },
      {
        title: "22072025: This's love for DieuChou",
        content: `Đã gần một tháng, anh lại viết ra những dòng tâm trạng này. Khi anh viết xong và nhìn lại thấy sao thư dài hơn những tháng trước vậy, vì lại thêm một tháng trôi qua, chúng ta lại có những kỉ niệm và có cả những biến cố. Nhớ lại những ngày tháng đi chơi với em anh lại thấy rất vui vì lần đầu anh được đi leo đồi, được ngắm bình minh, được cùng em trải qua những tháng ngày tươi đẹp đó. Nhưng xen lẫn vào đó là một chút hối hận trong anh, anh đã một lần nữa làm em tổn thương, làm em đau thêm một lần nữa. Lúc đấy anh như một thằng bé hoảng loạn, chỉ biết nói lời xin lỗi và òa lên khóc. Anh tệ mà đúng không em, anh không thể biết sau này có thể cùng em qua được 8 năm như anh đã từng nói không. Nhưng nếu ngày nào còn yêu em, anh sẽ yêu em cho đến khi em không cần anh nữa. Mà em biết không, đôi khi anh cũng kể cho em là đi làm anh chán, một phần do đổi ca làm và xử lí nhiều đơn, mà một phần quan trọng nữa là... thiếu em đấy. Đôi khi anh cảm thấy bất lực và mỏi mệt, nhưng rồi gặp em, anh lại có thêm sức sống để có thể nói chuyện với nhau, cười cho nhau nghe những câu chuyện vô chi của chính mình. Nhưng khum sao, khi em đã đọc được dòng thư này, tâm trạng của anh cũng đã tốt lên rùi, nên bé đừng lo cho anh nhé. Vậy là chúng ta cũng đi đến những ngày cuối tháng 7 rồi, gần 3 tháng bên nhau — vui có, buồn có, từng sắp tan vỡ cũng có — nhưng rồi chúng ta vẫn đứng đây, vẫn ở bên nhau, cùng nhau đón nhận những màu sắc mới của nhiều ngày tháng sắp tới. Hy vọng rằng đi quân sự, anh sẽ có thể gặp em nhiều hơn để có thể quan tâm đến sức khỏe và được trò chuyện với em nhiều hơn. <3 u 4e, Dchou`,
        code: "22072025"
      },
      {
        title: "30082025: thư của mèo iu :)) <3",
        content: `Ayyy dooo, lại thêm một tháng nữa trôi qua anh lại được viết thư hehhee. Chúng ta bắt đầu tháng 8 trong môi trường mới nhiều kỉ niệm nhưng trong đó cũng có chút biến động. Là những lúc anh không liên lạc được cho em, là những nỗi nhớ vu vơ và cả những mảnh tình gần như sắp kết thúc. Nhưng rồi trong những khoảnh khắc yếu lòng anh lại không lỡ bỏ đi một người đang yêu mình, đang mong chờ một cái ôm khi gặp và một nụ hôn khi tạm biệt nhau. Có lẽ khoảng thời gian tháng 8 anh nhận thấy bản thân mình đã có những sai sót những điểm yếu hại người mà khi anh ra khỏi Hòa Lạc anh đã dần bớt lại và muốn ... yêu em nhiều hơn trước. Hôm nay là tròn 4 tháng chúng ta yêu nhau, lại thêm một lần nữa anh suýt bỏ lỡ em, nhưng anh vẫn ở đây, vẫn là một chàng trai luôn hết mình yêu em. Liệu rằng, cuộc sống khi đi học có làm thay đổi con tim chúng ta không nữa, hay là lại thêm một lần nữa cô hồn đánh gục đi niềm tin của chúng ta về nhau. Anh cũng không biết nữa, kệ đi để ngày này tháng sau anh sẽ kể cho em nhé. \n 你永远不会孤单 <3`,
        code: "30082025"
      },
      {
        title: "01102025: chouchouchou siuuuu đáng iu",
        content: `Nhìn vô dòng đời đã qua, cuộc đời bất biến giữa biển lũ vô phạt chúng ta đã trải qua 5 tháng bên nhau trong những ngày mưa lũ của thời tiết. Tháng này thật lạ vì chúng ta đã hạnh phúc, vui có, buồn có và mệt mỏi từ anh. Cuộc đời cũng biết chiều đời khi tưởng rằng chúng ta sẽ có một tháng very chill nhưng cơn mưa cuối tháng đến trôi đi sự bản lĩnh, chất thép của một ông cu ở thành phố thông minh nào đó. Ông cu đấy chắc giống anh nhưng khi bản lĩnh hết ông cu lại rơm rớm nước mắt trước người mình yêu, dù muốn từ bỏ vì những ngày bất định trong tháng nhưng rồi khi đứng trước người mà ông cu luôn yêu thương, luôn cù và luôn dõi theo ấy lại không muốn rời xa vì những tiếng yêu toát ra giữa trời mưa hôm ấy khiến ông cu không muốn để người mình yêu cô đơn thêm một lần nữa. Haizz nhưng rồi hết mưa, hết tháng anh không thấy ông cu thành phố thông minh nữa, không còn thấy sự mệt mỏi nào cả. Mong rằng chúng ta dù có bão gió ra sao dù có muốn từ bỏ khi mệt mỏi nhưng vẫn đợi một cái ôm, một câu thần chú, một tiếng yêu để có thể luôn bên nhau đến những ngày không muốn rời xa nhau nữa. Iu bé nhìu lắm, tháng này cù liên tục :))))`,
        code: "01102025"
      },
      {
        title: "01112025: bé gái 10 tuổi",
        content: `one month just passed, i write more code. Mie cứ tưởng một tháng ngon lành cành đào, đào rơi ta lại húp thì lại không hiểu sao trồn lời lại cho một căn bệnh thế kỉ từ thời lính mũ cối là bệnh *** vào anh. Thề lúc đấy, vào cái ngày của women lúc biết bệnh mặt anh đơ người ra không biết cuộc sống thế nào, còn em thì :) nhưng em vẫn lo lắng cho sức khỏe của anh. Thế là anh trở thành cậu buồn. Rồi đi ra quán mua một bó hoa tặng em nhưng cuộc đời lại cho anh vấp cỏ lần 2 vì hết hàng. Cảm giác như ngày mà anh muốn dành cho những người yêu thương rồi lại thành ngày của những người yêu thương cho anh. Những ngày bị bệnh, dù có cách xa một chút nhưng em vẫn luôn không né tránh anh, vẫn muốn ôm anh dù anh muốn bảo vệ sức khỏe cho em. Nhưng rồi anh khỏi bệnh, đó là lúc cuộc sống trở lại bình thường rồi anh có những ngày cù em tiếp. Nhìn lại tháng 10 rất hay và buồn cười nhưng thôi không sao em ạ, thời gian có trôi nhưng tình cảm vẫn ở đó, mong rằng em vẫn luôn vui tươi đón nhận những tình cảm của anh nhé, yêu em bé gái vỏ 20 ruột 10 tuổi nhìu.`,
        code: "01112025"
      },
      {
        title: "05122025: 😀🙂🙁😢😭",
        content: `Tháng chia tay, không biết viết gì 🙁`,
        code: "05122025"
      },
      {
        title: "30122025: Ending 2025 🧨🎆",
        content: `Vậy là một năm sắp trôi qua, có vui có buồn, hạnh phúc-tan vỡ-chia li-hi vọng. Dù có ra sao, chúng ta vẫn hạnh phúc bên nhau dù trong tim mỗi người cũng đã có những vết gợn. Một năm dương lịch sắp trôi qua, mong rằng năm tới chúng ta vẫn sẽ cùng nhau hạnh phúc, cùng yêu thương để cùng hy vọng cho một tình yêu đẹp nhé. \n Yêu em, người lừa tình tôi 🙂😀😊`,
        code: "30122025"
      },
      {
        title: "28012026: January 🐬😺",
        content: `Buồn lắm các em ạ lại phải viết thư, tháng đầu năm cũng sắp kết thúc mình cũng có đôi lời muốn nói
        Tháng này buồn lắm vì chẳng có chuyện gì buồn lắm giữa hai chúng mình, không biết tháng sau có buồn thật không nhỉ😄
        Mà cũng sắp đến tết âm rồi nhỉ con vợ chuẩn bị tinh thần ăn tết thôi, xa chồng xa con đi về quê uống rượu, thích nhỉ. 
        Mong tháng sau, cũng là năm mới đến sẽ có nhiều điều hay ho hơn trong cuộc sống và trong tình cảm nhé. 
        Mà con vợ ăn tết xong giảm cân đi nhá, dạo này thấy bắt đầu thức khuya dậy muộn rồi đấy. Chào con vợ nhé yeah yeah 🐬😘🥰🥰🥰`,
        code: "28012026"
      },
      {
        title: "05032026: March 🐃🐃🌧️",
        content: `Chẳng biết có ai nói với em rằng wo hen ai ni, dường như anh yêu đơn phương lâu nay em có biết dược ... Tháng này thật buồn vì phải xa nhau cúng khá lâu, và cũng có những vấn đề lớn nựa 🥲 không biết những tháng sau còn những vấn đề gì nữa không nhỉ. Nhưng cho dù mình có những vấn đề gì anh mong chúng ta sẽ có thể cùng nhau giải quyết và tình cảm vẫn sẽ như lúc ban đàu
        Có lẽ trong công việc và học tập anh luôn giữ cho mình bình tĩnh, có chút tự tin để có thể đưa ra những quyết định có lợi cho bản thân nhưng tình cảm thì khó lói lắm, anh đã khiến cho những người yêu thương mình đã phật í, buồn lòng. Cũng tệ thật, anh chỉ mong sau những vấn đề đấy anh sẽ có thể xử lí tốt hơn nữa để không làm tổn thương trái tim của em bé 10 tuổi
        Tháng 2 trôi qua nhanh thật, và cũng đã đến tháng 3 rồi, mong sao chúng ta sẽ có nhiều điều để vui, để nghĩ nhiều content tốt trong tình yêu nhé. Love bro buffalo From to Paint😘🥰🐃`,
        code: "05032026"
      },
      {
        title: "03042026: April 🐕🦴🐶🦮🐕‍🦺🐩",
        content: `Những cánh hoa phai tàn thật nhanh, em có bay xa em có bay xa, em có đi xa mãi. Và thế là tháng 4 em vẫn là của anh không đi đâu cả. Tháng 3 vừa qua sau những lần cãi nhau và mọi chuyện cũng đã được giải quyết. Chúng ta đã trải qua những tháng ngày hơi hơi bình yên. cũng cũng có tí hạnh phúc.
        Tháng vừa qua cũng không mắn cho anh vì công việc không như mong muốn, nhưng dẫu sao anh vẫn có em luôn an ủi động viên anh. Mong rằng tháng sau, may mắn sẽ đến với anh hơn một chút. Tháng 4 tháng của con cá, tháng là lời nói dối nhưng anh không biết nói dối. You never walk alone, những con cá sẽ phải chả gió.
        Một lần nữa, yêu em châu, em mỹ vân, em nguyễn diệu châu nhiều lắm.`,
        code: "03042026"
      }
    ]
  }
];

/* ---------- GLOBAL ---------- */
let selectedLetter = null;

/* ---------- AUTH ---------- */
function login() {
  const user = users.find(
    u =>
      u.username === document.getElementById("username").value.trim() &&
      u.password === document.getElementById("password").value.trim()
  );

  if (user) {
    showLetters(user.letters);
    toggleScreen("login-screen", false);
    toggleScreen("letter-screen", true);
  } else {
    document.getElementById("login-msg").textContent = "Sai thông tin đăng nhập!";
  }
}

/* ---------- LETTER LIST ---------- */
function showLetters(letters) {
  const list = document.getElementById("letter-list");
  list.innerHTML = "";
  letters.forEach(letter => {
    const li = document.createElement("li");
    li.textContent = letter.title;
    li.onclick = () => {
      selectedLetter = letter;
      toggleScreen("letter-screen", false);
      toggleScreen("verify-screen", true);
    };
    list.appendChild(li);
  });
}

/* ---------- VERIFY CODE ---------- */
function verifyCode() {
  const codeInput = document.getElementById("verify-code").value.trim();
  const verifyMsg = document.getElementById("verify-msg");

  if (selectedLetter && codeInput === selectedLetter.code) {
    toggleScreen("verify-screen", false);
    document.getElementById("letter-title").textContent = selectedLetter.title;
    
    // SỬA TẠI ĐÂY: Dùng innerText để giữ định dạng xuống dòng của lá thư
    const letterBody = document.getElementById("letter-body");
    letterBody.innerText = selectedLetter.content; 
    
    // ĐẢM BẢO CSS: Thêm dòng này để văn bản tự động xuống dòng nếu quá dài
    letterBody.style.whiteSpace = "pre-wrap"; 
    letterBody.style.wordBreak = "break-word";

    toggleScreen("letter-content-screen", true);
  } else {
    verifyMsg.textContent = "Mã xác nhận không đúng!";
  }
}

/* ---------- BACK TO LETTER LIST ---------- */
function backToLetterList() {
  toggleScreen("letter-content-screen", false);
  toggleScreen("letter-screen", true);
}

/* ---------- HELPER ---------- */
function toggleScreen(id, show) {
  document.getElementById(id).style.display = show ? "block" : "none";
}
/* ---------- FLYING CHAOS BOUNCE EFFECT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const flyingImgs = document.querySelectorAll(".hello-kitty, .golden, .kitty-fly, .dog-top");

  flyingImgs.forEach(img => {
    // đặt vị trí ngẫu nhiên ban đầu
    img.style.top = Math.random() * (window.innerHeight - 120) + "px";
    img.style.left = Math.random() * (window.innerWidth - 120) + "px";

    // random tốc độ bay
    let speedX = (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1);
    let speedY = (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1);

    // random xoay nhẹ để nhìn tự nhiên hơn
    let rotation = Math.random() * 360;

    function move() {
      let x = parseFloat(img.style.left);
      let y = parseFloat(img.style.top);

      x += speedX;
      y += speedY;

      // nếu chạm viền màn hình → bật ngược hướng
      if (x <= 0) {
        x = 0;
        speedX *= -1;
        img.style.transform = "scaleX(1) rotate(" + rotation + "deg)";
      }
      if (x + img.width >= window.innerWidth) {
        x = window.innerWidth - img.width;
        speedX *= -1;
        img.style.transform = "scaleX(-1) rotate(" + rotation + "deg)";
      }

      if (y <= 0) {
        y = 0;
        speedY *= -1;
      }
      if (y + img.height >= window.innerHeight) {
        y = window.innerHeight - img.height;
        speedY *= -1;
      }

      img.style.left = x + "px";
      img.style.top = y + "px";

      requestAnimationFrame(move);
    }

    move();
  });
});
