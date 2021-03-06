import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineBehance,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function GetInTouch() {
  return (
    <div className="mt-20 p-4 md:pl-10 md:pr-96 flex flex-col justify-between">
      <div className="m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-xl text-purple-900 mt-10 md:mt-0 ">Say Hello</p>
          <h1 className="py-3 text-2xl md:text-4xl font-bold ">Get In Touch</h1>
          <p className="mt-2 text-md">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
          </p>
          <a
            href="mailto:debraheug@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-6 text-lg underline"
          >
            debraheug@gmail.com
          </a>
          <div className="mt-6">
            <ol className="flex-wrap items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="https://github.com/4eug"
                  target={"_blank"}
                  className="inline-flex items-center text-sm "
                  rel="noreferrer"
                >
                  Github
                  <AiFillGithub size={25} />
                </a>
              </li>
              <li className="inline-flex items-center">
                <a
                  href="https://dribbble.com/4eug"
                  target={"_blank"}
                  className="inline-flex items-center text-sm "
                  rel="noreferrer"
                >
                  Dribbble
                  <AiOutlineDribbble size={25} />
                </a>
              </li>
              <li className="inline-flex items-center">
                <a
                  href="https://www.behance.net/debraheug"
                  target={"_blank"}
                  className="inline-flex items-center text-sm "
                  rel="noreferrer"
                >
                  Behance
                  <AiOutlineBehance size={30} />
                </a>
              </li>
              <li className="inline-flex items-center">
                <a
                  href="https://www.instagram.com/_.4eug/"
                  target={"_blank"}
                  className="inline-flex items-center text-sm "
                  rel="noreferrer"
                >
                  Instagram
                  <AiOutlineInstagram size={25} />
                </a>
              </li>
              <li className="inline-flex items-center">
                <a
                  href="https://twitter.com/4eug_"
                  target={"_blank"}
                  className="inline-flex items-center text-sm "
                  rel="noreferrer"
                >
                  Twitter
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
            </ol>
            <div className="space-x-3">
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
