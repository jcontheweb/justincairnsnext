import { useState, useContext } from "react";
import axios from "axios";

import { ContactFormContext } from "../context/contact-form/ContactFormState";

import PrimaryButton from "./Buttons/PrimaryButton";

const CONTACT_REASONS = [
  "I need a website",
  "New Position (Full time)",
  "New Position (Contract)",
  "New Position (Freelance)",
  "Other",
];

export default function ContactForm() {
  const { close } = useContext(ContactFormContext)
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    reason: CONTACT_REASONS[0],
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        number: "",
        reason: CONTACT_REASONS[0],
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    event.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/moqprver",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
      <form
        onSubmit={handleOnSubmit}
        className="relative w-full h-full p-4 overflow-auto bg-white shadow-lg sm:h-auto sm:max-w-lg lg:p-8"
      >
        <button onClick={close} type="button" className="absolute top-0 right-0 p-2">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <p className="text-2xl font-semibold">Get in touch</p>
        <input
          type="hidden"
          name="_subject"
          value="New lead on justincairns.ca"
        ></input>
        <div className="mt-6">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium leading-none tracking-wide text-black"
          >
            Name / Company
          </label>
          <div className="border border-black focus-within:ring-2">
            <input
              id="name"
              type="text"
              name="name"
              className="w-full p-2 border-none focus:outline-none"
              value={inputs.name}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="_replyto"
            className="block mb-1 text-sm font-medium leading-none tracking-wide text-black"
          >
            Email
          </label>
          <div className="border border-black focus-within:ring-2">
            <input
              id="email"
              type="email"
              name="_replyto"
              className="w-full p-2 border-none focus:outline-none"
              value={inputs.email}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="number"
            className="block mb-1 text-sm font-medium leading-none tracking-wide text-black"
          >
            Contact number
          </label>
          <div className="border border-black focus-within:ring-2">
            <input
              id="number"
              name="number"
              type="text"
              className="w-full p-2 border-none focus:outline-none"
              value={inputs.number}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="reason"
            className="block mb-1 text-sm font-medium leading-none tracking-wide text-black"
          >
            Reason for contact
          </label>
          <div className="border border-black focus-within:ring-2">
            <select
              id="reason"
              name="reason"
              value={inputs.reason}
              onChange={handleOnChange}
              className="w-full p-2 border-none focus:outline-none"
            >
              {CONTACT_REASONS.map((reason, index) => (
                <option value={reason} key={index}>
                  {reason}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium leading-none tracking-wide text-black"
          >
            Message
          </label>
          <div className="flex border border-black focus-within:ring-2">
            <textarea
              className="w-full h-full p-2 border-none appearance-none focus:outline-none"
              value={inputs.message}
              onChange={handleOnChange}
              name="message"
              id="message"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <PrimaryButton type="submit" disabled={status.submitting} size="lg">
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
