import courseIMG1 from "@assets/images/courses/test1.webp";
import courseIMG2 from "@assets/images/courses/test2.webp";
import courseIMG3 from "@assets/images/courses/test3.webp";
import courseIMG4 from "@assets/images/courses/test4.webp";
import courseIMG5 from "@assets/images/courses/test5.webp";
import courseIMG6 from "@assets/images/courses/test6.jpg";
import teacherIMG1 from "@assets/images/teachers/test1.jpg";
import teacherIMG2 from "@assets/images/teachers/test2.jpg";
import teacherIMG3 from "@assets/images/teachers/test3.jpg";

// const courses = [
//   {
//     _id: "",
//     title: "",
//     description: "",
//     categories: "",
//     imgURL: "",         //url of course image saved in database server
//     thumb: "",          //url of course image thumb saved in database server
//     level: "",           //1, 2 , 3 for basic, intermediate, advanced
//     teachers: "",
//     released: "",        // true for released false for coming soon
//     price: "",
//     duration: "",        //video duration of this course
//     lessons: "",         //lesson numbers of this course
//     rate: "",
//     liked: "",           //total liked number
//     disliked: "",        //total disliked number
//     userRate:"",         //0 for current user not rated or 1 to 5 natural number for current user rated
//     userRateId:"",
//     userEmotion: "",     // either -1 for dislike 0 for current user didn't reacted and 1 for current user liked
//     userEmotionId: "",
//     userWishList: "",    // true or false
//     userWishListId: "",
//     commentsCount: "",
//     commentsId: "",
//     userCommentId:"",    // null for user is not commented yet
//   },
// ];

const Courses = [
  {
    _id: "course_1",
    title: "آموزش طراحی وب سایت (Front-End)",
    description:
      "برای ورود به دنیای فرانت اند (front end) نیاز به گذراندن آموزش و یادگیری یک سری مفاهیم برنامه نویسی هستید. دوره آموزش front end مکتب خونه برای این هدف توسط تیمی متخصص و مجرب تهیه",
    categories: ["allCategories_1", "allCategories_5"],
    imgURL: courseIMG1,
    thumb: courseIMG1,
    level: 1,
    teachers: [
      { _id: "teachers_1", name: "مکسیمیلیان شوارتزمولر", thumb: teacherIMG1 },
      { _id: "teachers_2", name: "آندره نایوجی", thumb: teacherIMG2 },
      { _id: "teachers_3", name: "برد تراورسی", thumb: teacherIMG3 },
    ],
    released: true,
    price: 550,
    duration: "08:30",
    lessons: 135,
    rate: 4.1,
    liked: 35,
    disliked: 3,
    userRate: 0,
    userRateId: null,
    userEmotion: 0,
    userEmotionId: null,
    userWishlist: false,
    userWishlistId: null,
    commentsCount: 12,
    commentsId: "course_comment_1",
    userCommentId: null,
  },
  {
    _id: "course_2",
    title: "آموزش React JS پیشرفته",
    description:"دنیای فرانت‌اند تنها محدود به React نیست؛ بلکه می‌توان با استفاده از تکنولوژی‌های فراوان دیگری یک وب‌سایت حرفه‌ای ایجاد کرد. اگر می‌خواهید به موقعیت Senior FrontEnd Engineer برسید، باید آموزش React JS پیشرفته را که امروزه از اهمیت بالایی برخوردار است، فرا بگیرید.    ابزارهای متعددی وجود دارد که در دوره آموزش React JS پیشرفته می‌توانید هم‌زمان با انجام پروژه‌های برنامه‌نویسی متنوع با آن‌ها آشنا شوید. استفاده از این ابزارها در کنار یکدیگر پیشرفت چشمگیری در نتیجه نهایی پروژه‌های شما ایجاد می‌کند. بی‌جهت نیست که ری‌اکت جی اس در ردیف محبوب‌ترین و پرکاربردترین فریم‌ورک‌های جاوا اسکریپت قرار گرفته‌است و شرکت‌های مطرح و بزرگ کشورهای پیشرفته نیز امروزه برای آموزش پیشرفته ری‌اکت و استفاده از آن اهمیت ویژه‌ای قائل هستند.    مطالبی که در دوره آموزش React JS پیشرفته به شما عزیزان آموزش داده می‌شود، دست‌کمی از دانش یک Senior FrontEnd Engineer ندارد؛ بنابراین شما می‌توانید با تلاشی مضاعف و انجام پروژه‌های متعدد با استفاده از تکنولوژی‌هایی که در دوره آموزش پیشرفته ری‌اکت یاد می‌گیرید، شانس خود را در استخدام در شرکت‌های بزرگ ایران و حتی جهان افزایش دهید. دوره آموزش React JS پیشرفته بر اساس جدیدترین ورژن این فریم‌ورک یعنی نسخه 16.14 تدریس شده است.",
    imgURL: courseIMG2,
    thumb: courseIMG2,
    level: 3,
    categories: ["allCategories_1", "allCategories_5"],
    status: 1,
    teachers: [{ _id: "teachers_2", name: "آندره نایوجی", thumb: teacherIMG2 }],
    class: "class_1",
    price: 750,
    enrolled: 47,
    capacity: 55,
    rate: 4.6,
    liked: 1135,
    disliked: 87,
    userRate: 4.2,
    userRateId: "userId_rate_1",
    userEmotion: -1,
    userEmotionId: "user_emotion_1",
    userWishlist: false,
    userWishlistId: null,
    commentsCount: 154,
    commentsId: "course_comment_2",
    userCommentId: null,
  },
  {
    _id: "course_3",
    title: "آموزش طراحی وب سایت (Front-End)",
    description:
      "برای ورود به دنیای فرانت اند (front end) نیاز به گذراندن آموزش و یادگیری یک سری مفاهیم برنامه نویسی هستید. دوره آموزش front end مکتب خونه برای این هدف توسط تیمی متخصص و مجرب تهیه",
    imgURL: courseIMG3,
    thumb: courseIMG3,
    level: 2,
    categories: ["allCategories_1", "allCategories_7"],
    status: 1,
    teachers: [{ _id: "teachers_3", name: "برد تراورسی", thumb: teacherIMG3 }],
    class: "class_2",
    price: 150,
    enrolled: 32,
    capacity: 35,
    rate: 4.9,
    liked: 435,
    disliked: 17,
    userRate: 0,
    userRateId: null,
    userEmotion: 1,
    userEmotionId: "user_emotion_1",
    userWishlist: true,
    userWishlistId: "wishlist_courses_1",
    commentsCount: 154,
    commentsId: "course_comment_2",
    userCommentId: null,
  },
  {
    _id: "course_4",
    title: "دوره آموزش React",
    description:
      "فرض کنید یکی از دوستان شما عکسی را در اینستاگرام پست کرده است. حالا شما اگر بروید و تصویر را لایک کنیدکرده و سپس نظرات را بررسی کنید، در حالی که نظرات را بررسی می‌کنید، می‌بینید که تعداد لایک ها 100 عدد از زمانی که شما پست را لایک کردید، افزایش یافته است، بدون اینکه شما صفحه را رفرش کنید. این دقیقاً همان کاری است که React انجام می‌دهد. هدف از دوره آموزش React آموزش اصول این کتاب خانه جاوا اسکریپت است که به‌صورت کامل و جامع به آن مپردازد. قبل از اینکهدر ادامه ما دوره آموزش React را معرفی کنیمخواهیم کرد و در ادامه در قسمت توضیاحت بیشتر با React بیشتر آشنا خواهیم شد.  ابتدا اجازه دهید که کمی با ری اکت و جنبه‌های مختلف آن آشنا شویم.",
    categories: ["allCategories_1", "allCategories_5"],
    imgURL: "",
    thumb: "",
    level: 1,
    teachers: [
      { _id: "teachers_1", name: "مکسیمیلیان شوارتزمولر", thumb: teacherIMG1 },
    ],
    released: true,
    price: 750,
    duration: "08:30",
    lessons: 135,
    rate: 4.1,
    liked: 35,
    disliked: 3,
    userRate: 0,
    userRateId: null,
    userEmotion: 0,
    userEmotionId: null,
    userWishlist: false,
    userWishlistId: null,
    commentsCount: 12,
    commentsId: "course_comment_1",
    userCommentId: null,
  },
];

const Categories = [
  { _id: "allCategories_1", name: "فرانت" },
  { _id: "allCategories_2", name: "بک‌اند" },
  { _id: "allCategories_3", name: "هوش مصنوعی" },
  { _id: "allCategories_4", name: "یادگیری ماشین" },
  { _id: "allCategories_5", name: "توسعه نرم‌افزار" },
  { _id: "allCategories_6", name: "امنیت دیجیتال" },
  { _id: "allCategories_7", name: "طراحی UI/UX" },
  { _id: "allCategories_8", name: "سرویس‌های ابری" },
  { _id: "allCategories_9", name: "وب۳ و بلاک‌چین" },
  { _id: "allCategories_10", name: "تحلیل داده" },
];

export function getAllCategories() {
  const data = [...Categories];
  return data;
}

export function getAllCourses() {
  const data = [...Courses];
  return data;
}
