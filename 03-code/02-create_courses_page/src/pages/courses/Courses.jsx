import { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [data, setData] = useState([]);
  return (
    <main>
      <section className="mt-10 tablet:flex">
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
        <aside className="shadow-light mt-14 flex flex-col items-center rounded-lg bg-white tablet:mt-0 tablet:w-4/10 laptop:w-3/10">
          <h5 className="px-6 py-6 text-justify text-xl font-medium laptop:text-2xl">
            مطمئن نیستید چه دوره ای را باید طی کنید؟ مطمئن نیستید از کجا شروع
            کنید؟ ما به شما کمک می کنیم مسیر درست را پیدا کنید
            <span className="inline-block animate-bounce">👇</span>
          </h5>
          <Link
            to=""
            className="bg-my-red-500 mx-2 mb-6 max-w-max rounded-full px-10 py-2 text-white"
          >
            <button>راهنمای مسیر آموزشی</button>
          </Link>
        </aside>
      </section>
      <section className="mt-14 items-center justify-center tablet:flex">
        <article className="bg-gray-100 px-4 py-4 text-center tablet:w-1/3">
          <p className="text-my-red-500 text-3xl font-thin tablet:text-5xl laptop:text-8xl">{`+${"۶۲"}`}</p>
          <div className="mx-auto my-4 w-4 border border-black tablet:w-6 tablet:border-2 laptop:w-12"></div>
          <p className="tablet:text-lg laptop:text-2xl">{"دوره"}</p>
        </article>
        <article className="bg-gray-100 px-4 py-4 text-center tablet:mx-4 tablet:w-1/3 laptop:mx-8">
          <p className="text-my-red-500 text-3xl font-thin tablet:text-5xl laptop:text-8xl">{`+${"۱,۱۶۰"}`}</p>
          <div className="mx-auto my-4 w-4 border border-black tablet:w-6 tablet:border-2 laptop:w-12"></div>
          <p className="tablet:text-lg laptop:text-2xl">{"ساعت ویدیو"}</p>
        </article>
        <article className="bg-gray-100 px-4 py-4 text-center tablet:w-1/3">
          <p className="text-my-red-500 text-3xl font-thin tablet:text-5xl laptop:text-8xl">{`+${"۱۲,۱۰۰"}`}</p>
          <div className="mx-auto my-4 w-4 border border-black tablet:w-6 tablet:border-2 laptop:w-12"></div>
          <p className="tablet:text-lg laptop:text-2xl">{"تعداد درس"}</p>
        </article>
      </section>
      <section>Explor courses(sort & filters)</section>
      <section>all Courses</section>
      <section>subscribe</section>
      <section>Path finder</section>
    </main>
  );
}

export default Courses;
