import { useEffect } from "react";
import { useNavigate } from "react-router";

const PORTAL_ID = "50442232";
const FORM_ID = "6b22924b-6cca-4508-b764-364917b3aeed";
const SCRIPT_ID = "hs-forms-embed-script";

export const HubSpotForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://js.hsforms.net/forms/embed/${PORTAL_ID}.js`;
      script.defer = true;
      document.head.appendChild(script);
    }

    // HubSpot emits a postMessage from the iframe when the form is submitted.
    // Intercepting it here redirects the parent window (not the iframe) to /gracias.
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data?.type === "hsFormCallback" &&
        event.data?.eventName === "onFormSubmitted"
      ) {
        navigate("/gracias");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <div
      className="hs-form-frame"
      data-region="na1"
      data-form-id={FORM_ID}
      data-portal-id={PORTAL_ID}
    />
  );
};
