import { useState, useEffect } from "react";
import { InteractiveFolder } from "../components/InteractiveFolder";
import { Menu } from "../App.js";

import img2 from '../components/oyu.png';
import img1 from '../components/googledocsicon.png';
import img3 from '../components/book1.png';


const redBlue = { color: "#FFE430", textColor: "#B59F09" };
const purpleGreen = { color: "#D9D9D9", textColor: "#898989" };
const pinkYellow = { color: "#72CFFB", textColor: "#5899B8" };

const weekColors = [
    redBlue, purpleGreen, purpleGreen, pinkYellow,
    redBlue, purpleGreen, purpleGreen, pinkYellow,
    redBlue, purpleGreen
];

// Папки (week номера) → страницы
const folderPageMap = {
    0: 'assignment03',
    1: 'assignment05',
    2: 'assignment07',
    3: 'assignment09',
    4: 'assignment10',
    5: 'resources' // "Resources" папка
};

const folderImages = [
    [img1],
    [img1, img2],
    [img1],
    [img1],
    [img1],
    [img3]
];

const sourcesList = [
    { id: 1, url: "https://celinefloral.kz/about/", title: "Celine Floral About" },
    { id: 2, url: "https://www.flowerbx.com", title: "FlowerBX" },
    { id: 3, url: "https://www.londonbusinessnews.com/?s=Flowerbx", title: "London Business News" },
    { id: 4, url: "https://www.mysubscriptionaddiction.com/b/flowerbx", title: "My Subscription Addiction" },
    { id: 5, url: "https://www.instagram.com/celine.floral_astana/", title: "Celine Floral Instagram" },
    { id: 6, url: "https://youtu.be/9w6YkGc2nDc", title: "Video 1" },
    { id: 7, url: "https://youtu.be/FHB0vqq_gH4", title: "Video 2" },
    { id: 8, url: "https://youtu.be/tr4ncgybD2U", title: "Video 3" },
    { id: 9, url: "https://youtu.be/zna2GwtyDiQ", title: "Video 4" },
    { id: 10, url: "https://youtu.be/CmbS4-OY3yY", title: "Video 5" },
    { id: 11, url: "https://www.instagram.com/theflowerbx/", title: "FlowerBX Instagram" },
    { id: 12, url: "https://www.instagram.com/celine.floral/", title: "Celine Floral Main" },
    { id: 13, url: "https://www.flowrrbx.com/sustainability", title: "FlowerBX Sustainability" },
    { id: 14, url: "https://documents.worldbank.org", title: "World Bank Documents" },
    { id: 15, url: "https://www.mckinsey.com/industries/retail/our-insights", title: "McKinsey Retail" },
    { id: 16, url: "https://hbr.org/2023/06/the-future-of-e-commerce-in-floristry", title: "HBR E-commerce Floristry" },
    { id: 17, url: "https://openstax.org/books/introduction-business/pages/11-introduction", title: "OpenStax Business Ch11" },
    { id: 18, url: "https://openstax.org/books/introduction-business/pages/12-introduction", title: "OpenStax Business Ch12" },
    { id: 19, url: "https://youtu.be/FHB0vqq_gH4", title: "Video 6" },
    { id: 20, url: "https://youtu.be/zna2GwtyDiQ", title: "Video 7" },
    { id: 21, url: "https://youtu.be/CmbS4-OY3yY", title: "Video 8" },
    { id: 22, url: "https://openstax.org/books/introduction-business/pages/14-introduction", title: "OpenStax Business Ch14" },
    { id: 23, url: "https://openstax.org/books/introduction-business/pages/15-introduction", title: "OpenStax Business Ch15" },
    { id: 24, url: "https://openstax.org/books/introduction-business/pages/16-introduction", title: "OpenStax Business Ch16" },
    { id: 25, url: "https://openstax.org/books/introduction-business/pages/17-introduction", title: "OpenStax Business Ch17" },
    { id: 26, url: "https://openstax.org/books/introduction-business", title: "OpenStax Business Main" }
];

function About({ setCurrentPage }) {
    return (
        <section id="about" className="aboutnn">
            <div className="about-content">
                <h1>ASSIGNMENTS</h1>
                <div className="filters">
                    <button className="filter-btn" onClick={() => setCurrentPage('weekly')}>For Business Administration course</button>
                    <button className="filter-btn" onClick={() => setCurrentPage('assignments')}>Mukanova Alfiya</button>
                    <button className="filter-btn" onClick={() => setCurrentPage('independent-study')}>AIB-2503</button>
                </div>
            </div>
        </section>
    );
}

export default function AssignmentsPage({ setCurrentPage }) {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const weekRows = [
        [{ number: "03", width: "50%" }, { number: "05", width: "50%" }],
        [{ number: "07", width: "35%" }, { number: "09", width: "65%" }],
        [{ number: "10", width: "50%" }, { number: "Resources", width: "50%" }],
    ];

    const folderHeight = "190px";
    const overlap = 80;
    let flatIndex = 0;

    return (
        <>
            <Menu
                setCurrentPage={setCurrentPage}
                buttonColors={{ home: "#7D7D7D", weekly: "#7D7D7D", assignments: "#000000", "independent-study": "#7D7D7D" }}
                hoverColors={{ home: "#000000", weekly: "#000000", assignments: "#000000", "independent-study": "#000000" }}
            />
            <About setCurrentPage={setCurrentPage} />

            <main
                id="weekly-activities"
                style={{
                    minHeight: "100vh",
                    background: "#fff",
                    padding: "40px",
                    boxSizing: "border-box",
                    width: "100vw",
                    position: "relative",
                    overflow: "visible"
                }}
            >
                <div style={{ width: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                    {weekRows.map((row, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                width: "100%",
                                marginTop: idx === 0 ? 0 : `-${overlap}px`,
                                position: "relative",
                                zIndex: idx + 1
                            }}
                        >
                            {row.map((week, jdx) => {
                                const currentIdx = flatIndex++;
                                const imagesForThisFolder = folderImages[currentIdx] || [];
                                const colorScheme = weekColors[currentIdx];
                                const errorColor = "#F5F5F5";
                                const targetPage = folderPageMap[currentIdx];

                                let FolderComponent = (
                                    <InteractiveFolder
                                        color={
                                            hoveredIdx === null
                                                ? colorScheme.color
                                                : hoveredIdx === currentIdx
                                                    ? colorScheme.color
                                                    : errorColor
                                        }
                                        number={week.number}
                                        label={week.number === "Resources" ? "" : "WEEK"}
                                        textColor={
                                            hoveredIdx === null
                                                ? colorScheme.textColor
                                                : hoveredIdx === currentIdx
                                                    ? colorScheme.textColor
                                                    : "#D9D9D9"
                                        }
                                        isHovered={hoveredIdx === currentIdx}
                                        onHoverIn={() => setHoveredIdx(currentIdx)}
                                        onHoverOut={() => setHoveredIdx(null)}
                                        images={imagesForThisFolder}
                                    />
                                );

                                FolderComponent = (
                                    <span
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => {
                                            if (targetPage) {
                                                setCurrentPage(targetPage);
                                            }
                                        }}
                                    >
                                        {FolderComponent}
                                    </span>
                                );

                                return (
                                    <div
                                        key={jdx}
                                        style={{
                                            flex: `0 0 ${week.width}`,
                                            maxWidth: week.width,
                                            minWidth: 0,
                                            height: folderHeight,
                                            position: "relative",
                                            zIndex: jdx === 1 ? 2 : 1,
                                            marginLeft: jdx === 1 ? "-18px" : 0
                                        }}
                                    >
                                        {FolderComponent}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* SOURCES SECTION */}
                <section style={{
                    marginTop: "80px",
                    paddingTop: "60px",
                    marginBottom: "80px",
                    borderTop: "1px solid #e0e0e0"
                }}>
                    <h2 style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        marginBottom: "40px",
                        color: "#010103"
                    }}>
                        Sources
                    </h2>

                    <div style={{
                        fontSize: "16px",
                        lineHeight: "2",
                        color: "#666",
                        maxWidth: "900px"
                    }}>
                        <p style={{ fontWeight: 600, marginBottom: "20px", color: "#333" }}>
                            Business Administration course
                        </p>

                        {sourcesList.map((source) => (
                            <div key={source.id} style={{ marginBottom: "8px" }}>
                                <span style={{ marginRight: "12px", fontWeight: 600, color: "#000" }}>
                                    [{source.id}]
                                </span>
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#4154bb",
                                        textDecoration: "none",
                                        wordBreak: "break-word"
                                    }}
                                    onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                                    onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                                >
                                    {source.url}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

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
            </main>
        </>
    );
}
