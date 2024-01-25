import React from 'react'
import { LastOrders, NavBar, SalesTrend, Summary, TopBar, TopPlateform } from '../Components'

export default function OverviewPage() {
  return (
    <section className='flex flex-row w-full'>
       <div className='bg-white shadow-sm w-max p-0'>
        <NavBar />
       </div>
        <section className='flex flex-col space-y-5 w-full pb-5'>
            <TopBar />
            <section className='flex flex-col space-y-5'>
                <section className='flex flex-row space-x-5 pl-5'>
                    <SalesTrend />
                    <Summary />
                </section>
                <section className='flex flex-row space-x-5 pl-5'>
                    <LastOrders />
                    <TopPlateform />
                </section>
            </section>
        </section>
    </section>
  )
}
