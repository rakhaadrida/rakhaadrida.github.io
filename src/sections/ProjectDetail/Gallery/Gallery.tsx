import "./Gallery.css";

interface Gallery {
    url: string;
    caption: string;
}

interface GalleryProps {
    galleries: Gallery[];
}

const Gallery = ({ galleries }: GalleryProps) => {
    return (
        <section className="gallery-section">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">03 / Interface</p>
                    <h2>Inside the product</h2>
                </div>
                <p id="gallery-note">Selected screens and project artifacts.</p>
            </div>
            <div className="gallery-grid" id="project-gallery">
                {galleries.map((gallery, index) => (
                    <figure className="gallery-card" key={index}>
                        <img
                            src={gallery.url}
                            alt={gallery.caption}
                            loading="lazy"
                        />
                        <figcaption>{gallery.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
