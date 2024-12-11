import React from 'react'
import iconImg from '../../assets/images/Icon.png'
import featureImg from '../../assets/images/main.png'
import '../mainsection/main.css'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import NewFooter from '../newFooter'

const cardData = [
    {
        id: 1,
        img: card1,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 2,
        img: card2,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 3,
        img: card3,
        title: 'Light, Fast & Powerful',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aeneanmassa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donecquam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        hasButton: true,
    },
];

const Main = () => {
    return (
        <>
            <main>
                <section className='features-section'>
                    <div className='features-text'>
                        <h2>Light, Fast & Powerful</h2>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h6>
                    </div>
                    <div className='features-card'>
                        <div className='feature-card'>
                            <img src={iconImg} alt="Featured Icon 1" />
                            <h3>Web Development</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</h6>
                        </div>
                        <div className='feature-card'>
                            <img src={iconImg} alt="Feature Icon 2" />
                            <h3>App Development</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</h6>
                        </div>
                    </div>
                </section>
                <div className='feature-img'>
                    <img src={featureImg} alt="Feature Img" />
                </div>
            </main>
            <div className="info-container">
                {cardData.map((card) => (
                    <div className="info-card" key={card.id}>
                        <div className="info-img">
                            <img src={card.img} alt={`Card ${card.id}`} />
                        </div>
                        <div className="info-text">
                            <h2 className="card-title">{card.title}</h2>
                            <h6 className="card-description">{card.description}</h6>
                            {card.hasButton && <button className="button-primary">Purchase Now</button>}
                        </div>
                    </div>
                ))}
            </div>
            <div className='pricing-container'>
                <div className='pricing-text'>
                    <h2>A Price To Suit Everyone</h2>
                    <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </h6>
                </div>
                <div className='pricing-design'>
                    <h3>
                        $40
                    </h3>
                    <h5>
                        UI Design Kit
                    </h5>
                </div>
                <div className='pricing-button'>
                    <p>See, One price. Simple.</p>
                    <button class="button-primary">Purchase UI Kit</button>
                </div>
            </div>
            <NewFooter />
        </>
    )
}

export default Main