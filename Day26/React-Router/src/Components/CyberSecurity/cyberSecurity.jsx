import './cyberSecurity.css';
import BlogsNav from '../BlogsNav/blogsNav';
import Header from '../Header/header';
import Blogs from '../Blogs/blogs';

const cyberSecurity = (props) => {
    const { blogsHeader, blogs } = props;
    return (
        <div className='cyberSecurity container'>
            <Header blogsHeader={blogsHeader} />
            <BlogsNav />
            <div className="blogsArea">
                <div className="row">
                    {blogs.map((blog, index) => {
                        return <Blogs blog={blog} index={index} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default cyberSecurity;