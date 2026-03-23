import { useEffect, useState } from "react";
import JobCard from "../JobCard";

import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function FavoriteJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true); 
  useEffect(() => {
    const fetchFavorites = async () => {
      const snapshot = await getDocs(collection(db, "favorites"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setJobs(data);
      setloading(false);
    };

    fetchFavorites();
  }, []); 

  const removeJob = async (job) => {
     await deleteDoc(doc(db, "favorites", job.id));

    alert("Library removed from favorites ❌");

    setJobs(jobs.filter((j) => j.id !== job.id));
  };
 

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center mb-4">Favorite Libraries</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
          <p>Loading Libraries...</p>
        </div>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              buttonText={
                "Remove Library"
              }
              onAction={removeJob}
            />
          ))}
        </div>
      )}
    </div>
  );
}
