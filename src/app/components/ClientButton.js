import { useEffect } from 'react';

export default function ClientButton({ id, children }) {
  useEffect(() => {
    const button = document.getElementById(id);
    const fileInput = document.getElementById("file");

    const handleClick = async () => {
      if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        try {
          // Make a request to your backend API to accept the file
          const response = await fetch("/api/accept-file", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            // File accepted successfully
            console.log("File accepted");
          } else {
            // Handle error if the file couldn't be accepted
            console.error("Failed to accept file");
          }
        } catch (error) {
          console.error("An error occurred while accepting the file", error);
        }

        // Clear the file input
        fileInput.value = null;
      }
    };

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, [id]);

  return (
    <button id={id} className='py-7 px-32 text-white'>
      {children}
    </button>
  );
}