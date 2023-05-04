import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';

const jobit = () => {
    return (
        <Container>
            <main>
                <header>
                    <div className='section'>
                        <h4>
                            how to answer a simple question? why looking for a
                            new job opportunity?
                        </h4>
                        <p>
                            As humans, we all, from time to time, feel the needs
                            to look for a new or career changed; which is why we
                            decided to create this amazing app:
                        </p>

                        <h1 className='title'>jobit</h1>
                        <h1 className='title-desc'>
                            unique job search app experience
                        </h1>
                        <Link
                            href={'https://jobit-dd.vercel.app/'}
                            target='_blank'
                            className='link'
                        >
                            live preview{' '}
                            <span>
                                <HiArrowNarrowRight />
                            </span>
                        </Link>
                    </div>

                    <div className='visual'>
                        <Image
                            src={'/jobit1.svg'}
                            width={0}
                            height={0}
                            className='cs-1'
                            alt='visual app'
                        />
                    </div>
                </header>

                <section className='section mision'>
                    <h2>what we did</h2>
                    <article className='mision-content'>
                        <ul>
                            <li>web application</li>
                            <li>team colaboration / dedicated team</li>
                        </ul>

                        <div className='mision-info'>
                            <div>
                                <h5>industry</h5>
                                <p>job search / HR</p>
                            </div>
                            <div>
                                <h5>team size</h5>
                                <p>4 people</p>
                            </div>
                            <div>
                                <h5>location</h5>
                                <p>4 north america</p>
                            </div>
                        </div>
                    </article>
                </section>

                <section className='about'>
                    <h2>about the project</h2>
                    <p>
                        jobit is a job search application, where you can type
                        and look for any kind of job available on the market you
                        may wish, in your existing location; implementing
                        technologies like: React.js / Next.js, tailwind and
                        additional npm packages. All done during one month.
                    </p>

                    <p>
                        this project was a requirement of the master class on
                        the javascript mastery platform{' '}
                    </p>
                    <div className='visual'>
                        <Image
                            src={'/javascriptmastery.svg'}
                            width={0}
                            height={0}
                            className='cs-1'
                            alt='visual app'
                        />
                    </div>
                </section>

                <section className='process'>
                    <h2>the challenge</h2>

                    <div className='process-grid'>
                        <article>
                            <div>
                                <h3>my situation to get stated</h3>
                                <p>
                                    at the beginning of the project, I had just
                                    very basic knowledge of react, none of
                                    next.js and none of tailwind.css, which put
                                    me on a difficult situation
                                </p>
                            </div>
                        </article>

                        <article>
                            <h3>planning and design</h3>
                            <ul>
                                <li>
                                    {' '}
                                    jobit application was created for us, as
                                    developer, to have a website in which we can
                                    search for new jobs in the tech industry,
                                    based on the cities we live.
                                </li>

                                <li>
                                    {' '}
                                    first: we plan to have a meeting every day,
                                    then, we define to create reusable
                                    components to use troughtout the app. After
                                    that, we defined: pages and the structure to
                                    follow, to acomplish this project.
                                </li>
                                <li>
                                    along the way, as a personal matter, I used
                                    to read a little bit of the documentation,
                                    regarding a piece of code to implement then,
                                    I applied it to the code.
                                </li>

                                <li>
                                    {' '}
                                    We also, decided to have a weekly meeting to
                                    track the whole process to meet the
                                    deadline, along side that 24/7 support
                                    whenever I got stuck.
                                </li>
                            </ul>
                        </article>
                    </div>

                    <article className='process info'>
                        <div className='screenshots'>
                            <div className='visual'>
                                <Image
                                    src={'/screenshots.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                </section>

                <section className='implementation'>
                    <h2>how it works</h2>
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>01</span> gathering data
                                from this{' '}
                                <Link
                                    href={
                                        'https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch'
                                    }
                                    target='_blank'
                                    className='api'
                                >
                                    LINK API
                                </Link>{' '}
                                and also, geolocation to get user's location
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit9.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>02</span> Home: Display
                                the latest job post, incluring jobs from
                                top/featured companies.
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit2.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>03</span> Job Details:
                                User can see detail information about a job,
                                such as company info, requirements and
                                responsabilities. Add a similar job stack based
                                on the job search.
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit2.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>04</span> Company: Show
                                job openings for a particular company, incluring
                                similar companies, listed based on the searched
                                company.
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit7.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>05</span> Geolocation:
                                Integrate a Geolocation API to show job results
                                and salary estimations based on the user
                                location
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit3.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>06</span> Salary
                                Estimates: Create a form that will take input
                                from users and show the estimated salary for
                                that role
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit4.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className='imp-grid'>
                        <div className='implementation-info'>
                            <p>
                                <span className='count'>07</span>Theme: Develop
                                the website in dark and light mode
                            </p>
                        </div>
                        <div className='implementation-img'>
                            <div className='visual'>
                                <Image
                                    src={'/jobit8.svg'}
                                    width={0}
                                    height={0}
                                    className='cs-1'
                                    alt='visual app'
                                />
                            </div>
                        </div>
                    </article>
                    <hr />
                </section>

                <section className='conclusion'>
                    <h2>the conclusion</h2>
                    <p>
                        After the conclusion of this project, I realized on
                        which step I am regarding my code level; I understood
                        the importance of going across documentations. Why it is
                        crutial to handle async javascript, understand a state
                        managament, etc; read and practice with it is the key.
                    </p>
                </section>
            </main>
        </Container>
    );
};

const Container = styled.div`
    background: var(--bg-color);
    main {
        width: 80vw;
        margin: 0 auto;
    }

    header {
        margin-bottom: 2rem;
        text-align: center;
    }
    header .section {
        min-height: 100vh;
        & h4 {
            max-width: var(--fixed-width);
            margin-top: 1rem;
        }

        & p {
            max-width: 400px;
        }
    }

    .link {
        padding: 0.8rem 1rem;

        background: none;
        border: none;
        outline: 2px solid var(--white);
        transition: var(--transition);
        border-radius: var(--radius);
        color: var(--white);
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        cursor: pointer;
        background: #0bab7c;
    }

    .link span {
        display: inline-block;
        align-self: center;

        margin-left: 10px;
    }

    .process {
        margin-bottom: 3rem;
    }

    .process-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;

        & h3 {
            letter-spacing: var(--spacing);
            text-transform: capitalize;
            color: var(--text-color);
            margin-bottom: 1rem;
        }
        & ul {
            list-style-type: square;
            & li {
                letter-spacing: var(--spacing);
                text-transform: capitalize;
                line-height: var(--line-height);
                margin-bottom: 1rem;
            }
        }
        & p {
            letter-spacing: var(--spacing);
            text-transform: capitalize;
            line-height: var(--line-height);
            color: var(--text-color);
        }
    }
    .link:hover {
        background: var(--white);
        outline: 2px solid #0bab7c;
        color: var(--text-color);
    }

    header .link span {
        margin-left: 10px;
    }

    header h4,
    .mision h2,
    .about h2,
    .process h2,
    .implementation h2,
    .conclusion h2 {
        font-family: var(--cs-other-font);
        letter-spacing: var(--spacing);
        font-size: 32px;
        margin-bottom: 2rem;
        text-transform: capitalize;
    }

    .about {
        margin-bottom: 3rem;
    }

    .mision-info {
        & h5 {
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            font-size: 26px;
        }

        & p {
            text-transform: capitalize;
            letter-spacing: var(--spacing);
        }
    }

    header p {
        margin-bottom: 4rem;
        letter-spacing: var(--spacing);
        color: var(--text-color);
    }

    .title-desc {
        text-transform: capitalize;
        font-weight: 800;

        font-size: 30px;
        width: 400px;
        margin-bottom: 3rem;
        font-family: var(--cs-font-heading);
    }

    .mision {
        min-height: 30vh;
        margin-bottom: 3rem;
    }

    .mision-content {
        & ul {
            list-style-type: square;
            margin-bottom: 2rem;
            & li {
                letter-spacing: var(--spacing);
                text-transform: capitalize;
                line-height: var(--line-height);
            }
        }
    }

    .about p {
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        line-height: var(--line-height);
        color: var(--text-color);
        margin-bottom: 1.5rem;
    }

    .mision-info {
        display: grid;

        gap: 2rem;
    }

    .title {
        color: #0bab7c;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
    }

    .cs-1 {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .visual {
        box-shadow: var(--dark-shadow);
        padding: 0.5rem;
        border-radius: var(--radius);
    }

    .imp-grid {
        display: grid;
        gap: 1rem;
    }

    .implementation {
        margin-bottom: 3rem;
    }

    .implementation-info {
        align-self: center;
        border: 1px solid var(--text-color);
        padding: 1.5rem 2rem;
        border-radius: 10px;

        & p {
            letter-spacing: var(--spacing);
            text-transform: capitalize;
            line-height: var(--line-height);
            font-size: 1rem;
        }
    }

    .api {
        color: var(--primary-color);
    }
    .count {
        color: var(--primary-20);
        font-size: 2rem;
        display: block;
        margin-bottom: 1rem;
    }

    hr {
        margin: 1.5rem 0;
    }

    .conclusion p {
        max-width: 350px;
        letter-spacing: var(--spacing);

        line-height: var(--line-height);
        color: var(--text-color);
        margin-bottom: 2rem;
    }

    @media (min-width: 992px) {
        header {
            text-align: left;
            & .section {
                & h4 {
                    max-width: 100%;
                }
                & p {
                    max-width: 100%;
                }
            }
        }

        .title-desc {
            font-size: 60px;
            width: 100%;
        }

        .mision-info {
            grid-template-columns: repeat(3, 1fr);
        }

        .mision-content {
            display: flex;
            justify-content: space-between;
            & ul {
                margin-bottom: 0;
            }
        }

        .mision {
            margin-bottom: 0;
        }

        .process-grid {
            gap: 5rem;
        }

        .imp-grid {
            display: grid;

            grid-template-columns: 300px 1fr;
            gap: 4rem;
        }

        .conclusion p {
            max-width: 800px;
        }
    }
`;

export default jobit;
