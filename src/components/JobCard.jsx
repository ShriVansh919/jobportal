function JobCard({ job, buttonText, onAction, disabled }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{job.title}</h5>

          <p className="card-text">
            <strong>Author:</strong> {job.author} <br />
            <strong>First Published:</strong> {job.year}
          </p>

          <button
            className="btn btn-primary mt-auto"
            disabled={disabled}
            onClick={() => onAction(job)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
