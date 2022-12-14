import React, { useEffect } from "react";

function WidgetPayment({total}:{total: string | number}) {
  useEffect(() => {
    const form = document.querySelector("#form");
    const url = window.location;
    if (form && total > 0) {
      const script = document.createElement("script");
      const attributes: Record<string, string> = {
        type: "text/javascript",
        src: "https://checkout.wompi.co/widget.js",
        class: "current",
        "data-render": "button",
        "data-redirect-url": url.origin + url.pathname,
        "data-public-key": "pub_prod_60fKhrx5dra8a9DFb9ZkUIRpZ3Kfi4Cr",
        "data-currency": "COP",
        "data-amount-in-cents": `${total}00`,
        "data-reference": `TESTPRUEBA${Math.floor(Math.random() * 100000)}`,
      };
      Object.keys(attributes).forEach((key) => {
        script.setAttribute(key, attributes[key]);
      });
      form.appendChild(script);
    }
  }, [total]);

  return <form id="form"></form>;
}


export default WidgetPayment;