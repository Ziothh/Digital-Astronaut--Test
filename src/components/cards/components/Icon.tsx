import "./Icon.scss"

interface Props {
    className?: string
}

const Icon: React.FC<Props> = ({children, className=""}) => {
    return (
        <div className={`icon bg-accent-green ${className}`}>
            {children}
        </div>
    )
}


export default Icon