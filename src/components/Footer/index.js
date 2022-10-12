import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          {/* Logo */}
          <div className="logo">
            Rapid<span>Click</span>
          </div>
          {/* Created By */}
          <div className="created-by">
            Created By:{" "}
            <a href="https://github.com/MuawiyahDev/" target="_blank">
              Muhammad Muawiyah
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
