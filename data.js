// const courses = [
//   {
//     _Id: "",
//     title: "",
//     description: "",
//     status: "",// 1 for registering 2 for executing 3 for ended
//     level: "",  //1, 2 , 3 for basic, intermediate, advanced
//     teacher: "",
//     class: "",
//     price: "",
//     enrolled: "", //number of registered student in this course
//     rate: "",
//     liked: "", //total liked number
//     disLiked: "", //total disliked number
//     userRate:"", //0 for current user not rated or 1 to 5 natural number for current user rated
//     userRateId:"",
//     userEmotion: "", // either -1 for dislike 0 for current user didn't reacted and 1 for current user liked
//     userEmotionId: "",
//     userWishList: "", // true or false
//     userWishListId: "",
//     commentCount: "",
//   },
// ];
const courses = [
  {
    _Id: "c1",
    title: "Course 1",
    description: "This is our first course",
    status: 1,
    level: 1,
    teacher: "Mehdi Asghari",
    class: "C1",
    price: 550,
    enrolled: 13,
    capacity: 50,
    rate: 4.1,
    liked: 35,
    disLiked: 3,
    userRate: 0,
    userRateId: null,
    userEmotion: 0,
    userEmotionId: null,
    userWishList: false,
    userWishListId: null,
    commentCount: 12,
  },
];

const getAllCourses = () => {
  return courses;
};

