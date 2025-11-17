import { useState, useEffect } from "react";
import photo1 from '../components/w6.jpg';
import { Menu } from "../App.js";

export default function Assignment10({ setCurrentPage }) {
    const leftImages = [null];
    const rightImages = [photo1];

    // 3 ссылки на Google документы и файлы
    const documents = [
        {
            url: "https://drive.google.com/file/d/1AI-jv_y7YXaTpIQhBRmLm9NkSUshbub6/preview",
        },
        {
            url: "https://www.youtube.com/watch?v=1fvhCbiIMYQ/preview",
        }
    ];

    return (
        <div style={{ padding: "40px", background: "#fff", minHeight: "100vh" }}>
            <Menu
                setCurrentPage={setCurrentPage}
                buttonColors={{ home: "#7D7D7D", weekly: "#7D7D7D", assignments: "#000000", "independent-study": "#7D7D7D" }}
                hoverColors={{ home: "#000000", weekly: "#000000", assignments: "#000000", "independent-study": "#000000" }}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "270px",
                    width: "100%",
                    margin: "60px 0 60px 0"
                }}
            >
                {/* Левая колонка: текст */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <h1 style={{ fontSize: "64px", fontWeight: 700, marginBottom: "30px" }}>
                        ASSIGNMENTS \ WEEK 10
                    </h1>
                    <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#444", maxWidth: "380px" }}>
                    </p>
                </div>

                {/* Центральная колонка */}


                {/* Правая колонка */}

            </div>

            {/* Google Drive Documents - 3 iframes */}
            <div style={{
                width: "100%",
                margin: "60px 0"
            }}>
                {documents.map((doc, idx) => (
                    <div
                        key={idx}
                        style={{
                            marginBottom: "40px",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <div style={{ width: "100%", maxWidth: "1000px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px", color: "#333" }}>
                                {doc.title}
                            </h3>
                            <iframe
                                src={doc.url}
                                style={{
                                    width: "100%",
                                    height: "600px",
                                    border: "none",
                                    borderRadius: "18px",
                                    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.07)"
                                }}
                                allow="autoplay"
                                title={doc.title}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footernn">
                <div className="footer-container">
                    <h1 className="footer-logo">ALFIYA MUKANOVA</h1>
                    <nav className="footer-nav">
                        <a href="#hero" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo(0, 0);
                            setCurrentPage('home');
                        }} className="footer-nav-link">HOME</a>
                        <a href="#weekly" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo(0, 0);
                            setCurrentPage('weekly');
                        }} className="footer-nav-link">WEEKLY ACTIVITIES</a>
                        <a href="#assignments" onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage('assignments');
                        }} className="footer-nav-link">ASSIGNMENTS</a>
                        <a href="#independent" onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage('independent-study');
                        }} className="footer-nav-link">INDEPENDENT STUDY</a>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <a href="mailto:corporate@example.com" className="filter-btn">Corporate Mail</a>
                    <a href="mailto:direct@example.com" className="filter-btn">Direct Mail</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="filter-btn">Instagram</a>
                </div>
            </footer>
        </div>
    );
}

