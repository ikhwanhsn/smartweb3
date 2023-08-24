const Button = ({style, children, href}) => {
    return ( 
        <div className="">
            <a href={href} target="_blank">
                <button className={style}>{children}</button>
            </a>
        </div>
     );
}
 
export default Button;