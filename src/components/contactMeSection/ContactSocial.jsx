import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div  className="flex gap-4">
        <SingleContactSocial link="#" Icon={FaLinkedinIn}/>
        <SingleContactSocial link="#" Icon={FiGithub}/>
        <SingleContactSocial link="#" Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial