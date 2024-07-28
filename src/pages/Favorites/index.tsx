import { useEffect, useState } from "react"
import { ICustomer } from "../../type"

const FavoritesPage = () => {
  const [customerData, setCustomerData] = useState<ICustomer[]>([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")!)

    setCustomerData(data)
  }, [])

  return (
    <div className="w-full p-6">
      {customerData && customerData.length > 0 ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Title
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={customer.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {customer.id}
                </th>
                <td className="px-6 py-4">{customer.companyName}</td>
                <td className="px-6 py-4">{customer.contactTitle}</td>
                <td className="px-6 py-4">
                  {customer?.address?.city}, {customer?.address?.country}
                </td>

                <td
                  className="px-6 py-4 text-3xl text-center cursor-pointer"
                  onClick={() => {}}
                >
                  ❤️
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-2xl text-neutral-700">
          No favorite customers
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
