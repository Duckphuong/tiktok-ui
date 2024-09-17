import { useEffect, useState, useRef, memo, useCallback } from 'react';

// 1/ useEffect(callback) ít dùng
// -gọi callback mỗi khi component re-render
//-gọi callback sau khi component thêm element vào DOM
// 2/ useEffect(callback, [])
//-chỉ gọi callback một lần sau khi component mounted
// 3/ useEffect(callback, [deps])
//-callback sẽ được gọi mỗi khi deps thay đổi
//===========================================================
//1. callback luôn được gọi sau khi component mounted
//2. clean up function luôn được gọi trước khi component unmounted -> tránh memory leak
//3. clean up function luôn được gọi trước khi callback được gọi(trừ lần unmounted)

// A. useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi clear up fuction khi deps thay đổi
// 5. Gọi useEffect callback

// B. useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi clear up function khi deps thay đổi (sync)
// 4. Gọi useEffect callback (sync)
// 5. Render lại UI

const tabs = ['posts', 'comments', 'albums'];
const lessons = [
    {
        id: 1,
        name: 'hoc gt1',
    },
    {
        id: 2,
        name: 'hoc chi cho met',
    },
    {
        id: 3,
        name: 'jack > sson tung',
    },
];
function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [width, setWidth] = useState(window.innerWidth);
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [countdown, setCountdown] = useState(180);
    const [avatar, setAvatar] = useState();
    // useEffect(() => {
    //     console.log('re-render', title);
    //     document.title = title; //update DOM title
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then((res) => res.json())
    //         .then((posts) => {
    //             setPosts(posts);
    //         });
    // }, [type]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // setShowGoToTop(window.scrollY >= 200);
    //         if (window.scrollY >= 200) {
    //             setShowGoToTop(true);
    //         } else {
    //             setShowGoToTop(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     console.log('add');
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         console.log('remove');
    //     };
    // }, []);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth);
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // });

    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCountdown((prevState) => prevState - 1);
    //     }, 1000);
    //     return () => clearInterval(timerId);
    // }, []);

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        // thêm attribiut cho file
        setAvatar(file);
        e.target.value = null;
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = ({ detail }) => {
            //{detail} distructuring để lấy chỉ detail
            console.log(detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);

    // const ref = useRef(99);
    // useRef luôn trả về obj nên muốn lấy giá trị phải thông qua ref.current
    // và có thể sửa lại giá trị
    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
    };
    // Lấy giá trị hiện tại và giá trị trước
    useEffect(() => {
        prevCount.current = countdown;
    }, [countdown]);
    console.log(countdown, prevCount.current);
    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        // lay toa do cua element h1  giong vs getElementByID hay querySelector
        console.log(rect);
    });
    console.log('rerender');
    return (
        <div>
            {/* {tabs.map((tab, index) => (
                <button
                    onClick={() => setType(tab)}
                    key={index}
                    style={
                        type === tabs[index]
                            ? {
                                  color: '#fff',
                                  backgroundColor: '#333',
                              }
                            : {}
                    }
                >
                    {tab}
                </button>
            ))}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    On Top
                </button>
            )} */}
            {/* <h1>{width}</h1> */}
            <h1 ref={h1Ref}>{countdown}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            {/* <input type="file" onChange={handlePreview} />
            {avatar && <img src={avatar.preview} width="60%" alt="" />}
            <div>
                <ul>
                    {lessons.map((lesson) => (
                        <li
                            key={lesson.id}
                            style={{
                                color: lessonId === lesson.id ? 'red' : '#333',
                            }}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))}
                </ul>
            </div>  */}
        </div>
    );
}

export default memo(Content);
