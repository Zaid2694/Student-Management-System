import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='d-flex flex-column flex-md-row align-items-center pb-4 mb-5 border-bottom '>
            <span>Student List</span>
            <nav className='ms-auto'>
                <Link href={'/'} className='text-black text-decoration-none me-3 py-2'>Home</Link>
                <Link href={'/form/add'} className='text-black text-decoration-none me-3 py-2'>Add Student</Link>

            </nav>
        </div>
    )
}
