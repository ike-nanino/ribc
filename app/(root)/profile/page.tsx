import HeaderBox from '@/components/HeaderBox'
import StatisticsDashboard from '@/components/StatisticsDashboard'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import TransactionSidebar from '@/components/TransactionSidebar'
import React from 'react'

function Profile() {
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type='greeting'
                    title='Welcome'
                    user='Justice Plange'
                    subtext='7894 Canterbury St. Rogersville, NB E4Y 9J7'
                />

                <TotalBalanceBox
                    totalBanks={2}
                    totalCurrentBalance={8968000}
                    accounts={[]}
                />
            </header>

            <StatisticsDashboard />

        </div>

        <TransactionSidebar />
      
    </section>
  )
}

export default Profile
