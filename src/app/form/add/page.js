"use client"
import { addStudent } from '@/app/helpers/actions'; //->this hook has tree state, action ,padding
import { useActionState } from 'react';

export default function Addpage() {
    const [state, action, isPending] = useActionState(addStudent, null)


    return (
        <>
            <h1>Add Student</h1>
            <div>
                {/* 5. Pass onSubmit to action */}
                <form action={action}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control" // Sahi class
                            id="name"
                            name="name"
                            placeholder="Enter the Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="studentClass" className="form-label">Class</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentClass"
                            name="studentClass"
                            placeholder="Enter the student Class"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gpa" className="form-label">GPA</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gpa"
                            name="gpa"
                            placeholder="Enter the gpa"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isPending}>
                        {isPending ? "Saving.." : "Add Student"}</button>
                </form>
            </div>
            {state?.success ? <div className='text-success'>
                {state?.message}

            </div> : <div className='text-danger'>
                {state?.message}

            </div>}
        </>
    )
}