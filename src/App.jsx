
import { useFetchAllProductsQuery } from './App/featchers/product/productApi'
import Banner from './Components/Banner'

function App() {
  const {isLoading,isError,data} = useFetchAllProductsQuery()
  console.log(data?.data?.data)
  return (
    <div>
      <Banner/>
    </div>
  )
}

export default App
