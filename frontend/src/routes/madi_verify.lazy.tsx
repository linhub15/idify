import { createLazyFileRoute } from "@tanstack/react-router";
import madi_verify_stepper from "../assets/imgs/madi_verify_stepper.png";

export const Route = createLazyFileRoute("/madi_verify")({
  component: MadiVerify,
});

function MadiVerify() {
  return (
    <div className="bg-white font-acumin">
      <form className="mx-auto max-w-2xl">
        <img
          className="py-6"
          src={madi_verify_stepper}
          alt="Madi Verify Stepper"
        />
        <h2 className="py-4 text-4xl font-semibold text-gray-700">
          Confirm ID
        </h2>
        <p className="text-3xl py-4">Driver's licence or ID card information</p>
        <p className="py-4">
          Please ensure information is entered{" "}
          <span className="font-semibold">EXACTLY</span>{" "}
          as it appears on your ID.
        </p>
        <div className="py-2">
          <label className="font-semibold text-gray-800">
            No (Licence or ID number)
          </label>
          <div className="py-2">
            <input
              className="rounded w-20 p-2 border border-slate-300"
              type="text"
            />
            <span className="px-2">-</span>
            <input
              className="rounded w-20 p-2 border border-slate-300"
              type="text"
            />
          </div>
          <div className="text-xs text-gray-800">
            Front of card.{" "}
            <a className="text-blue-700 underline" href="#">Where's this?</a>
          </div>
        </div>

        <div>
          <label className="font-semibold text-gray-800">
            ACN (Audit Control Number)
          </label>
          <div className="py-2">
            <input
              className="rounded w-full p-2 border border-slate-300"
              type="text"
            />
          </div>
          <div className="text-xs text-gray-800">
            Back of card, bottom right number.{" "}
            <a className="text-blue-700 underline" href="#">Where's this?</a>
          </div>
        </div>

        <div className="py-8 space-x-4">
          <button
            className="border-2 border-goa hover:border-blue-900 text-goa hover:text-blue-900 rounded px-3 py-2"
            type="button"
          >
            Cancel
          </button>
          <button
            className="border-2 border-goa hover:border-blue-900 bg-goa text-white rounded px-3 py-2 hover:bg-blue-900"
            type="button"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
