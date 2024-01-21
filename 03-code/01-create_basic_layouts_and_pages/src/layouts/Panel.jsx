import { useEffect } from "react";
import { Form, NavLink, Outlet, useLocation } from "react-router-dom";

function PanelLayout() {
  const url = useLocation();

  return (
    <>
      <NavLink to='/'>صفحه اصلی</NavLink>
      <ul>
        <li>
          <NavLink to="">داشبورد</NavLink>
          <ul>
            <li>
              <NavLink to="">میزکار</NavLink>
            </li>
            <li>
              <NavLink to="notifications">پیام‌ها</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="courses">دوره‌ها</NavLink>
          <ul className="ms-4">
            <li>
              <NavLink to="courses">تمام دوره‌ها</NavLink>
            </li>
            <li>
              <NavLink to="courses/lists">لیست‌ها</NavLink>
            </li>
            <li>
              <NavLink to="courses/wishlist">علاقه‌مندی‌ها</NavLink>
            </li>
            <li>
              <NavLink to="courses/archived">آرشیو دوره‌ها</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="articles">اخبار و مقالات</NavLink>
          <ul className="ms-4">
            <li>
              <NavLink to="articles/reading-list">علاقه‌مندی‌ها</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="user">حساب کاربری</NavLink>
          <ul className="ms-4">
            <li>
              <NavLink to="user">نمایه عمومی</NavLink>
            </li>
            <li>
              <NavLink to="user/userId">اطلاعات کاربری</NavLink>
            </li>
            <li>
              <NavLink to="user/edit-profile">ویرایش پروفایل</NavLink>
            </li>
            <li>
              <NavLink to="user/edit-gallery">گالری تصاویر</NavLink>
            </li>
            <li>
              <NavLink to="user/edit-security">امنیت حساب</NavLink>
            </li>
            <li>
              <NavLink to="user/edit-privacy">حریم‌شخصی</NavLink>
            </li>
            <li>
              <NavLink to="user/manage-notifications">مدیریت اعلانات</NavLink>
            </li>
            <li>
              <NavLink to="user/disable-account">غیرفعال سازی</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="my-comments">نظرات من</NavLink>
        </li>
        <li>
          <NavLink to="support-tickets">پشتیبانی</NavLink>
        </li>
        <li>
          <Form
            action="/auth/logout"
            method="post"
          >
            {history.pushState({ comeFrom: url.pathname },"push the url we come from")}
            <button>خروج</button>
          </Form>
        </li>
      </ul>
      <Outlet></Outlet>
    </>
  );
}

export default PanelLayout;
