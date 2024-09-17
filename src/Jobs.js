import { useReducer, useRef, useState } from 'react';

// function Jobs() {
//     const [job, setJob] = useState('');
//     console.log(localStorage);
//     // console.log(JSON.parse(localStorage.getItem('jobs'))[0]);
//     const [jobs, setJobs] = useState(() => {
//         const storageJobs = JSON.parse(localStorage.getItem('jobs'));
//         return storageJobs ?? [];
//     });
//     // neu storageJobs la null hoac undefined thi lay []
//     const handleSubmit = () => {
//         setJobs((prev) => {
//             const newJobs = [...prev, job];
//             const jsonJobs = JSON.stringify(newJobs);
//             localStorage.setItem('jobs', jsonJobs);
//             return newJobs;
//         });
//         setJob('');
//     };
//     var removeJob = function (job) {
//         setJobs((prev) => {
//             var newArray = prev.filter((item) => item !== job);
//             var jsonStringArray = JSON.stringify(newArray);
//             localStorage.setItem('jobs', jsonStringArray);
//             return newArray;
//         });
//     };
//     return (
//         <div style={{ padding: 20 }}>
//             <input value={job} onChange={(e) => setJob(e.target.value)} />
//             <button onClick={handleSubmit}>ADD</button>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>
//                         {job}
//                         <button
//                             onClick={() => {
//                                 removeJob(job);
//                             }}
//                         >
//                             Xóa
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

//init state
const initState = {
    job: '',
    jobs: [],
};
//action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};
const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};
const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};
//reducer
const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            };
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs,
            };
            break;
        default:
            throw new Error('invalid action');
    }
    return newState;
};
//dispatch

function Jobs() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const inputRef = useRef();
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    };
    return (
        <div>
            <h3>TO do</h3>
            <input
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => dispatch(deleteJob(index))}>
                            Xoa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Jobs;
