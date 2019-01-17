import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    CardImg,
    CardBody,
    Button
} from 'reactstrap';
import Navigation from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import codingNights from '../../img/girl_coding_nights_event.jpg';
import './Events.css';

class Events extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Banner
                    lead="Events"
                    leadSub="Compete in intercollegiate competitions."
                />
                <Container className="event-body" fluid>
                    <Row>
                        <div className="pseudo" />
                        <Col md={{ size: 7, offset: 1 }}>
                            <h2 className="mt-3">Upcoming Events</h2>

                            {/* KARTHIK */}
                            <Card body className="card-body">
                                <CardTitle>
                                    P = NP and Other Hilarious Jokes You Can
                                    Tell Yourself
                                    <br />
                                    <i>
                                        by Karthik Gajulapalli - January 17th,
                                        DBH 4011 @ 6:30 - 7:30
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    The central question that has shaped much of
                                    computer science research is P vs NP. Do we
                                    really need mathematicians and their
                                    creativity to come up with proofs, or will
                                    computers be able to automatically generate
                                    proofs? If we believe creativity has some
                                    value, how do we bridge this gap of
                                    intractability?
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Karthik is a senior
                                    studying math and computer science. Besides
                                    talking at twice the speed of sound, he
                                    enjoys talking to anybody willing to listen
                                    about theoretical computer science. To truly
                                    marvel his front-end skills, you should
                                    visit his website.
                                </CardText>
                            </Card>

                            <Card style={{ 'margin-top': '20px' }}>
                                <a
                                    href="https://www.facebook.com/events/558100287990483/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <CardImg
                                        top
                                        width="100%"
                                        src={codingNights}
                                        alt="girl coding nights"
                                    />
                                </a>
                                <CardBody>
                                    <CardTitle>
                                        Girls' Coding Nights - January 23rd, DBH
                                        4011 @ 5 - 6 pm
                                    </CardTitle>
                                    <CardText>
                                        The ACM club is starting a new series
                                        called the Girls' Coding Nights, and we
                                        invite YOU to join! This is a good
                                        chance to socialize with like-minded
                                        girls and hone your technical interview
                                        skills, all while snacking on pizza ;).
                                        We can also help you out if you have any
                                        questions on interview questions you are
                                        working on! The first meeting will be an
                                        introduction to Graph Theory.
                                    </CardText>
                                    <a
                                        href="https://www.facebook.com/events/558100287990483/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Button className="event-button">
                                            RSVP For This Event
                                        </Button>
                                    </a>
                                </CardBody>
                            </Card>

                            {/* JACKY */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Unzipping our Genes with Machine Learning{' '}
                                    <br />
                                    <i>
                                        by Jacky Dai - January 24th, DBH 4011 @
                                        6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    Bioinformatics is an interdisciplinary
                                    subject involving Biology, Computer Science,
                                    and Social Science. An important part of
                                    Bioinformatics is understanding genes, the
                                    basic component encoding every information
                                    of living creatures. In this seminar, I will
                                    briefly introduce genes, algorithms for
                                    manipulating genes, and gene data science.
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Jacky is a third year
                                    computer science student at UCI. Jacky’s
                                    interests include graph algorithms and
                                    algorithm design in interdisciplinary
                                    subjects.
                                </CardText>
                            </Card>

                            {/* JENS */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Machine learning: Do we really understand
                                    it? <br />
                                    <i>
                                        by Jens Tuyls - January 31th, DBH 4011 @
                                        6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    Many machine learning models that are being
                                    applied today can grow very complex. This is
                                    why many of the models become harder and
                                    harder to understand, even by experts in the
                                    field. This talk will provide an overview of
                                    how we can tackle this problem and see how
                                    we can truly understand what our
                                    state-of-the-art machine learning models are
                                    doing today.
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Jens is a junior
                                    studying computer science and engineering.
                                    Along with being extremely interested in
                                    machine learning and algorithms, he is also
                                    the tallest Belgian on campus.
                                </CardText>
                            </Card>

                            {/* ARNE */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Let's Go!!! <br />
                                    <i>
                                        by Arne Philipeit - February 7th, DBH
                                        4011 @ 6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    Go has been gaining traction recently
                                    because of its ease of use and value to
                                    parallel computing. You could think of it as
                                    a join of the simplicity of python and the
                                    efficiency of C. In this talk he will dive
                                    into Go and see what makes it so awesome. As
                                    Arne claims by the end of the talk you will
                                    definitely say : “Go, the only programming
                                    language you will ever need”
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Arne Philipeit is a
                                    senior in Computer Science and Engineering,
                                    exchange student from Trinity College
                                    Dublin, and Go-enthusiast. He also holds the
                                    socal record for solving most ICPC problems
                                    in Java, something he’s not too proud of.
                                </CardText>
                            </Card>

                            {/* CHINMAY */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Algorithms in Nature <br />
                                    <i>
                                        by Chinmay Raut - February 14th, DBH
                                        4011 @ 6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    Algorithms aren't only in books or CS
                                    lectures. They are everywhere! From the ants
                                    swarming on the ground to mold crawling in
                                    the ceiling, Algorithms are more than a way
                                    of life. In many cases, they are the
                                    embodiment of life itself!
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Chinmay is a 3rd-year
                                    undergraduate studying the minuscule yet
                                    seemingly infinite intersection of stats,
                                    bio, and cs. In his limited free time, he
                                    helps run ACM and rants about the frugality
                                    of Del Taco’s Tuesday deal.
                                </CardText>
                            </Card>

                            {/* BRYON */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Use the Force, Luke: Computer Science and
                                    Molecular Dynamics Force Fields <br />
                                    <i>
                                        by Bryon Tjanaka - February 21th, DBH
                                        4011 @ 6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    Molecular dynamics (MD) simulations are an
                                    important part of the drug discovery
                                    process, enabling scientists to test the
                                    viability of thousands of drugs without
                                    needing to make any of them. An important
                                    part of these simulations is force fields,
                                    sets of parameters which allow the
                                    simulation to make calculations. In this
                                    talk, I will discuss how computer science is
                                    involved with the development and usage of
                                    such force fields.
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Bryon Tjanaka is a
                                    sleep-deprived second-year computer science
                                    major at UCI. In addition to being a board
                                    member of ACM@UCI, he is an undergraduate
                                    researcher in the Mobley Lab. After using
                                    the force to help him graduate, he will
                                    pursue a career as a Jedi master.
                                </CardText>
                            </Card>

                            {/* POOYA */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Should We Follow Ant’s Traffic Laws?!
                                    <br />
                                    <i>
                                        by Pooya Khosravi - February 28th, DBH
                                        4011 @ 6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    In recent years, the number of automobiles
                                    in California has increased dramatically,
                                    presenting a serious problem of heavy
                                    traffic. Ant colony optimization is a
                                    discrete algorithm inspired by ants to find
                                    shortest path to their destination, using
                                    pheromones. In this talk, we’ll see if
                                    there’s anything to learn from the ants.
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Pooya is a dynamic
                                    individual, as he is one of the few people
                                    who chooses to study computer science and
                                    biomedical engineering, then minor in music
                                    just for laughs. If you are wondering, Pooya
                                    clearly did not write this.
                                </CardText>
                            </Card>

                            {/* JUNLIN */}
                            <Card body className="card-body">
                                <CardTitle>
                                    Adversarial Attacks on Machine Learning
                                    Models
                                    <br />
                                    <i>
                                        by Junlin Wang - March 7th, DBH 4011 @
                                        6:30 - 7:30 pm
                                    </i>
                                </CardTitle>
                                <CardText>
                                    <hr className="event-line" />
                                    Machine Learning models can be easily fooled
                                    by data that's slightly twisted/modified.
                                    Especially if the data inputted is outside
                                    the distribution of the training data. You
                                    probably have seen the pictures showing that
                                    images look the same to human eyes produce
                                    dramatically different results for ML
                                    models. In this talk, I will talk about a
                                    variety of these kinds of attacks and
                                    possibly why it happens.
                                    <br />
                                    <br />
                                    <strong>Bio:</strong> Junlin Wang is a
                                    junior who is majoring in math and computer
                                    science. Other than being the head of ACM’s
                                    special interest group for AI Junlin enjoys
                                    watching censored videos he can’t see in
                                    China.
                                </CardText>
                            </Card>
                        </Col>
                        <Col md="4">
                            <h2 className="mt-3">Weekly Schedule</h2>
                            <Card body className="card-body">
                                <CardTitle>
                                    ACM Practice - Winter 2019
                                </CardTitle>
                                <CardText>
                                    <strong>Tuesday: </strong>
                                    ICS 432, 6:00 - 8:00 pm <br />
                                    <strong>Thursday: </strong>
                                    DBH 4011, 6:00 - 8:00 pm
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Events;
