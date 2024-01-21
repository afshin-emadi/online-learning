import { NavLink, Outlet } from "react-router-dom";

function AuthLayout(){
    return <>
    <ul>
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
    <Outlet></Outlet>
    </>
}

export default AuthLayout;