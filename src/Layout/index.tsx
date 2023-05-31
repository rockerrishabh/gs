import { useEffect } from "react";
import { TitleLayout } from "../lib/store";

function Layout({ children }: { children: React.ReactNode }) {
  const show = TitleLayout((state) => state.title);

  useEffect(() => {
    document.title = show;
  }, [show]);
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

export default Layout;
