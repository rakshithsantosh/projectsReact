import "./App.css";

function App() {
  return (
    <div className="blog-card">
      <img
        src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="bg-image"
      />
      <div className="content">
        <p className="genre">Interior</p>
        <p className="title">Top 5 Living Room Inspirations</p>
        <p>
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </p>
        <p className="more">Read more →</p>
      </div>
    </div>
  );
}

export default App;
