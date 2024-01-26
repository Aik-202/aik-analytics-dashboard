import React from 'react'
import { LastOrders, NavBar, SalesTrend, Summary, TopBar, TopPlateform } from '../Components'

export default function OverviewPage() {
    React.useEffect(() => {
        const reveal = document.querySelectorAll('.reveal')
    
      //Reavel Elements  function
      window.addEventListener('scroll', () => {reveal.forEach((element) => {
        const height = window.innerHeight
        const revealTop = element.getBoundingClientRect().top;
        const revealPosition = 180;
    
        if (revealTop < height - revealPosition){
            element.classList.add('visible');
        } else {
            element.classList.remove('visible')
        }
      })} )
    
      }, [])

  return (
    <section className='flex flex-row w-full dark:bg-[#1f2937]'>
        <NavBar />
        <section className='flex flex-col space-y-5 w-full pb-5 bg-[#FAFAFA] dark:bg-[#1f2937]'>
            <TopBar />
            <section className='flex flex-col space-y-5'>
                <section className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row 
                lg:space-x-5 px-5'>
                    <SalesTrend />
                    <Summary />
                </section>
                <section className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row 
                lg:space-x-5 px-5'>
                    <LastOrders />
                    <TopPlateform />
                </section>
            </section>
        </section>
    </section>
  )
}
