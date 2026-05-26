import { Mail, Phone, MapPin } from "lucide-react";
function Contactdata() {

  const contactData = [
    {
      id: 1,
      title: "Email",
      value: "atulanand799@gmail.com",
      icon: <Mail />,
    },

    {
      id: 2,
      title: "Phone",
      value: "+91-9006970156",
      icon: <Phone />,
    },

    {
      id: 3,
      title: "Location",
      value: "India, Patna",
      icon:  <MapPin /> ,
    },
  ];

  return (
    <div className="space-y-6 mt-4 p-2">

      {contactData.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-5"
        >

          <div className="w-5 h-5  flex items-center justify-center">
            <span className="text-[#7606f7] text-4xl border-2 border-[#1b194db7] rounded-xl p-2 hover:- hover:border-[#4400ff] transition-all duration-300 cursor-pointer">
              {item.icon}
            </span>
          </div>

          <div>
            <h2 className="text-white text-sm font-semibold">
              {item.title}
            </h2>

            <p className="text-gray-400 text-sm">
              {item.value}
            </p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Contactdata; 