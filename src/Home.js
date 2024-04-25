import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name='Phan Huy Hiệu'
    // giá trị truyền vào mặc định là PHH
    // const [name,setName]=useState('Phan Huy Hiệu');
    // const [age,setAge]=useState('25');
    // const [address,setAddress]=useState('');
    //
    // const handleClickEvent=()=>{
    //     setName('Hieudev');
    //     setAge('30');
    //     setAddress('VN');
    //     console.log("Hello me");
    // }
    const [blogs, setBlogs] = useState([
        {
            id: '1',
            name: 'Hieu',
            author: 'mario',
            code: 'FE'
        },
        {
            id: '2',
            name: 'Hieu 002',
            author: 'mario',
            code: 'FE'
        },
        {
            id: '3',
            name: 'Hieu 003',
            author: 'mario',
            code: 'FE'
        }, {
            id: '4',
            name: 'Hieu 004',
            author: 'yoshi',
            code: 'FE'
        }
    ])
    // const [author,setAuthor] = useState('MerioBlog');


    return (

        <div>
            <center><h1>Home Page</h1></center>
            <BlogList blogs={blogs.filter(item=>item.author==='marioq')} author='MerioBlog'></BlogList>
            <BlogList blogs={blogs.filter(item=>item.author==='yoshi')} author='Yoshi'></BlogList>

            {/*       <div>{name}-{age}-{address}</div>*/}
            {/*<button onClick={handleClickEvent}>Click me</button>*/}
            {/*Trong trường hợp này, handleClickEvent được truyền trực tiếp vào sự kiện onClick. Khi bạn nhấp vào nút, handleClickEvent sẽ được gọi. Điều này xảy ra vì handleClickEvent không nhận bất kỳ tham số nào, nó chỉ là một hàm không tham số. Do đó, bạn có thể truyền nó trực tiếp vào onClick.*/}
            {/*<button onClick={()=> {handleClickEvents("hi hi ha ha")}}>Click mess</button>*/}
            {/*Trong trường hợp này, chúng ta cần truyền một giá trị tham số vào handleClickEvents. Để làm điều này, chúng ta sử dụng một hàm nặc danh (anonymous function) bên trong onClick. Hàm này sẽ gọi handleClickEvents với giá trị tham số "hnjdfjgjkdg" khi nút được nhấp vào. Điều này là cần thiết vì handleClickEvents đang chờ đợi một tham số và chúng ta cần truyền giá trị đó vào khi gọi nó.*/}
        </div>
    )

}
export default Home