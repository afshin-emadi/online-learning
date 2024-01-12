import { createBrowserRouter, Outlet } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <h1>
        RootLayout
        <Outlet />
      </h1>
    ),
    children: [
      { index: true, element: <h1>HomePage</h1> },
      { path: "courses", element: <h1>Courses</h1> },
      { path: "courses/:courseId", element: <h1>Course</h1> },
      { path: "articles", element: <h1>Articles</h1> },
      { path: "articles/:articleId", element: <h1>Article, Save reading position</h1> },
      { path: "aboutus", element: <h1>AboutUs</h1> },
    ],
  },
  {
    path: "/auth",
    element: (
      <h1>
        AuthLayout
        <Outlet />
      </h1>
    ),
    children: [
      { index: true, element: <h1>Login</h1> },
      { path: "register", element: <h1>Register</h1> },
      { path: "forget-password", element: <h1>ForgetPass</h1> },
      { path: "rest-password", element: <h1>ResetPass</h1> },
    ],
  },
  { path: "logout", loader: ()=>{} },
  {
    path: "/panel",
    element: (
      <h1>
        PanelLayout
        <Outlet />
      </h1>
    ),
    children: [
      { index: true, element: <h1>Dashboard</h1> },
      {
        path: "user",
        children: [
          { path: ":userId", element: <h1>Public Profile</h1> },
          { path: "edit-profile", element: <h1>Edit Profile</h1> },
          { path: "edit-gallery", element: <h1>photo gallery</h1> },
          {
            path: "edit-security",
            element: (
              <ol>
                <li>password strenth and edit password</li>
                <li>email verification</li>
                <li>phone verification</li>
                <li>two step login</li>
              </ol>
            ),
          },
          {
            path: "edit-privacy",
            element: (
              <ol>
                <li>Show hide your profile to logged in users</li>
                <li>Show hide courses you're taking</li>
                <li>Show hide contact info</li>
                <li>Show hide profile image</li>
                <li>Show hide finished courses</li>
              </ol>
            ),
          },
          { path: "edit-notification", element: <h1>disable account</h1> },
          { path: "disable-account", element: <h1>disable account</h1> },
        ],
      },
      {
        path: "my-courses",
        children: [
          { index: true, element: <h1>All Courses - Accepted and Reserved</h1> },
          { path: ":courseId", element: <h1>Course details, progress, scheduler</h1> },
          { path: "lists", element: <h1>Organize and access your courses faster!</h1> },
          { path: "wishlist", element: <h1>Wishlist</h1> },
          { path: "archived", element: <h1>Focus on only the courses that matter to you.</h1> },
        ],
      },
      {
        path: "articles",
        children: [
          { index: true, element: <h1>All Articles</h1> },
          { path: ":articleId", element: <h1>Article, Save reading position</h1> },
          { path: "lists", element: <h1>Organize and access your courses faster!</h1> },
          { path: "reading-list", element: <h1>Save for reading later show up here</h1> },
        ],
      },
      { path: "my-comments", element: <h1>All Comments</h1> },
      { path: "my-comments/:commentId", element: <h1>Comment and it's replies</h1> },
      { path: "support-tickets", element: <h1>All tickets</h1> },
      { path: "support-tickets/:ticketsId", element: <h1>Support Ticket</h1> },
    ],
  },
]);
