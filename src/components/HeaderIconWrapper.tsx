interface HeaderIconWrapperProps {
  children: React.ReactNode
  className?: string
}

const HeaderIconWrapper: React.FC<HeaderIconWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-[40px] h-[40px] flex justify-center items-center bg-[#E4E4E4] p-[9px] rounded-[12px] ${className}`}
    >
      {children}
    </div>
  )
}

export default HeaderIconWrapper
