import React, { useState } from "react"; // Importing React and useState hook
import { blog } from "./Data/ApiResponse"; // Importing the blog data from an external file

const OusAns = () => {
    const [openedIds, setOpenedIds] = useState([]); // Initializing state to keep track of opened question IDs
    const newData = blog; // Assigning the imported blog data to a new variable

    // Function to handle toggling the visibility of answers
    const toggleAnswer = (id) => {
        console.log("DAT A + ID ", openedIds, id); // Logging current state and the id of the clicked question
        if (openedIds.includes(id)) {
            // If the clicked question is already open, close it by removing its ID from the openedIds array
            setOpenedIds(openedIds.filter(item => item !== id));
            console.log("ALL STE value ", openedIds); // Logging the updated state
        } else {
            // Otherwise, add the clicked question's ID to the openedIds array to open it
            setOpenedIds([...openedIds, id]);
            console.log("ALL STE ARRAY ", openedIds); // Logging the updated state
        }
    };

    return (
        <div>
            {/* Placeholder text for the component */}
            NEW COMPONET _ SSS

            <div>
                {/* Mapping over the blog data to display questions and answers */}
                {newData.map((val) => (
                    <ul key={val.id}> {/* Using the unique ID from the blog data as the key */}
                        <div>
                            {/* Displaying the question */}
                            <div style={{ color: "red", cursor: "pointer" }} onClick={() => toggleAnswer(val.id)}>
                                {val.ous}
                            </div>
                            {/* Conditionally rendering the answer if the question's ID is in the openedIds array */}
                            {openedIds.includes(val.id) && (
                                <div style={{ color: "green" }}>
                                    {val.ans}
                                </div>
                            )}
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default OusAns;
