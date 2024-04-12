import { useLocation } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const { enumResult } = location.state;

    return (
        <div>
            <p>Enum Result: {JSON.stringify(enumResult)}</p>
            {console.log({enumResult})}
            {console.log("We are in results component")}

            {enumResult.inHouseReviewProcess && 
            <div>
                <h1>✅ In-House Review Process</h1>
                <ul>
                    <li>A building permit is required.</li>
                    <li>Include plan sets.</li>
                    <li>Submit application for in-house review.</li>
                </ul>
            </div>
            }
            {enumResult.otcSubmissionProcess &&
            <div>
                <h1>✅ Over-the-Counter Submission Process</h1>
                <ul>
                    <li>A building permit is required.</li>
                    <li>Submit application for OTC review.</li>
                </ul>
            </div>
            }
            {enumResult.noPermit && 
            <div>
                <h1>❌ No Permit</h1>
                <ul>
                    <li>Nothing is required! You're set to build.</li>
                </ul>
            </div>
            }
        </div>
    )
}

export default Results