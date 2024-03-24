import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import { Idify } from "../idify/components/Idify";
export const Route = createLazyFileRoute("/license_form")({
  component: LicenseForm,
});

function LicenseForm() {
  const license = {
    given_name: "John",
    last_name: "Doe",
    address: "123 Fake St, Edmonton",
    license_number: "123456-789",
    birthdate: new Date().toString(),
    gender: "M",
  };

  const [given_name, setGivenName] = useState(license.given_name);
  const [last_name, setLastName] = useState(license.last_name);
  const [address, setAddress] = useState(license.address);
  const [license_number, setLicenseNumber] = useState(license.license_number);
  const [birthdate, setBirthDate] = useState(license.birthdate);
  const [gender, setGender] = useState(license.gender);

  return (
    <div>
      <Header></Header>
      <form className="bg-white max-w-md w-full mx-auto rounded-lg p-8">
        <h3 className="text-center font-bold py-4">LICENSE FORM</h3>
        <div>
          <label
            htmlFor="given-name"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Given Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="given-name"
              id="given-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={given_name}
              onChange={(event) => {
                setGivenName(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="family-name"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Last Name:
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="family-name"
              id="family-name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={last_name}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
        </div>
        <label
          htmlFor="address"
          className="block text-sm font-bold leading-6 text-gray-900"
        >
          Address:
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="address"
            id="address"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <label
          htmlFor="license-number"
          className="block text-sm font-bold leading-6 text-gray-900"
        >
          License Number:
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="license-number"
            id="license-number"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={license_number}
            onChange={(event) => {
              setLicenseNumber(event.target.value);
            }}
          />
        </div>
        <div className="inline-block w-[45%] pl-0 p-4">
          <label
            htmlFor="birthdate"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Date Of Birth:
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="birthdate"
              id="birthdate"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={birthdate}
              onChange={(event) => {
                setBirthDate(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="inline-block w-[45%] px-2">
          <label
            htmlFor="gender"
            className="block text-sm font-bold leading-6 text-gray-900"
          >
            Gender:
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="gender"
              id="gender"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={gender}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            />
          </div>
        </div>
      </form>

      <Idify />
    </div>
  );
}
