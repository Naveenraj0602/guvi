import './blogs.css';

const blogs = (props) => {
    const { blog } = props;
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
                <img className='card-img-top' src={blog.imageUrl} alt={blog.title} />
                <div className="card-body">
                    <h5 className="card-title text-start">{blog.title}</h5>
                    <div className="card-text text-start">{blog.text}</div>
                </div>
                <div className="card-footer text-start">{blog.postTime}</div>
            </div>
        </div>
    );
}

export default blogs;