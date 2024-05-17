import { useEffect, useRef } from "react";

interface Props {
  page_number: number;
}

const PageLinks = ({ page_number }: Props) => {
  const isInitialized = useRef(false);
  useEffect(() => {
    if (!isInitialized.current) {
      const link_div = document.getElementById("pages-link-div");

      if (link_div) {
        if (page_number != 1) {
          const page_array: number[] = [
            page_number - 1,
            page_number,
            page_number + 1,
          ];
          page_array.forEach((page) => {
            const link = document.createElement("a");
            link.id = "link-" + page.toString();
            link.href = "/products/" + page.toString();
            link.innerText = page.toString();
            link_div.appendChild(link);
          });
        } else {
          const page_array: number[] = [
            page_number,
            page_number + 1,
            page_number + 2,
          ];
          page_array.forEach((page) => {
            const link = document.createElement("a");
            link.href = "/products/" + page.toString();
            link.innerText = page.toString();
            link_div.appendChild(link);
          });
        }
        const current_page_link = document.getElementById(
          "link-" + page_number.toString()
        );
        if (current_page_link) {
          console.log("current_page_var");
          current_page_link.className = "underline hover:no-underline";
        }
      }

      isInitialized.current = true;
    }
  }, [page_number]);

  return <div id="pages-link-div" className="flex gap-4 font-bold my-4"></div>;
};

export default PageLinks;
