import { CalendarIcon, LastPageIcon } from "@assets/icons/svg";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Course(props) {
  const { pathname, state: course } = useLocation();
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    const onScroll = () => window.scrollY > 700 && setOffset(window.scrollY);
    const timeoutId = setTimeout(() => {
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 1000);

    return () => {
      // clean up code
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, [offset]);

  return (
    <main>
      <div className="min-h-130  md:bg-slate-700">
        <div className="md:mainContainer relative items-start justify-start md:flex ">
          <section className="bg-slate-700 px-8 py-16 text-lg text-white tablet:text-xl md:w-6/10 md:px-0 laptop:w-7/10">
            <nav className=" ">
              <Link to="/courses" className="flex items-center">
                <span>
                  <LastPageIcon color="white" />
                </span>
                {"بازگشت به دوره‌ها"}
              </Link>
            </nav>
            <article className="mb-16 flex w-full flex-col items-center pt-10 text-justify md:items-start md:bg-slate-700">
              <h1 className="text-3xl font-bold tablet:text-4xl tablet:font-semibold">
                {course?.title}
              </h1>
              <p className="mt-6 line-clamp-[10] font-extralight md:line-clamp-6">
                {course?.description}
              </p>
              <summary className="mt-8 w-full list-none font-extralight">
                {course?.title}
              </summary>
              <footer className="mt-8 flex w-full flex-col laptop:flex-row laptop:items-stretch">
                <div className="flex gap-x-6">
                  <div
                    className="flex gap-x-2 font-iranSansFaNum text-5xl font-black text-white"
                    dir="ltr"
                  >
                    <span className="flex h-16 w-12 items-center justify-center rounded-lg bg-my-red-500 shadow-black2">
                      0
                    </span>
                    <span className="flex h-16 w-12 items-center justify-center rounded-lg bg-my-red-500 shadow-black2">
                      3
                    </span>
                  </div>
                  <div className="flex flex-col justify-between font-iranSansFaNum">
                    <h4 className="text-2xl font-black">{`${"3"} ماه`}</h4>
                    <p className="text-right text-sm">
                      {
                        "میانگین زمانی که طول می‌کشد دانشجویان دوره را به پایان برسانند"
                      }
                    </p>
                  </div>
                </div>
                <div className="mx-6 my-8 h-1 bg-white laptop:mx-8 laptop:my-0 laptop:h-auto laptop:w-1"></div>
                <div className="flex flex-row">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                    <ul className="flex items-center justify-start">
                      {course?.teachers[0] && (
                        <li
                          key={course?.teachers[0]._id}
                          className=" overflow-hidden rounded-full border-2"
                        >
                          <img
                            className="h-8 w-8"
                            src={course.teachers[0].thumb}
                            alt={course.teachers[0].name}
                          />
                        </li>
                      )}
                      {course?.teachers[1] &&
                        course.teachers.map((teacher, index) => {
                          if (index > 0) {
                            return (
                              <li
                                key={teacher._id}
                                className={
                                  "animate-slideRight overflow-hidden rounded-full border-2"
                                }
                                style={{
                                  transform: `translateX(${index * 12}px)`,
                                }}
                              >
                                <img
                                  className="h-8 w-8"
                                  src={teacher.thumb}
                                  alt={teacher.name}
                                />
                              </li>
                            );
                          }
                        })}
                    </ul>
                    <div className="flex text-sm">
                      <span className="me-4">{"مدرس:"}</span>
                      <ul className="flex flex-wrap gap-x-2 gap-y-2">
                        {course?.teachers.map((teacher) => (
                          <li className="underline underline-offset-8">
                            <Link to={`/teachers/${teacher._id}`}>
                              {teacher?.name}
                            </Link>
                            ،
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <span><CalendarIcon/></span>
                  </div>
                </div>
              </footer>
            </article>
          </section>
          <aside className="relative -top-12 z-10 mx-4 md:absolute md:left-0 md:top-20 md:mx-0 md:w-4/10 md:pe-4 laptop:w-3/10 laptop:pe-6">
            <section className="overflow-hidden rounded-lg border-4">
              <div className="bg-lime-20 h-48 w-full"></div>
              <div className="bg-lime-20 h-48 w-full"></div>
              <div className="bg-lime-20 h-48 w-full"></div>
              <div className="bg-lime-20 h-48 w-full"></div>
              <div className="bg-lime-20 h-48 w-full"></div>
            </section>
          </aside>
        </div>
      </div>
      <section>Over view</section>
      <section>reviews</section>
      <section>Course Curriculum</section>
      <section>Instructurs</section>
      <section>FAQs</section>
      <section>Pricing</section>
      <div className="relative right-0 m-0 h-48 bg-red-200"></div>
    </main>
  );
}

export default Course;
