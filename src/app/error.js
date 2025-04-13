'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        <div className="text-danger mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
          </svg>
        </div>
        <h4 className="text-danger mb-3">Something went wrong!</h4>
        <p className="text-muted mb-4">
          {error.message || "An unexpected error occurred"}
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <button 
            onClick={() => reset()} 
            className="btn btn-primary"
          >
            Try again
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            className="btn btn-outline-secondary"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
}
