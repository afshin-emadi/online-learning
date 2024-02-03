import { redirect } from "react-router-dom";
// export default function Logout() {
// let {state} = useLocation();
// console.log("location: ",state)
//   return;
// }
export function action() {
  const { comeFrom } = history.state;
  const confirm = window.confirm("از حساب خود خارج می‌شوید؟");
  if (confirm) {
    return redirect("/");
  }
  return redirect(comeFrom);
}
