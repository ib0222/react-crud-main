import { useState } from "react"
import { ICustomer } from "../../type"
import Swal from "sweetalert2"

const AddCustomerPage = () => {
  const [companyName, setCompanyName] = useState("")
  const [contactTitle, setContactTitle] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  const [error, setError] = useState("")

  function postCustomer(customer: ICustomer) {
    fetch("https://northwind.vercel.app/api/customers", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Customer added successfully!",
          icon: "success",
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="max-w-3xl w-full mx-auto bg-white p-3 rounded-md">
      <h2 className="mb-6 mt-4 text-center text-2xl font-semibold">
        Add Customer
      </h2>
      <form className="w-full space-y-4">
        <div className="flex items-center gap-x-3">
          <label
            htmlFor="companyName"
            className="font-semibold cursor-pointer w-36"
          >
            <span className="text-red-600 mr-2">*</span>Company Name
          </label>
          <input
            id="companyName"
            type="text"
            className=" p-2 rounded-md border grow"
            placeholder="Enter company name"
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <label
            htmlFor="companyName"
            className="font-semibold cursor-pointer w-36"
          >
            <span className="text-red-600 mr-2">*</span>Contact Title
          </label>
          <input
            id="companyName"
            type="text"
            className=" p-2 rounded-md border grow"
            placeholder="Enter contact title"
            onChange={(e) => {
              setContactTitle(e.target.value)
            }}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <label
            htmlFor="companyName"
            className="font-semibold cursor-pointer w-36"
          >
            <span className="text-red-600 mr-2">*</span>City
          </label>
          <input
            id="companyName"
            type="text"
            className=" p-2 rounded-md border grow"
            placeholder="Enter city name"
            onChange={(e) => {
              setCity(e.target.value)
            }}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <label
            htmlFor="companyName"
            className="font-semibold cursor-pointer w-36"
          >
            <span className="text-red-600 mr-2">*</span>Country
          </label>
          <input
            id="companyName"
            type="text"
            className=" p-2 rounded-md border grow"
            placeholder="Enter country name"
            onChange={(e) => {
              setCountry(e.target.value)
            }}
          />
        </div>
        <div className="w-full text-center ">
          <button
            className="border-2 px-4 py-2 rounded-xl hover:bg-slate-300 ease-out duration-200"
            onClick={(e) => {
              e.preventDefault()

              if (
                companyName === "" ||
                contactTitle === "" ||
                city === "" ||
                country === ""
              ) {
                setError("All fields are required")
                setTimeout(() => {
                  setError("")
                }, 3000)
                return
              }

              const newCustomer: ICustomer = {
                companyName,
                contactTitle,
                address: {
                  city,
                  country,
                },
              }

              postCustomer(newCustomer)
            }}
          >
            Submit
          </button>
        </div>
        {error && (
          <div className="p-2 rounded-md bg-red-200 text-red-600">{error}</div>
        )}
      </form>
    </div>
  )
}

export default AddCustomerPage
