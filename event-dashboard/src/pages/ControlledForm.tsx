import { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    bookTitle: "",
    author: "",
    reason: "",
  });

  const [studentList, setStudentList] = useState<typeof formData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setStudentList((list) => [...list, formData]);
    
    alert("Submitted Successfully");

    setFormData({
      name: "",
      studentId: "",
      bookTitle: "",
      author: "",
      reason: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px" }}
    >
    <p>Controlled Form</p>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Student Name" />
      <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Enter Student ID" />
      <input type="text" name="bookTitle" value={formData.bookTitle} onChange={handleChange} placeholder="Enter Book Title" />
      <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Enter Author" />
      <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Reason for Request" rows={5}
        style={{ resize: "vertical", width: "100%", boxSizing: "border-box" }}/>
      <button type="submit">Submit</button>

      <h3>List Book Request</h3>
            <table  border={1} cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <tr>
                    <th>Student Name</th>
                    <th>Student ID</th>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Reason for Request</th>
                </tr>
                {studentList.map((stud,index) => (
                    <tr key = {index}>
                        <td>{stud.name}</td>
                        <td>{stud.studentId}</td>
                        <td>{stud.bookTitle}</td>
                        <td>{stud.author}</td>
                        <td>{stud.reason}</td>
                    </tr>
                ))}
            </table>
    </form>
    
  );
}

export default ControlledForm;
