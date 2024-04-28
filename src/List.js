import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
    const [videos, setVideos] = useState([]);

    async function getListVideo() {
        const response = await axios.get("http://localhost:8080/api/v1");
        setVideos(response.data);
    }

    useEffect(() => {
        getListVideo();
    }, []);

    async function handleDelete(id) {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa video này không?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/api/v1/${id}`);
                setVideos(videos.filter(video => video.id !== id));
                alert("Xóa video thành công!");
            } catch (error) {
                console.error('Error deleting video:', error);
                alert("Đã xảy ra lỗi khi xóa video.");
            }
        }
    }

    return (
        <>
            <Link to={'/create'}>Create</Link>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {videos.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.category.name}</td>
                        <td><Link to={`/edit/${item.id}`}>Edit</Link></td>
                        <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        <td><a>View</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default List;
