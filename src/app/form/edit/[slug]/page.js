import React from 'react'
import EditForm from '@/app/components/EditForm';

async function getStudent(ID) {
    const res = await fetch(`http://localhost:3005/students/${ID}`)
    return await res.json();
}
export default async function EditPage({ params }) {
    const { slug } = await params;
    const student = await getStudent(slug)
    return (

        <EditForm student={student} />
    )
}
