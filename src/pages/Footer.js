import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          backgroundColor: "var(--black)",
          color: "var(--white)",
          textAlign: "center",
          fontWeight: 400,
          marginTop: "3rem",
        }}
      >
        CopyRight @2022 ❤ By
        <span style={{ color: "var(--blue)" }}> Vignan School.</span>
      </p>
    </div>
  );
}

export default Footer;
