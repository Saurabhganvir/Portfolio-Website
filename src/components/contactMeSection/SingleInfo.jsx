
const SingleInfo = ({text, Image}) => {
  return (
    <div className="flex gap-4 items-center justify-start">
        <Image className ='text-3xl font-bold text-lightGrey'/>
        <p className="font-bold text-lightGrey">{text}</p>
    </div>
  )
}

export default SingleInfo