import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";

const MESSAGE = "Interested? We are open for preseed-round - contact mcu7uh@virginia.edu!";

export function InvestorContactWidget() {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const distanceFromRight = window.innerWidth - event.clientX;
      const distanceFromBottom = window.innerHeight - event.clientY;
      setOpen(distanceFromRight < 190 && distanceFromBottom < 170);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!widgetRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <div ref={widgetRef} className={`investor-contact ${open ? "is-open" : ""}`}>
      <div className="investor-contact-copy" aria-hidden={!open}>
        <div className="investor-contact-status"><i /> Pre-seed open</div>
        <p>{MESSAGE}</p>
        <a href="mailto:mcu7uh@virginia.edu">
          <Mail /> Contact <ArrowUpRight />
        </a>
      </div>
      <button
        type="button"
        className="investor-contact-trigger"
        aria-label={open ? "Close investor contact" : "Open investor contact"}
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        {open ? <X className="contact-close" /> : <img src={`${import.meta.env.BASE_URL}domainic-mark.png`} alt="" />}
      </button>
    </div>
  );
}
