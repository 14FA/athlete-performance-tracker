function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          color: "#1E3A8A",
          marginBottom: "20px",
        }}
      >
        Athlete Performance Tracker
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Welcome to the Athlete Performance Tracker! This application helps
        athletes record workouts, monitor training progress, and evaluate
        performance over time. Track your workout sessions, review your
        statistics, and stay motivated as you work toward your fitness goals.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🏋️ Log Workouts</h3>
          <p>Add training sessions with workout details and duration.</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>📊 Track Progress</h3>
          <p>View workout history and monitor your overall performance.</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🎯 Reach Goals</h3>
          <p>Stay consistent and improve your performance over time.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;