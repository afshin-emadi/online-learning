import { createBrowserRouter } from "react-router-dom";
import { RootLayout, AuthLayout, PanelLayout } from "@layouts/index";
import {
  Landing,
  AboutUs,
  Article,
  Articles,
  Course,
  Courses,
  Login,
  Register,
  ForgetPass,
  ResetPass,
  Dashboard,
  PublicProfile,
  UserDetails,
  EditProfile,
  UserGallery,
  Security,
  Privacy,
  ManageNotifications,
  DisableUser,
  MyCourses,
  MyCourse,
  Lists,
  Wishlist,
  ArchivedCourses,
  ReadingList,
  Comments,
  Tickets,
  Notifications,
} from "@pages/index";
import { action as logoutAction } from "@pages/auth/Logout";

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:courseId", element: <Course /> },
      { path: "articles", element: <Articles /> },
      {
        path: "articles/:articleId",
        element: <Article />,
      },
      { path: "aboutus", element: <AboutUs /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPass /> },
      { path: "rest-password", element: <ResetPass /> },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "notifications", element: <Notifications /> },
      {
        path: "user",
        children: [
          { index: true, element: <PublicProfile /> },
          { path: ":userId", element: <UserDetails /> },
          { path: "edit-profile", element: <EditProfile /> },
          { path: "edit-gallery", element: <UserGallery /> },
          { path: "edit-security", element: <Security /> },
          { path: "edit-privacy", element: <Privacy /> },
          { path: "manage-notifications", element: <ManageNotifications /> },
          { path: "disable-account", element: <DisableUser /> },
        ],
      },
      {
        path: "courses",
        children: [
          { index: true, element: <MyCourses /> },
          { path: ":courseId", element: <MyCourse /> },
          { path: "lists", element: <Lists /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "archived", element: <ArchivedCourses /> },
        ],
      },
      {
        path: "articles",
        children: [
          // { index: true, element: <h1>All Articles</h1> },
          // {
          //   path: ":articleId",
          //   element: <h1>Article, Save reading position</h1>,
          // },
          // {
          //   path: "lists",
          //   element: <h1>Organize and access your courses faster!</h1>,
          // },
          {
            path: "reading-list",
            element: <ReadingList />,
          },
        ],
      },
      { path: "my-comments", element: <Comments /> },
      // {
      //   path: "my-comments/:commentId",
      //   element: <h1>Comment and it's replies</h1>,
      // },
      { path: "support-tickets", element: <Tickets /> },
      // { path: "support-tickets/:ticketsId", element: <h1>Support Ticket</h1> },
    ],
  },
]);
