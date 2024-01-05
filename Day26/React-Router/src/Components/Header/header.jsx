import './header.css';

const Header = (props) => {
    const { blogsHeader } = props;
    return (
        <div className="header container text-start">
                    <h2>{blogsHeader.title}</h2>
                    <p>{blogsHeader.description}</p>
                </div>
    );
}

export default Header;