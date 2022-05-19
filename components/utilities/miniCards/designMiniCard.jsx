/* eslint-disable @next/next/no-img-element */
import React from "react";


const DesignMiniCard = (props) => {
    return (
        <div className="max-w-lg  rounded-3xl border border-gray-200 shadow-md dark:border-gray-200">
          <div className="">
            <a href="#">
              <img className="rounded-t-lg" src="/Background.png" alt="" />
            </a>
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="text-lg font-bold tracking-tight ">{props.title}</h5>
            </a>
            <p className="font-bold  ">{props.subtitle}</p>
            <p className="font-light  ">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick
              jigs vex! Fox
            </p>
          </div>
        </div>
    )
}

export default DesignMiniCard;