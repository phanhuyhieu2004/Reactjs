import {useState} from "react";

const Home = () => {
    const [name,setName]=useState('df');
    const [age,setAge]=useState('25');
    const handleClickEvent=()=>{
        setName("jnjmn")
        setName("jnjmn")
        console.log("df");
    }
    // const handleClickEvents=(value)=>{
    //     console.log(value);
    // }
    return(

        <div>
            <center><h1>Home Page</h1></center>
            <div>{name}</div>
     <button onClick={handleClickEvent}>Click me</button>
            {/*Trong trường hợp này, handleClickEvent được truyền trực tiếp vào sự kiện onClick. Khi bạn nhấp vào nút, handleClickEvent sẽ được gọi. Điều này xảy ra vì handleClickEvent không nhận bất kỳ tham số nào, nó chỉ là một hàm không tham số. Do đó, bạn có thể truyền nó trực tiếp vào onClick.*/}
     {/*<button onClick={()=> {handleClickEvents("hnjdfjgjkdg")}}>Click mess</button>*/}
            {/*Trong trường hợp này, chúng ta cần truyền một giá trị tham số vào handleClickEvents. Để làm điều này, chúng ta sử dụng một hàm nặc danh (anonymous function) bên trong onClick. Hàm này sẽ gọi handleClickEvents với giá trị tham số "hnjdfjgjkdg" khi nút được nhấp vào. Điều này là cần thiết vì handleClickEvents đang chờ đợi một tham số và chúng ta cần truyền giá trị đó vào khi gọi nó.*/}
        </div>
    )

}
export default Home