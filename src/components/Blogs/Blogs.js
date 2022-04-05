import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='container'>
            <h1 className='m-4 blog-heading text-center'>My Questions</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Context Api?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                                <br /> <strong>For example,</strong> authenticated users, locale preferences, UI themes need to be accessed in the application by many components.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is Semantic tag?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                In earlier versions of HTML, there were no globally accepted names for structural elements, and each developer used their own. That made it very hard for search engines to index web page content correctly. When a browser communicates with the code, it looks for some specific information to help with the display. Hence, HTML5 introduced a consistent list of semantic elements to help search engines and developers. The list of some semantic elements : <strong>article, aside, details, figure, footer, form, header, main, mark, nav, table, section</strong> . HTML5 semantic tags have meaning. By using semantic markup, we help the browser understand the meaning of the content. The semantic tag describe how the content within them is supposed to behave. By providing this extra level of clarity,HTML5 semantic elements also help search engines to read the page and find the required information faster.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Difference between inline, block and inline-block element?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p> <strong>1.Inline-</strong> Displays an element as an inline element. The element doesn't start on a new line. Any height and width properties will have no effect. Example of inline element span, a, img <br />

                                <strong>2.Block-</strong> Displays an element as a block element. The element will start on a new line. You CAN set height and width values. Example of block element div, li, h1, p, section etc.<br />

                                <strong> 3.Inline-block-</strong> Displays an element as an inline-level block container. The element doesn't start on a new line.You CAN set height and width values
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;