import { useEffect, useState } from "react"
import { ICustomer } from "../../type"
import Loader from "../../components/Loader"
const CustomersListPage = () => {
  const [customerData, setCustomerData] = useState<ICustomer[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("https://northwind.vercel.app/api/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data)
      })
      .finally(() => setIsLoading(false))
  }, [])

  function deleteCustomer(deleteId: string | undefined) {
    fetch(`https://northwind.vercel.app/api/customers/${deleteId}`, {
      method: "DELETE",
    }).then(() => {
      const filteredCustomers = customerData.filter(
        (customer) => customer.id !== deleteId
      )
      setCustomerData(filteredCustomers)
    })
  }

  function addToFavorites(customerData: ICustomer) {
    let favorites = JSON.parse(localStorage.getItem("favorites")!)

    if (!favorites) {
      favorites = []
    }

    const foundedItem = favorites.find(
      (item: ICustomer) => item.id === customerData.id
    )

    if (foundedItem) {
      favorites.filter((item: ICustomer) => item.id !== foundedItem.id)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      setIsFavorite(false)
    }

    favorites.push(customerData)
    localStorage.setItem("favorites", JSON.stringify(favorites))
    setIsFavorite(true)
  }

  return (
    <div className="w-full p-6">
      {isLoading ? (
        <div className="w-full text-center flex justify-center items-center">
          <Loader />
        </div>
      ) : (
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
                DELETE
              </th>
              <th scope="col" className="px-6 py-3">
                Add To Favourite
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
                <td className="px-6 py-4 text-center">
                  <button
                    className="bg-red-600 text-white p-2 rounded-xl hover:bg-red-800 ease-in duration-300"
                    onClick={() => {
                      deleteCustomer(customer.id)
                      console.log(customer.id)
                    }}
                  >
                    DELETE
                  </button>
                </td>
                <td
                  className="px-6 py-4 text-3xl text-center cursor-pointer"
                  onClick={() => addToFavorites(customer)}
                >
                  {isFavorite ? "❤️" : "♡"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
export default CustomersListPage
