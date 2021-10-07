import "./Button.scss"

interface Props {
    className?: string
    children: string
}


const Button: React.FC<Props> = ({children, className = ""}) => {
    return (
        <button className={`btn-cta bg-accent-green ${className}`}>
            {children}
        </button>
    )
}


export default Button