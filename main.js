let check_answer = document.getElementById("check_answer1");
const hint = document.getElementById("hint");
const ciphertext = document.getElementById("ciphertext");
const succsess = document.getElementById("succsess");
const wrong = document.getElementById("wrong");
const title = document.getElementById("title");
const char1 = document.getElementById("char1");
const char2 = document.getElementById("char2");
const char3 = document.getElementById("char3");
const char4 = document.getElementById("char4");
const char5 = document.getElementById("char5");
const char6 = document.getElementById("char6");
const input = document.getElementById("answer");
const ciphertext_title = document.getElementById("ciphertext_title");
const nav = document.getElementById("location");

function correct_answer() {
  succsess.innerHTML = "Goood job, solve secend";
  wrong.innerHTML = "";
  input.value = "";
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function show(level) {
  if (level == 1) {
    nav.innerHTML = "You are in London now.";
    title.innerHTML = "Behind every secret, there is a beautiful memory.";
    hint.innerHTML = "'Memories need guidance, insights give meaning always — if you're patient enough to\nlook beneath the surface, to trace the patterns left in silence, and to trust that every sign\ncarries a purpose.'"
    ciphertext_title.innerHTML = "Ciphertext is:";
    ciphertext.innerHTML = "ebpzt eqjoc vgqgu cjvln ktsck xwevt meavk wobrb ocaap lbswg jswoy tqpfx qldge tadlm bnb" // first ciphertext
    char1.innerHTML = "رقم دهگان روز تولدت";
    char2.innerHTML = "روز، روزی که اولین پیام تل رو دادم";
    char3.innerHTML = "ماه اولین پیام";
    char4.innerHTML = "مجموع ساعت اولین پیام و رقم یکان دقیقه آن";
    char5.innerHTML = "ماه دومین کافه";
    char6.innerHTML = "مجموع ارقام ساعت اولین پیام";
  } else if (level == 2) {
    nav.innerHTML = "Du bist jetzt in Berlin.";
    title.innerHTML = "Können Sie den Weg der Liebe entschlüsseln?";
    hint.innerHTML = "'Ich erinnere mich noch an den Tag, als der Regen leise auf die Fenster prasselte und du neben mir lagst, schweigend, doch voller Geschichten.\nDie Uhr tickte, als würde sie unsere Gedanken lesen.\nEs war kein gewöhnlicher Moment, sondern eine dieser stillen Explosionen im Herzen.\nIn deinem Lächeln versteckten sich ganze Romane, und meine Hände wollten nur eins:\nfür immer bleiben.'"
    ciphertext_title.innerHTML = "Der Geheimtext lautet:";
    ciphertext.innerHTML = "Y4TG?KPN/?8EUZ+?ZJ?QRHR?E+XD?TP49HSYD" // secend ciphertext
    char1.innerHTML = "مجموع ماه و روز اولین پیام";
    char2.innerHTML = "مجموع ماه و روز اولین پیام تل";
    char3.innerHTML = "ساعت اولین پیام تل";
    char4.innerHTML = "ساعت اولین تماس";
    char5.innerHTML = "روز چهارمین قرار";
    char6.innerHTML = "عدد مورد علاقه من ضرب در صد به اضافه یکی بیشتر از معکوس دقیقه اولین پیام";
  } else if (level == 3) {
    nav.innerHTML = "Είσαι στη Ρώμη τώρα.";
    title.innerHTML = "Ας ξεκλειδώσουμε μαζί τις αναμνήσεις μας.";
    hint.innerHTML = "'Cum aurora caeli ascendit, et silentium aeternum redit,\namor meus in corde manet sicut umbrae antiquae.\nSapientia non est in voce, sed in tactu, in oculis tuis.\nAd te semper reveniam, etiam si viae obscurae fiant.\nRoma ipsa meminit nominis tui, sicut ego'";
    ciphertext_title.innerHTML = "Το κρυπτογραφημένο κείμενο είναι:";
    ciphertext.innerHTML = "dl hyl ropsff rovi" // 3d ciphertext
    char1.innerHTML = "ساعت اولین تماس";
    char2.innerHTML = "یکان دقیقه اولین باری که استیکر 🥲 رو فرستادی";
    char3.innerHTML = "مجموع ماه و روز اولین کافه";
    char4.innerHTML = "روز اولین پیام";
    char5.innerHTML = "روز اولین پیام تل";
    char6.innerHTML = "ماه تولدت";
  } else if (level == 4) {
    nav.innerHTML = "الان توی ایرانی";
    title.innerHTML = "وقتی همه‌ی تکه‌ها کنار هم می‌نشینن، تصویر ما کامل می‌شه.";
    hint.innerHTML = `
غم زمانه خورم یا فراق یار کشم؟
<br>
به طاقتی که ندارم کدام بار کشم.
<br> <br> <br>
مزن بر زمین، ای خسته، این گریه‌های تو
<br>
که هر قطره‌ی اشکت شده، بحر جای تو.
<br> <br> <br>
گل در بَر و می در کف و معشوق به کام است
<br>
سلطانِ جهانم به چنین روز غلام است.
<br> <br> <br>
یار مرا، غار مرا، عشق جگرخوار مرا
<br>
یار تویی، غار تویی، خواجه نگهدار مرا.
<br> <br> <br>
نه هر که چهره برافروخت دلبری داند
<br>
نه هر که آینه سازد به صدق نگه دارد.
<br> <br> <br>
گفت: خاموش که هر کس که جَمالی دارد
<br>
هر کجا پای نهد، دست ندارندش پیش.
<br> <br> <br>
رندانِ تشنه‌لب را، آبی نمی‌دهد کس
<br>
گویی ولی‌شناسان، رفتند از این ولایت.
<br> <br> <br>
دل داده ام بر باد، بر هر چه باداباد
<br>
مجنون تر از لیلی، شیرین تر از فرهاد.
<br> <br> <br>
من ندانستم از اول که تو بی مهر و وفایی
<br>
عهد نابستن از آن به که ببندی و نپایی.
<br> <br> <br>
چون شبنم اوفتاده بدم پیش آفتاب
<br>
مهرم به جان رسید و به عیوق بر شدم.
<br> <br> <br>
وقت سحر است خیز ای مایه ناز
<br>
نرمک نرمک باده خور و چنگ نواز.
<br> <br> <br>
نشان عهد و وفا نیست در تبسّمِ گل
<br>
بنال بلبل بی‌دل که جای فریادست.
<br> <br> <br>
رسید مژده که ایام غم نخواهد ماند
<br>
چنان نماند و چنین نیز هم نخواهد ماند.
<br> <br> <br>
وه که جدا نمی‌شود نقش تو از خیال من
<br>
تا چه شود به عاقبت در طلب تو حال من.
<br> <br> <br>
یا رب این نوگُلِ خندان که سپردی به مَنَش
<br>
می‌سپارم به تو از چشمِ حسودِ چَمَنَش.
<br> <br> <br>
تا تو نگاه می‌کنی، کار من آه کردن است
<br>
ای به فدای چشم تو، این چه نگاه کردن است.
<br> <br> <br>
وفا کنیم و ملامت کشیم و خوش باشیم
<br>
که در طریقت ما کافری‌ست رنجیدن.
<br> <br> <br>
کوه را تا به کاه بر در او
<br>
کمری بر میان همی‌یابم.
<br> <br> <br>
مُردم در این فِراق و در آن پرده راه نیست
<br>
یا هست و پرده دار نشانم نمی‌دهد.
<br> <br> <br>
بر سر آنم که گر ز دست برآید
<br>
دست به کاری زنم که غصه سر آید.
<br> <br> <br>
یاد باد آن که سر کوی توام منزل بود
<br>
دیده را روشنی از خاک درت حاصل بود.
<br> <br> <br>
نه هر که چهره برافروخت دلبری داند
<br>
نه هر که آینه سازد سِکندری داند.
<br> <br> <br>
مژده ای دل که دگر بادِ صبا بازآمد
<br>
هدهد خوش‌خبر از طَرْفِ سبا بازآمد.
`;
    ciphertext_title.innerHTML = "متن رمزی عبارت است از:";
    ciphertext.innerHTML = "همون اشعار بالا" // 3d ciphertext
    char1.remove();
    char2.remove();
    char3.remove();
    char4.remove();
    char5.remove();
    char6.remove();
    document.getElementById("article").style.direction = "rtl";
  } else if (level == 5) {
    nav.innerHTML = "الان توی ایرانی";
    title.innerHTML = "و تو، کلید را یافتی… درست همان‌طور که قلبم را یافتی.";
    hint.innerHTML = "تبریک می‌گم… تو همه رمزها رو گشودی، درست مثل رمز دل من.\nهر قدمی که برداشتی، ردّی از عشق ما بود.\nپایان این مسیر، فقط شروعی تازه‌ست…\nحالا، چشماتو ببند و آماده شو برای یک شگفتی.\nحالا کد پایین رو برام بفرست تا عکس ها رو بفرستم"
    ciphertext_title.innerHTML = "کد عبارت است از:";
    ciphertext.innerHTML = "۲۵۸" // 3d ciphertext
    char1.remove()
    char2.remove()
    char3.remove()
    char4.remove()
    char5.remove()
    char6.remove()
  }
}

// Helper to get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null; // not found
}

// Helper to set a cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Initialize level cookie if not set
let level = getCookie("level");
if (!level) {
  setCookie("level", 1, 30); // Store for 30 days
  level = 1;
}

console.log(setCookie("level", 1, 30));

show(getCookie("level"));

check_answer.addEventListener("submit", function (event) {
  event.preventDefault();
  const input_value = document.getElementById("answer").value.toLowerCase();

  if (getCookie("level") == 1) {
    if (input_value == "andif oneda yyoum akeme verys adiwo ntfor getth atyou weret heonl yonew homad emeha ppy") {
      setCookie("level", 2, 30);
      correct_answer();
      show(getCookie("level"))
    } else {
      wrong.innerHTML = "That was wrong, try agin";
      succsess.innerHTML = "";
    }
  } else if (getCookie("level") == 2) {
    if (input_value == "your eyes drove me away from religion" || input_value == "your?eyes?drove?me?away?from?religion") {
      setCookie("level", 3, 30);
      correct_answer();
      show(getCookie("level"))
    } else {
      wrong.innerHTML = "That was wrong, try agin";
      succsess.innerHTML = "";
    }
  } else if (getCookie("level") == 3) {
    if (input_value == "we are khilyy khob") {
      setCookie("level", 4, 30);
      correct_answer();
      show(getCookie("level"))
    } else {
      wrong.innerHTML = "That was wrong, try agin";
      succsess.innerHTML = "";
    }
  } else if (getCookie("level") == 4) {
    if (input_value == "غمگین گردم چون روی تو کم بینم") {
      correct_answer();
      setCookie("level", 5, 30);
      show(getCookie("level"))
    } else {
      wrong.innerHTML = "That was wrong, try agin";
      succsess.innerHTML = "";
    }
  }
})
