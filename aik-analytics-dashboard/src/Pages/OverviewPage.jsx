import React from 'react'
import { NavBar, SalesTrend } from '../Components'

export default function OverviewPage() {
  return (
    <section className='flex flex-row'>
        <NavBar />
        <section className='flex-flex-row w-full'>
            <section className='flex flex-col'>
                <SalesTrend />
            </section>
            <section className='flex flex-col'>

            </section>
        </section>
    </section>
  )
}
