import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Topbar from '@/components/Topbar/Topbar'
import ProblemsTable from '@/components/ProblemsTable/problemsTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-gradient-to-b from-red-200 to-blue-200">
        <Topbar />
          <h1
            className='text-2xl text-center text-gray-800 dark:text-gray-700 font-mono
          mt-10 mb-5'
          >
            Let the Coding Begin!
          </h1>
          <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
            <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b  border-gray-800 '>
                  <tr>
                    <th scope='col' className='px-1 py-3 w-0 font-mono'>
                      Status
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-mono'>
                      Title
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-mono'>
                      Difficulty
                    </th>

                    <th scope='col' className='px-6 py-3 w-0 font-mono'>
                      Category
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-mono'>
                      Java Solution
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-mono'>
                      Python Solution
                    </th>
                  </tr>
                </thead>
                <ProblemsTable />
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
