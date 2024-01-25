import React from 'react'
import { LastOrders, NavBar, SalesTrend, Summary, TopBar, TopPlateform } from '../Components'

export default function OverviewPage() {
  return (
    <section className='flex flex-row w-full'>
        <NavBar />
        <section className='flex flex-col space-y-5 w-full'>
            <TopBar />
            <section className='flex flex-row justify-between'>
                <section className='flex flex-col pl-5'>
                    <SalesTrend />
                    <LastOrders />
                </section>
                <section className='flex flex-col pl-5'>
                    <Summary />
                    <TopPlateform />
                </section>
            </section>
        </section>
    </section>
  )
}
