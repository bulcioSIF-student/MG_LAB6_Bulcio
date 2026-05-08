import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value,
      id: idRef.current?.value,
      title: titleRef.current?.value,
      author: authorRef.current?.value,
      reason: reasonRef.current?.value,
    };
    console.log("Uncontrolled Form Data:", data);
    alert("Check the console for submitted data.");
    if(nameRef.current) nameRef.current.value = "";
    if(idRef.current) idRef.current.value = "";
    if(titleRef.current) titleRef.current.value = "";
    if(authorRef.current) authorRef.current.value = "";
    if(reasonRef.current) reasonRef.current.value = "";
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px" }}
    >
        <p>Uncontrolled Form</p>
      <input type="text" ref={nameRef} placeholder="Enter Student Name" />
      <input type="text" ref={idRef} placeholder="Enter Student ID" />
      <input type="text" ref={titleRef} placeholder="Enter Book Title" />
      <input type="text" ref={authorRef} placeholder="Enter Author" />
      <textarea ref={reasonRef} placeholder="Reason for Request" rows={5} style={{ resize: "vertical" }} />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
