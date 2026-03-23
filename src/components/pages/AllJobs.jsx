import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../JobCard";

import { setDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=javascript")
      .then((res) => {
        const formattedBooks = (res.data?.docs || []).map((item) => {
          const fallbackId = `${item.title || "untitled"}-${item.first_publish_year || "na"}-${Math.random()
            .toString(36)
            .slice(2, 7)}`;
          const safeId = (item.key || item.cover_edition_key || fallbackId).replaceAll("/", "_");

          return {
            id: safeId,
            title: item.title || "Untitled",
            author: item.author_name?.[0] || "Unknown author",
            year: item.first_publish_year || "N/A",
          };
        });

        setJobs(formattedBooks);
      })
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, []);

  const saveJob = async (job) => {
    await setDoc(doc(db, "favorites", job.id), job);

    alert("Book added to favorites ⭐");
    // track saved jobs
    setSavedJobs([...savedJobs, job.id]);
  };
  

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center mb-4">JavaScript Libraries</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
          <p>Loading Libraries...</p>
        </div>
      ) : jobs.length === 0 ? (
        <p className="text-center">No libraries found.</p>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              buttonText={
                savedJobs.includes(job.id) ? "Saved ✅" : "⭐ Favorite"
              }
              disabled={savedJobs.includes(job.id)}
              onAction={saveJob}
            />
          ))}
        </div>
      )}
    </div>
  );
}
