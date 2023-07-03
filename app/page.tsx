import { CustomeFilter, Hero, SearchBar } from '@/components'
import { fetchAllCars } from '@/utillities'
import Image from 'next/image'

export default async function Home() {

  const allCars = await fetchAllCars()

  // check if the data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1
  || !allCars;

  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className="mt-12 padding-x padding-y max-width" id='discover' >
      <div className="home__text-container">
        <h1 className='text-4xl font-extra-bold'
        >
          Car Catalogue
        </h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar/>
        <div className='home__filter-container'>
          <CustomeFilter title="fuel"/>
          <CustomeFilter title="year"/>
        </div>
      </div>
      {/* Loop throuhh all the cars */}
      {!isDataEmpty ? (
        <section>
         We have the cars
        </section>
      ): (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>
            Ooops ,no results
          </h2>
          <p>{allCars?.message}</p>
        </div>
      )}

     </div>
    </main>
  )
}
