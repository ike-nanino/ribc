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
                    user='William A. Thompson'
                    subtext='5501 W. Washington St. Apt #134 Groves TX 77619'
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
