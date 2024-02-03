import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

import academyIcon from "@assets/arts/logo/academy.svg";
import {
  BookmarkIcon,
  DislikeIcon,
  LikeIcon,
  RateStarIcon,
} from "@assets/icons/svg";

import { getAllCategories, getAllCourses } from "@config/data";

import testIMG from "@assets/images/courses/test1.webp";
import testIMG2 from "@assets/images/courses/test2.webp";
import testIMG3 from "@assets/images/courses/test3.webp";
import testIMG4 from "@assets/images/courses/test4.webp";
import testIMG5 from "@assets/images/courses/test5.webp";
import teacherIMG1 from "@assets/images/teachers/test1.jpg";
import teacherIMG2 from "@assets/images/teachers/test2.jpg";

function Courses() {
  const data = useLoaderData();

  const categories = data?.categories;
  const courses = data?.courses;
  const [filterExpanded, setFilterExpanded] = useState(false);

  const onExpandClick = () => {
    setFilterExpanded((prevState) => !prevState);
  };

  return (
    <>
      <main className="mainContainer">
        {/* //////////////////////////////////////////////////// Hero Section ///////////////////////////////////////////////////////// */}

        <section className="mt-24 tablet:flex">
          <header className="text-center tablet:w-6/10 tablet:text-right laptop:w-7/10">
            <h1 className="text-4xl font-bold laptop:text-5xl">
              دوره‌های آکادمی آنلاین
            </h1>
            <p className="mt-6 pe-4 text-lg font-extralight laptop:text-xl">
              حرفه خود را با دوره های آکادمی آنلاین ارتقا دهید. به روزترین دوره
              های فنی آنلاین. از مبتدی کامل تا استخدام شدن یا مهارت های پیشرفته
              برای پیشرفت شغلی خود پیش بروید.
            </p>
          </header>
          <aside className="mt-14 flex flex-col items-center rounded-lg bg-white shadow-light tablet:mt-0 tablet:w-4/10 laptop:w-3/10">
            <h5 className="px-6 py-6 text-justify text-xl font-medium laptop:text-2xl">
              مطمئن نیستید چه دوره ای را باید طی کنید؟ مطمئن نیستید از کجا شروع
              کنید؟ ما به شما کمک می کنیم مسیر درست را پیدا کنید
              <span className="inline-block animate-bounce">👇</span>
            </h5>
            <Link
              to=""
              className="mx-2 mb-6 max-w-max rounded-full bg-my-red-500 px-10 py-2 text-white"
            >
              <button>راهنمای مسیر آموزشی</button>
            </Link>
          </aside>
        </section>

        {/* //////////////////////////////////////////////////// Details ///////////////////////////////////////////////////////// */}

        <section className="mt-24 items-center justify-center tablet:flex">
          <article className="rounded-md bg-gray-100 px-4 py-4 text-center tablet:w-1/3">
            <p className="text-3xl font-thin text-my-red-500 tablet:text-5xl laptop:text-8xl">{`+${"۶۲"}`}</p>
            <div className="mx-auto my-4 w-4 border border-black tablet:w-6 tablet:border-2 laptop:w-12"></div>
            <p className="tablet:text-lg laptop:text-2xl">{"دوره"}</p>
          </article>
          <article className="rounded-md bg-gray-100 px-4 py-4 text-center tablet:mx-4 tablet:w-1/3 laptop:mx-8">
            <p className="text-3xl font-thin text-my-red-500 tablet:text-5xl laptop:text-8xl">{`+${"۱,۱۶۰"}`}</p>
            <div className="mx-auto my-4 w-4 border border-black tablet:w-6 tablet:border-2 laptop:w-12"></div>
            <p className="tablet:text-lg laptop:text-2xl">{"ساعت ویدیو"}</p>
          </article>
          <article className="rounded-md bg-gray-100 px-4 py-4 text-center tablet:w-1/3">
            <p className="text-3xl font-thin text-my-red-500 tablet:text-5xl laptop:text-8xl">{`+${"۱۲,۱۰۰"}`}</p>
            <div className="mx-auto my-4 w-4 border border-black tablet:w-6 tablet:border-2 laptop:w-12"></div>
            <p className="tablet:text-lg laptop:text-2xl">{"تعداد درس"}</p>
          </article>
        </section>

        {/* //////////////////////////////////////////////////// Categories, Filter and Sort ///////////////////////////////////////////////////////// */}

        <section className="mt-24 w-full rounded-3xl border border-zinc-400 px-4 py-12 text-center tablet:px-8 laptop:px-12">
          <h2 className="inline-block -translate-y-16 bg-white text-center text-2xl font-bold tablet:-translate-y-16 tablet:text-3xl laptop:-translate-y-20 laptop:text-4xl">
            در دوره‌ها کاوش کنید
          </h2>
          <div className=" flex flex-wrap justify-center text-lg uppercase text-my-blue-500">
            <span key={"AllCategories"} className="mb-10 ms-2">
              <input
                type="radio"
                id="AllCourses"
                name="coursesCategory"
                className="peer hidden"
                defaultChecked={true}
              />
              <label
                htmlFor="AllCourses"
                className="cursor-pointer rounded-full border border-my-blue-500 px-6 py-2 transition-colors duration-200 hover:bg-my-blue-500 hover:text-white  peer-checked:bg-my-blue-500 peer-checked:text-white"
              >
                همه دوره‌ها
              </label>
            </span>

            {categories?.map((category) => (
              <span key={category._id} className="mb-10 ms-2">
                <input
                  type="radio"
                  id={category._id}
                  name="coursesCategory"
                  className="peer hidden"
                />
                <label
                  htmlFor={category._id}
                  className="cursor-pointer rounded-full border border-my-blue-500 px-6 py-2 transition-colors duration-200 hover:bg-my-blue-500 hover:text-white  peer-checked:bg-my-blue-500 peer-checked:text-white"
                >
                  {category.name}
                </label>
              </span>
            ))}
          </div>
          <div
            className={`my-4 cursor-pointer text-xl transition-all duration-200 ${
              filterExpanded ? "text-my-red-500" : "text-my-blue-500"
            }`}
            aria-label="expand filter"
            onClick={onExpandClick}
          >
            {filterExpanded ? "عدم نمایش 🙉" : "نمایش بیشتر فیلترها 🙈"}
          </div>
          {filterExpanded && (
            <div className="flex flex-col gap-x-4 text-right font-light tablet:flex-row">
              <div className="w-full tablet:w-1/2 laptop:w-1/3">
                <label
                  htmlFor="levels"
                  className="mb-2 block font-bold text-zinc-600"
                >
                  سطح دوره:
                </label>
                <select
                  name="levels"
                  id="courseLevels"
                  className="w-full rounded-full border border-zinc-900 py-2 ps-4"
                >
                  <option value="0">تمام سطوح</option>
                  <option value="1">مقدماتی</option>
                  <option value="2">متوسط</option>
                  <option value="3">پیشرفته</option>
                </select>
              </div>
              <div className="mt-4 w-full tablet:mt-0 tablet:w-1/2 laptop:w-1/3">
                <label
                  htmlFor="levels"
                  className="mb-2 block font-bold text-zinc-600"
                >
                  مرتب‌سازی براساس:
                </label>
                <select
                  name="levels"
                  id="courseLevels"
                  className="w-full rounded-full border border-zinc-900 py-2 ps-4"
                >
                  <option value="0">جدیدترین‌</option>
                  <option value="1">محبوب‌ترین</option>
                  <option value="2">قیمت افزایشی</option>
                  <option value="3">قیمت کاهشی</option>
                </select>
              </div>
            </div>
          )}
        </section>

        {/* //////////////////////////////////////////////////// AllCourses ///////////////////////////////////////////////////////// */}

        <section className="mt-24 grid w-full grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
          {courses?.map((course) => (
            <article
              key={course._id}
              className="relative h-125 w-full overflow-hidden rounded-md shadow-lg transition-shadow duration-200 hover:shadow-2xl"
            >
              <span
                className={`absolute right-1 top-1 px-4 py-1 text-sm text-white tablet:text-base ${
                  course?.level === 1
                    ? "bg-lime-500/85"
                    : course.level === 2
                      ? "bg-my-blue-500/85 "
                      : course.level === 3
                        ? "bg-my-red-500/85"
                        : ""
                }
            }`}
              >
                {course?.level === 1
                  ? "مقدماتی"
                  : course.level === 2
                    ? "متوسط"
                    : course.level === 3
                      ? "پیشرفته"
                      : "نامعلوم"}
              </span>
              <figure className="h-4/10">
                <img
                  className={
                    !course.thumb
                      ? "object-fit h-full w-full animate-rgb"
                      : "h-full w-full object-cover"
                  }
                  src={course?.thumb || academyIcon}
                  alt={course?.title || "تصویر دوره"}
                />
                <figcaption></figcaption>
              </figure>
              <section className="flex h-6/10 w-full select-none flex-col justify-around px-4 py-4">
                <header>
                  <Link to={course?._id || ""}>
                    <h2 className="line-clamp-2 h-14 text-xl font-bold">
                      {course?.title}
                    </h2>
                  </Link>
                  <summary className="mt-4 flex list-none flex-wrap items-center font-iranSansFaNum text-sm font-thin [&>*:not(:first-child)]:ms-2">
                    <span>{`🕙${course?.duration ?? "00:00"}`}</span>
                    <span>{`📓${course?.lessons ?? "آماده‌سازی"}`}</span>
                    <span className="flex flex-nowrap">
                      <LikeIcon size="sm" color={"gray"} isFill={false} />
                      <span>{course?.liked ?? "-"}</span>
                    </span>
                    <span className="flex flex-nowrap">
                      <DislikeIcon size="sm" color={"gray"} isFill={true} />
                      <span>{course?.disliked ?? "-"}</span>
                    </span>
                    <span className="flex flex-nowrap">
                      <RateStarIcon
                        size="sm"
                        color={"gray"}
                        isFill={(course?.userRate && true) || false}
                        isHalf={false}
                      />
                      <span>{course?.rate ?? "-"}</span>
                    </span>
                    <BookmarkIcon
                      size="sm"
                      color="gray"
                      isFill={course?.userWishlist}
                    />
                  </summary>
                </header>
                <p className="mt-2 line-clamp-3 text-justify text-sm text-zinc-600">
                  {course?.description ?? "در حال آماده‌سازی"}
                </p>
                <ul className="mt-2 box-border flex gap-x-2 text-xs">
                  {course?.teachers.map((teacher) => (
                    <Link
                      key={course?._id + teacher?._id}
                      to={`/teachers/${teacher?._id}` || ""}
                    >
                      <li className="flex w-full items-center">
                        <img
                          className="h-6 rounded-full target:h-8"
                          src={teacher?.thumb}
                          alt="استاد"
                        />
                        <p className="ms-2 line-clamp-1">
                          {teacher?.name || "-"}
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
                <footer className="mt-4 flex justify-center gap-x-2 text-center">
                  <Link
                    to={course?._id || ""}
                    className="w-full rounded-md border border-my-blue-500 py-1 text-my-blue-500 transition-colors duration-200 hover:bg-my-blue-500 hover:text-white"
                  >
                    {"جزییات‌ دوره"}
                  </Link>
                  <Link
                    to=""
                    className="w-full rounded-md bg-my-blue-500 py-1 text-white transition-colors duration-200 hover:bg-my-blue-600"
                  >
                    {"شروع یادگیری"}
                  </Link>
                </footer>
              </section>
            </article>
          ))}
        </section>
        <section className="mt-24 flex w-full flex-col items-center rounded-md px-6 py-8 shadow-light tablet:flex-row tablet:px-10 tablet:py-12">
          <div className="w-full">
            <h2 className="text-xl font-bold">
              {
                "با عضویت در خبرنامه از جدیدترین دوره‌ها و پیشنهادهای ویژه آگاه شوید:"
              }
            </h2>
            <p className="mt-2 text-sm font-thin">
              {"هر زمان که خواستید می‌توانید عضویت خود را لغو کنید"}
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col items-center text-sm tablet:mt-0 tablet:flex-row laptop:mr-8 desktop:mr-14">
            <input
              type="email"
              className="w-full rounded-full border border-zinc-700 py-2 ps-4 text-center tablet:flex-1"
              placeholder="آدرس پست الکترونیکی خود را وارد کنید"
            />
            <button
              className="mt-4 rounded-full bg-my-red-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-my-red-600 tablet:mr-3 tablet:mt-0 tablet:flex-shrink desktop:px-8
          "
            >
              {"اشتراک در خبرنامه"}
            </button>
          </div>
        </section>
      </main>
      <section className="mt-24 flex w-full flex-col items-center justify-center gap-x-6 gap-y-10 bg-my-blue-500 px-6 py-8 text-center text-white shadow-light tablet:px-10 tablet:py-12 desktop:flex-row desktop:text-left">
        <h2 className="text-3xl font-thin tablet:text-4xl desktop:text-5xl">
          {"نمیدونی از کجا "}
          <span className="text-my-lightBlue-400">{"شروع "}</span>
          {"کنی یا "}
          <span className="text-my-lightBlue-400">{"قدم بعدی "}</span>
          {"چیه؟"}
        </h2>
        <button
          className="rounded-full border-2 border-white px-6 py-4 text-xl font-semibold text-white transition-colors duration-200  hover:border-my-lightBlue-400 hover:bg-my-lightBlue-400 hover:text-my-blue-500 tablet:mr-3 tablet:mt-0 tablet:flex-shrink tablet:text-2xl desktop:px-8 desktop:text-3xl
          "
        >
          {"مسیر آموزشی خودت رو پیدا کن"}
        </button>
      </section>
    </>
  );
}

export default Courses;

export function loader() {
  const data = {
    categories: getAllCategories(),
    courses: getAllCourses(),
  };
  return data;
}
