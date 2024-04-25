import BlogList from "./BlogList";
import {useState} from "react";

const Create=()=>{
    const [blogs, setBlogs] = useState([
        {
            id: '1',
            name: 'Hieu',
            author: 'Nine Dev',
            code: 'FE'
        },
        {
            id: '2',
            name: 'Hieu 004',
            author: 'Nine Dev',
            code: 'FE'
        },
        {
            id: '3',
            name: 'Hieu 005',
            author: 'Nine Dev',
            code: 'FE'
        }, {
            id: '4',
            name: 'Hieu 006',
            author: 'Nine Dev',
            code: 'FE'
        }
    ])
    const [author,setAuthor] = useState('HieuHiHi');
    return (
        <>
            <BlogList blogs={blogs} author={author}></BlogList>

        </>
    )
}
export default Create