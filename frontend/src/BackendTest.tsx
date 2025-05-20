import { useEffect, useState } from "react";
import { API_BASE_URL } from "./config";

interface ApiResponse {
  message: string;
  data: {
    status: string;
    // Add other expected properties here
  };
}

export default function CorsTester() {
  const [responseData, setResponseData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const testCors = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:8000/api/test`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      setResponseData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    testCors();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#2c3e50" }}>CORS Test Component</h1>

      <button
        onClick={testCors}
        style={{
          padding: "10px 15px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Retry Test
      </button>

      {isLoading && <div style={{ color: "#7f8c8d" }}>Loading...</div>}

      {error && (
        <div
          style={{
            color: "#e74c3c",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#fdeded",
          }}
        >
          Error: {error}
        </div>
      )}

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#27ae60" }}>Response Received:</h2>
          <pre
            style={{
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
              overflowX: "auto",
            }}
          >
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
