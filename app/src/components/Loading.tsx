type LoadingProps = {
  text: string
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center text-[5rem] text-blue-500">
      <p>{text}</p>
    </div>
  )
}

export default Loading
