
"use client"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { editStudent } from "../helpers/actions"
import { useState } from "react"


export default function EditForm({ student }) {
    const [error, setError] = useState(null)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: student.id,
            name: student.name,
            studentClass: student.studentClass,
            gpa: student.gpa
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Sorry, name is required"),
            studentClass: Yup.string().required("Sorry, class is required"),
            gpa: Yup.string().required("Sorry, gpa is required"),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setError(null)
            const result = await editStudent(values)
            if (result?.error) {
                setError(result.error)
            }
            setSubmitting(false)
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control" // Sahi class
                        id="name"
                        name="name"
                        placeholder="Enter the Name"
                        suppressHydrationWarning   // ⬅️ add karein

                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ? (
                        <div className="alert alert-warning">
                            {formik.errors.name}
                        </div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="studentClass" className="form-label">Class</label>
                    <input
                        type="text"
                        className="form-control"
                        id="studentClass"
                        name="studentClass"
                        placeholder="Enter the student Class"
                        suppressHydrationWarning   // ⬅️ add karein

                        {...formik.getFieldProps('studentClass')}
                    />
                    {formik.errors.studentClass && formik.touched.studentClass ? (
                        <div className="alert alert-warning">
                            {formik.errors.studentClass}
                        </div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="gpa" className="form-label">GPA</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gpa"
                        name="gpa"
                        placeholder="Enter the gpa"
                        suppressHydrationWarning   // ⬅️ add karein

                        {...formik.getFieldProps('gpa')}

                    />
                    {formik.errors.gpa && formik.touched.gpa ? (
                        <div className="alert alert-warning">
                            {formik.errors.gpa}
                        </div>
                    ) : null}
                </div>
                <button className="btn btn-primary" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Saving..." : "Edit Student"}
                </button>

                {error ? (
                    <div className="alert alert-danger">{error}</div>
                ) : null}
            </form>
        </>
    )
}
