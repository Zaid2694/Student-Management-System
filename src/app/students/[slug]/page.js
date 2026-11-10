import React from 'react'
import Link from 'next/link'
import { deleteStudent } from '@/app/helpers/actions'

export default async function StudentsByIdPage({ params }) {
    const { slug } = await params
    const res = await fetch(`http://localhost:3005/students/${slug}`)

    if (!res.ok) {
        throw new Error('Failed to fetch student')
    }

    const student = await res.json()
    const deleteAction = deleteStudent.bind(null, slug)

    return (
        <>
            <h1>{student.name}</h1>
            <div>
                <h4>Class: {student.studentClass}</h4>
                <h4>GPA: {student.gpa}</h4>
            </div>
            <hr />
            <Link href={`/form/edit/${student.id}`}>
                Edit student
            </Link>
            <form action={deleteAction}>
                <button type="submit">Delete Student</button>
            </form>
        </>
    )
}