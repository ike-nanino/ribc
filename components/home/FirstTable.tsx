import React from 'react'

function FirstTable() {
    return (
        <section>

            <h1 className='px-8 text-2xl lg:text-4xl font-semibold text-blue-900 mb-6'>
                Bank Holiday
            </h1>

            <div className="overflow-x-auto mb-10 px-2 md:px-8 lg:px-20">
                <table className="w-full table-auto shadow-sm border border-gray-200">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th colSpan={4} className="px-4 py-3 text-left text-sm font-semibold">
                                TORONTO / HEAD OFFICE / BACK OFFICE / CALGARY
                            </th>
                        </tr>
                        <tr className="bg-gray-50 text-gray-700">
                            <th className="px-4 py-3 text-left text-sm font-medium">DATE</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">DAY</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">HOLIDAY</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Celebrated in Federal / Provincial / Territorial</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">January 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Wednesday</td>
                            <td className="px-4 py-3 text-sm">New Year's Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">February 17, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Family Day</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">April 18, 2025</td>
                            <td className="px-4 py-3 text-sm">Friday</td>
                            <td className="px-4 py-3 text-sm">Good Friday</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">May 19, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Victoria Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">July 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">Canada Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">August 4, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Civic Holiday</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">September 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Labour Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">September 30, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">National Day of Truth & Reconciliation</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">October 13, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Thanksgiving Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">November 11, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">Remembrance Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">December 25, 2025</td>
                            <td className="px-4 py-3 text-sm">Thursday</td>
                            <td className="px-4 py-3 text-sm">Christmas Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">December 26, 2025	</td>
                            <td className="px-4 py-3 text-sm">Friday</td>
                            <td className="px-4 py-3 text-sm">Boxing Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto mb-10 px-2 md:px-8 lg:px-20">
                <table className="w-full table-auto shadow-sm border border-gray-200">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th colSpan={4} className="px-4 py-3 text-left text-sm font-semibold">
                            BRAMPTON / MISSISSAUGA / SCARBOROUGH
                            </th>
                        </tr>
                        <tr className="bg-gray-50 text-gray-700">
                            <th className="px-4 py-3 text-left text-sm font-medium">DATE</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">DAY</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">HOLIDAY</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Celebrated in Federal / Provincial / Territorial</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">January 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Wednesday</td>
                            <td className="px-4 py-3 text-sm">New Year's Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">February 15, 2025	</td>
                            <td className="px-4 py-3 text-sm">Saturday</td>
                            <td className="px-4 py-3 text-sm">On Account of Family Day	</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">February 17, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Family Day</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">April 18, 2025</td>
                            <td className="px-4 py-3 text-sm">Friday</td>
                            <td className="px-4 py-3 text-sm">Good Friday</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">May 17, 2025</td>
                            <td className="px-4 py-3 text-sm">Saturday</td>
                            <td className="px-4 py-3 text-sm">Victoria Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">July 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">Canada Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">August 2, 2025</td>
                            <td className="px-4 py-3 text-sm">Saturday</td>
                            <td className="px-4 py-3 text-sm">On Account of Civic Holiday</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">August 4, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Civic Holiday</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">August 30, 2025</td>
                            <td className="px-4 py-3 text-sm">Saturday</td>
                            <td className="px-4 py-3 text-sm">On Account of Labour Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">September 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Labour Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">September 30, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">National Day of Truth & Reconciliation</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">October 11, 2025</td>
                            <td className="px-4 py-3 text-sm">Saturday</td>
                            <td className="px-4 py-3 text-sm">On Account of Thanksgiving Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">October 13, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Thanksgiving Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">November 11, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">Remembrance Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">December 25, 2025</td>
                            <td className="px-4 py-3 text-sm">Thursday</td>
                            <td className="px-4 py-3 text-sm">Christmas Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">December 26, 2025	</td>
                            <td className="px-4 py-3 text-sm">Friday</td>
                            <td className="px-4 py-3 text-sm">Boxing Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                    </tbody>
                </table>
            </div>





            <div className="overflow-x-auto mb-10  px-2 md:px-8 lg:px-20">
                <table className="w-full table-auto shadow-sm border border-gray-200">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th colSpan={4} className="px-4 py-3 text-left text-sm font-semibold">
                            VANCOUVER / SURREY
                            </th>
                        </tr>
                        <tr className="bg-gray-50 text-gray-700">
                            <th className="px-4 py-3 text-left text-sm font-medium">DATE</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">DAY</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">HOLIDAY</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Celebrated in Federal / Provincial / Territorial</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">January 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Wednesday</td>
                            <td className="px-4 py-3 text-sm">New Year's Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">February 17, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Family Day</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">April 18, 2025</td>
                            <td className="px-4 py-3 text-sm">Friday</td>
                            <td className="px-4 py-3 text-sm">Good Friday</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">May 19, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Victoria Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">July 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">Canada Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">August 4, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Civic Holiday</td>
                            <td className="px-4 py-3 text-sm">Provincial – Alberta, Ontario, British Columbia</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">September 1, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Labour Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">September 30, 2025</td>
                            <td className="px-4 py-3 text-sm">Tuesday</td>
                            <td className="px-4 py-3 text-sm">National Day of Truth & Reconciliation</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">October 13, 2025</td>
                            <td className="px-4 py-3 text-sm">Monday</td>
                            <td className="px-4 py-3 text-sm">Thanksgiving Day</td>
                            <td className="px-4 py-3 text-sm">Federal – National</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </section>
    )
}

export default FirstTable
