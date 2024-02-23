import { useEffect } from "react"


export default function Services() {
    const skills = [{ title: "Vue", percent: 90 }, { title: "TypeScript", percent: 90 }, { title: "Vite", percent: 90 },
    { title: "Astro", percent: 70 }, { title: "Nuxt", percent: 70 }, { title: "Vitest", percent: 80 },
    { title: "Jest", percent: 80 }, { title: "Express", percent: 80 }, { title: "Webpack", percent: 70 },
    { title: "HTML", percent: 90 }, { title: "CSS", percent: 90 }, { title: "JavaScript", percent: 90 }, { title: "Sass", percent: 90 }]

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            document.onscroll = () => {
                if (entries[0].intersectionRatio > 0) {
                    document.querySelector(".content")?.classList.add("show")
                }
            }
        })
        const targetElem = document.querySelector(".content")
        if (targetElem) observer.observe(targetElem)
    }, [])
    return (
        <section className="services" id="services">
            <h2 className="heading"><span>我的技能</span></h2>

            <div className="content">
                {
                    skills.map((skill, index) => {
                        return (
                            <div className='item' key={index}>
                                <div className="title"><h3>{skill.title}</h3></div>
                                <div className="outer">
                                    <div className="inner" style={{ width: `${skill.percent}%` }}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}