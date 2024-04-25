const BlogList = (props) => {
    const {blogs,author}=props;
    return (
        <div className='blog-list'>
            <h2>{author}</h2>

            {blogs.length && blogs.map(item => (
                <div key={item.id} className="blog-preview">
                    <h2>{item.name}</h2>
                    <div>{item.code}</div>
                </div>
            ))
            }
        </div>

    )
}
export default BlogList