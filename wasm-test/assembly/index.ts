// The entry file of your WebAssembly module.

type License = {
  family_name: string,
  given_name: string,
  address: string,
  date_of_birth: string,
  license_number: string,
  sex: "M" | "F" | "X"
};


export function get_data(): License {
  return {
    family_name: "DOE",
    given_name: "James",
    address: "123 45 Street NW, Edmonton AB",
    date_of_birth: "2002-03-23",
    license_number: "123456-123",
    sex: "M",
  }
}
