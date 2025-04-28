import React from "react"
import "./planet.scss"

// Import images directly to ensure they're properly processed by Vite
import image1 from "../../assets/twelve.png"
import image2 from "../../assets/six.png"
import image3 from "../../assets/eight.png"
import image4 from "../../assets/eleven.png"
import image5 from "../../assets/five.png"

// Importing images for the cards
import cash1 from "../../assets/cash1.jpg"
import cash2 from "../../assets/cash2.jpg"
import cash3 from "../../assets/cash3.jpg"
import cash4 from "../../assets/cash4.jpg"
import cash5 from "../../assets/cash5.jpg"
import cash6 from "../../assets/cash6.jpg"

const Planet = () => {
  // Use imported images
  const images = [image1, image2, image3, image4, image5]

  // Card data with replacement images (using the existing images that are available)
  const cards = [
    {
      title: "Cash Flow",
      description:
        "Every detail is meticulously designed and executed to ensure",
      image: cash1, // Using existing image as replacement
    },
    {
      title: "Cash Flow",
      description:
        "Every detail is meticulously designed and executed to ensure",
      image: cash2, // Using existing image as replacement
    },
    {
      title: "Cash Flow",
      description:
        "Every detail is meticulously designed and executed to ensure",
      image: cash3, // Using existing image as replacement
    },
    {
      title: "Cash Flow",
      description:
        "Every detail is meticulously designed and executed to ensure",
      image: cash4, // Using existing image as replacement
    },
    {
      title: "Cash Flow",
      description:
        "Every detail is meticulously designed and executed to ensure",
      image: cash5, // Using existing image as replacement
    },
    {
      title: "Cash Flow",
      description:
        "Every detail is meticulously designed and executed to ensure",
      image: cash6, // Reusing image1 for the sixth card
    },
  ]

  return (
    <div className="planet">
      <div className="planet_container">
        <div className="planet_header">
          <h2>The Planet Project Overview</h2>
          <p>
            Hamaara's team is thrilled to present The Planet of Hayward, a
            groundbreaking real estate development featuring 14 modern condos
            crafted to elevate urban living.
          </p>
        </div>

        <div className="planet_images">
          <div className="planet_images_row">
            <img src={images[0]} alt="The Planet Project" />
            <img src={images[1]} alt="The Planet Project" />
          </div>
          <div className="planet_images_row">
            <img src={images[2]} alt="The Planet Project" />
            <img src={images[3]} alt="The Planet Project" />
            <img src={images[4]} alt="The Planet Project" />
          </div>
        </div>

        <div className="planet_features">
          <h2>The Planet Project Overview</h2>

          <div className="planet_cards">
            {cards.map((card, index) => (
              <div className="planet_card" key={index}>
                <div className="card_image">
                  <img src={card.image} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planet
