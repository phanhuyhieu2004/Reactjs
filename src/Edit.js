import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Edit() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const params = useParams();

    async function getDetailVideo() {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/${params.id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setCategory(response.data.category); // Đảm bảo response.data.category là một đối tượng danh mục
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    }

    useEffect(() => {
        getDetailVideo(); // Gọi hàm để lấy chi tiết video khi component được mount
    }, []); // Empty dependency array ensures useEffect runs only once after mount

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get('http://localhost:8080/api/v2');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

    async function updateVideo(e) {
        e.preventDefault();
        console.log('Vào rồi');
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/${params.id}`, {
                name: name,
                description: description,
                category: category // Gửi toàn bộ đối tượng danh mục
            });
            if (response.data) {
                setSuccessMessage(true);
                setTimeout(() => {
                    setSuccessMessage(false);
                    history('/');
                }, 3000); // 3 seconds
            }
        } catch (error) {
            console.error('Error updating video:', error);
        }
    }


    return (
        <>
            {successMessage && <div>Sửa thành công. Đang chuyển về trang chủ...</div>}
            <form onSubmit={updateVideo} >
                <input type="text" name="name" placeholder="Nhập Tên" value={name}
                       onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" placeholder="Nhập mô tả" value={description}
                       onChange={(e) => setDescription(e.target.value)} />
                <select value={category ? category.id : ''} onChange={(e) => {
                    const selectedCategory = categories.find(cat => cat.id === parseInt(e.target.value));
                    setCategory(selectedCategory);
                }}>
                    <option value="">Chọn Category</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Edit;
