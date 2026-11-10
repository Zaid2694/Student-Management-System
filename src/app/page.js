
import Link from 'next/link';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch('http://localhost:3005/students');
  const students = await res.json();
  console.log(students);
  const showStudents = students.map(student => {
    return (
      <div key={student.id} className="col">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{student.name}</h3>
            <p className="card-text">{student.studentClass}</p>
            <p className="card-text">{student.gpa}</p>

            <Link className="btn btn-primary" href={`/students/${student.id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    );


  })
  return (

    <>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {showStudents}
      </div>
    </>

  );
}