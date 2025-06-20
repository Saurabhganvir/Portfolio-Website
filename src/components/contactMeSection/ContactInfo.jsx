import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div>
        <SingleInfo text="saurabhganvir14@gmail.com" Image={HiOutlineMail} />
        <SingleInfo text="+91 9168148358" Image={FiPhone} />
        <SingleInfo text="Bengaluru, India" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo