import Contactdata from "../../data/Contactdata";

const Contact = () => {

  return (
    <section id="contact" className=" justify-center item-center p-4 border-2 border-[#1c1c4bbc] rounded-lg mb-2">
      <div className="text-white max-w-7xl mx-auto archivo" >
        <p className="text-[#7606f7] text-2xl  ">LET'S CONNECT </p>
        <p className="text-5xl font-semibold mt-2 mb-3">Let's build <br/> Somthing <br/> <span className="text-[#5e05f7]">amazing</span>.
        </p>
        <p>Have a projects in mind or just want to say hello?<br/>I,d love to hear from you.
        </p>
        <p className="mb-4"><Contactdata/></p>
      </div>

      {/* Form right side */}
      <div>

      </div>
    </section>
  )
}

export default Contact