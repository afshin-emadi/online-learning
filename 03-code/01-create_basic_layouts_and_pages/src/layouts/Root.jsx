import { NavLink, Outlet } from "react-router-dom";
import logo from "@assets/arts/logo/academy.svg";
function RootLayout() {
  return (
    <>
      <header className="hidden items-center justify-between text-sm tablet:flex tablet:py-2 laptop:text-lg">
        <nav className="flex items-center tablet:gap-x-2 laptop:gap-x-4">
          <img id="LOGO" src={logo} alt="logo" className="animate-rgb" />
          <ul className="flex gap-x-4">
            <li>
              <NavLink to="/">صفحه اصلی</NavLink>
            </li>
            <li>
              <NavLink to="/courses">دوره‌ها</NavLink>
            </li>
            <li>
              <NavLink to="/articles">اخبار و مقالات</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">درباره‌ما</NavLink>
            </li>
          </ul>
        </nav>
        {true && (
          <ul className="flex items-center font-light">
            <li className="border-my-red-500 text-my-red-500 cursor-pointer rounded-full border px-8 py-1 tablet:px-6 laptop:px-8">
              <NavLink to="/auth">ورود</NavLink>
            </li>
            <li className="bg-my-red-500 ms-1 cursor-pointer rounded-full py-1 text-white tablet:px-4 laptop:px-8">
              <NavLink to="/panel">به آکادمی بپیوندید</NavLink>
            </li>
          </ul>
        )}
      </header>
      <div className="">
        <Outlet />
      </div>
      <footer className="flex bg-amber-100">
        <ul className="flex gap-x-4">
          <li>
            <NavLink to="/">صفحه اصلی</NavLink>
          </li>
          <li>
            <NavLink to="/courses">دوره‌ها</NavLink>
          </li>
          <li>
            <NavLink to="/articles">اخبار و مقالات</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">درباره‌ما</NavLink>
          </li>
          <li>
            <NavLink to="/auth">ورود</NavLink>
          </li>
          <li>
            <NavLink to="/panel">پنل</NavLink>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default RootLayout;
