// import logo from './logo.svg';
import clsx from 'clsx';
import Content from './Content';
import Callback from './useCallback';
import RReducer from './Reducer';
import Jobs from './Jobs';
import Context1 from './contentcontext';
import Heading from './component/Heading';
import Paragraph from './component/paragraph';
import GlobalStyles from './component/GlobalStyles';
import Button from './component/Button';
import HomePage from './page/Home';
import NewsPage from './page/News';
import ContactPage from './page/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import {
    useState,
    memo,
    useMemo,
    useCallback,
    useRef,
    useReducer,
    createContext,
    useContext,
} from 'react';
import { ThemeContext } from './ThemeContext';
const oreders = [100, 200, 300];
// function App() {
//     const [counter, setCounter] = useState(() => {
//         const total = oreders.reduce((total, cur) => total + cur);
//         return total;
//     });
//     const handleIncrease = () => {
//         // setCounter((prevState) => prevState + 1);
//         setCounter(counter + 1);
//     };
//     const [info, setInfo] = useState({
//         name: 'nguyen duc phuong',
//         age: 14,
//         address: 'hcm',
//     });
//     const handleUpdate = () => {
//         // setInfo({
//         //     ...info,
//         //     bio: 'thich meo',
//         // });
//         setInfo((prev) => {
//             //logic
//             return {
//                 ...prev,
//                 bio: 'thich meo',
//             };
//         });
//     };
//     return (
//         <div className="App" style={{ padding: 20 }}>
//             <h1>{counter}</h1>
//             <h1>{JSON.stringify(info)}</h1>

//             <button onClick={handleIncrease}>handleIncrease</button>
//             <button onClick={handleUpdate}>handleUpdate</button>
//         </div>
//     );
// }

// const gifts = ['cpu-i9', 'iphone 14', 'keo mut'];

// function App() {
//     const [gift, setGift] = useState();
//     const randomGift = () => {
//         const index = Math.floor(Math.random() * gifts.length);
//         setGift(gifts[index]);
//     };
//     return (
//         <div style={{ padding: 20 }}>
//             <h1>{gift || 'chua co phan thuong'}</h1>
//             <button onClick={randomGift}>lay thuong</button>
//         </div>
//     );
// }

// two way binding

// function App() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const handleSubmit = () => {
//         console.log({name, email});
//     };
//     return (
//         <div style={{ padding: 202 }}>
//             <input value={name} onChange={(e) => setName(e.target.value)} />
//             <input value={email} onChange={(e) => setEmail(e.target.value)} />
//             <button onClick={handleSubmit}>submit</button>
//         </div>
//     );
// }

// const courses = [
//     {
//         id: 1,
//         name: 'java',
//     },
//     {
//         id: 2,
//         name: 'gt1',
//     },
//     {
//         id: 3,
//         name: 'vl1',
//     },
// ];

// function App() {
//     const [checked=3, setChecked] = useState();
//     const handleSubmit = () => {
//         //Call API
//         console.log({ id: checked });
//     };
//     return (
//         <div style={{ padding: 202 }}>
//             {courses.map((course) => (
//                 <div key={course.id}>
//                     <input
//                         type="radio"
//                         checked={checked === course.id}
//                         onChange={() => setChecked(course.id)}
//                     ></input>
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={handleSubmit}>submit</button>
//         </div>
//     );
// }

// function App() {
//     const [checked = 3, setChecked] = useState([]);
//     console.log(checked);
//     const handleCheck = (id) => {
//         setChecked((prev) => {
//             const isChecked = checked.includes(id);
//             if (isChecked) {
//                 return checked.filter((item) => item !== id);
//             } else {
//                 return [...prev, id];
//             }
//         });
//     };
//     const handleSubmit = () => {
//         //Call API
//         console.log({ ids: checked });
//     };
//     return (
//         <div style={{ padding: 202 }}>
//             {courses.map((course) => (
//                 <div key={course.id}>
//                     <input
//                         type="checkbox"
//                         checked={checked.includes(course.id)}
//                         onChange={() => handleCheck(course.id)}
//                     ></input>
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={handleSubmit}>submit</button>
//         </div>
//     );
// }

// function App() {
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

// function App() {
//     const [show, setShow] = useState(false);
//     const [count, setCount] = useState(0);

//     // const handleIncrease = () => {
//     //     setCount(count + 1);
//     // };

//     const handleIncrease = useCallback(() => {
//         setCount((prev) => prev + 1);
//     }, []);

//     return (
//         <div style={{ padding: 20 }}>
//             {/* <button onClick={() => setShow(!show)}>toggle</button>
//             {show && <Content />} */}
//             <h1>{count}</h1>
//             {/* <button onClick={handleIncrease}>click</button> */}
//             <Callback onIncrease={handleIncrease} />
//         </div>
//     );
// }

// function App() {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [products, setProducts] = useState([]);
//     const nameRef = useRef();
//     const handleSubmit = () => {
//         setProducts([
//             ...products,
//             {
//                 name,
//                 price: +price, //de chuyen sang number , hoac parseInt(price) hoac Number(price)
//             },
//         ]);
//         setName('');
//         setPrice('');
//         nameRef.current.focus();
//     };
//     const total = useMemo(() => {
//         const result = products.reduce(
//             (result, prod) => result + prod.price,
//             0
//         );
//         return result;
//     }, [products]);
//     return (
//         <div style={{ padding: 20 }}>
//             <input
//                 ref={nameRef}
//                 value={name}
//                 placeholder="nhap ten san pham "
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <br></br>
//             <input
//                 value={price}
//                 placeholder="nhap gia tien "
//                 onChange={(e) => setPrice(e.target.value)}
//             />
//             <br></br>
//             <button onClick={handleSubmit}>add</button>
//             <br></br>
//             Total:{total}
//             <ul>
//                 {products.map((product, index) => (
//                     <li key={index}>
//                         {product.name} - {product.price}
//                     </li>
//                 ))}
//             </ul>
//             <RReducer />
//             <Jobs />
//         </div>
//     );
// }

// function App() {
//     const context = useContext(ThemeContext);
//     return (
//         <div>
//             <button onClick={context.toggleTheme}>Click</button>
//             <Context1 />
//         </div>
//     );
// }

// function App() {
//     return (
//         <GlobalStyles>
//             <div>
//                 <p className="dark">hello</p>
//                 <Heading />
//                 <Paragraph />
//             </div>
//             <div className="d-flex">
//                 <div>plan 1</div>
//                 <div>plan 2</div>
//             </div>
//             <Button primary/>
//             <Button primary disable/>

//         </GlobalStyles>
//     );
// }

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
