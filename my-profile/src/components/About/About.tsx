import aboutPng from "@/assets/imgs/about.png"


export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={aboutPng} alt="about" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Hi, I'm Here To Help Your Next Project!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti aut at, cupiditate, fugit
                    similique illum vitae eaque voluptates consequatur ipsam doloribus eum dolor. Enim autem tempora odio
                    incidunt! Ipsam hic molestias ad voluptas doloribus ratione animi alias dicta quo.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </section>
    )
}