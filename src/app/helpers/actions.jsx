"use server"

import { redirect } from "next/navigation";

const API = "http://localhost:3005";


export async function addStudent(prevState, formdata) {
    try {
        const name = formdata.get('name');
        const studentClass = formdata.get('studentClass');
        const gpa = formdata.get('gpa');

        if (!name || name.trim() === '') {
            return { success: false, message: "The name is required" };
        }

        const res = await fetch(`${API}/students`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, studentClass, gpa })
        });

        if (!res.ok) {
            return { success: false, message: `${res.status} ${res.statusText}` };
        }

        return { success: true, message: "Added" };
    } catch (e) {
        return { success: false, message: e.message || "Something went wrong" };
    }
}

// EDIT STUDENT
// EDIT STUDENT
export async function editStudent(values) {
    try {
        const { id, name, studentClass, gpa } = values;

        if (!id) {
            return { error: "Student id is missing" };
        }

        if (Number(gpa) < 2) {
            return { error: "You are not successful" };
        }

        const res = await fetch(`${API}/students/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, studentClass, gpa })
        });

        if (!res.ok) {
            return { error: `${res.status} ${res.statusText}` };
        }

        return { success: true };
    } catch (error) {
        return { error: error.message || "Something went wrong" };
    }
}
// DELETE STUDENT
export async function deleteStudent(ID) {
    await fetch(`http://localhost:3005/students/${ID}`, {
        method: "Delete"
    });
    redirect('/')
}