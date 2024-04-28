import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Create() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(null); // Sửa để lưu trữ đối tượng danh mục
    const [categories, setCategories] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);

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

    async function createVideo(e) {
        e.preventDefault();
        console.log('Vào rồi');
        try {
            const response = await axios.post('http://localhost:8080/api/v1', {
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
            console.error('Error creating video:', error);
        }
    }

    return (
        <>
            {successMessage && <div>Thêm thành công. Đang chuyển về trang chủ...</div>}
            <form onSubmit={createVideo} >
                <input type="text" name="name" placeholder="Nhập Tên"
                       onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" placeholder="Nhập mô tả" onChange={(e) => setDescription(e.target.value)} />
                <select onChange={(e) => {
                    const selectedCategory = categories.find(cat => cat.id === parseInt(e.target.value));
                    setCategory(selectedCategory);
                }}>
                    <option value="">Chọn Category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Create;
