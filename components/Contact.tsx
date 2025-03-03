import Link from "next/link";
import Sectiontitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="wrapper">
      <Sectiontitle title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* {left} */}
        <div className="flex flex-col gap-2">
          <p className="text-xl md:text-2xl ">
            For any queries or project discussions, feel free to reach out to
            me.
          </p>
          <p>
            <b>Phone:</b> <Link href="tel:+8801880249593">+8801880249593</Link>{" "}
          </p>
          <p>
            <b>Email:</b>{" "}
            <Link href="mailto:sazzattuhin@gmail.com">
              sazzattuhin@gmail.com
            </Link>{" "}
          </p>
          <p>
            <b>Address:</b> Uttara, Dhaka-1230, Dhaka Division, Bangladesh
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="https://github.com/SazzatTuhin"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/m-m-sazzat-hossain-7ba102142/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Linkedin
            </Link>

            <Link
              href="https://leetcode.com/u/sazzat_tuhin/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Leetcode
            </Link>

            <Link
              href="https://www.hackerrank.com/profile/sazzattuhin"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              HackerRank
            </Link>

            <Link
              href="https://www.freecodecamp.org/sazzat_tuhin"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              FreeCodeCamp
            </Link>

            <Link
              href="https://stackoverflow.com/users/27411945/m-m-sazzat-hossain"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Stack overflow
            </Link>

            <Link
              href="https://www.facebook.com/sazzathossain.tuhin"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Facebook
            </Link>

            <Link
              href="https://x.com/sazzat_tuhin"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Twitter
            </Link>
          </div>
        </div>

        {/* {right} */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
