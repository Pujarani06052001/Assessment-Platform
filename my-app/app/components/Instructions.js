const Instructions = () => {
    return (
        <>
            <div className="box">
                <h1 className="mcq-text">MCQ Test Portal</h1>
                <div className="box2">
                    <h3 className="instruction">Instructions</h3>
                    <div className="box1">
                    <div className="inside-box">
                        
                            <ul className="ul">
                                <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                                <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                                <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                                <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                                <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                                <li>Review: After submission, you may review your answers and scores.</li>
                            </ul>

                      

                        
                        
                    </div>
                    <p>

                        Please ensure a stable internet connection. If you encounter any issues, contact support immediately.
                    </p>

                    <p>Click 'Lets Start' to begin the test. </p>
                    <h4></h4>
                </div>

            </div>
            </div>
        </>

    )
}

export default Instructions;