import Fade from "react-reveal/Fade";

interface Service {
  name: string;
  description: string;
  icon: {
    url: string;
  };
}
export default function Services({ title="Title Goes Here", data, bg="", slug="#" }: { title:string, data: Service[], bg:string, slug:string }) {
  return (
    <section id={slug} className={` ${bg} min-h-screen flex justify-center items-center`}>
      <div className="transform scale-75 mx-auto px-5 max-w-screen-xl">
        <div className="text-center">
          <Fade down delay={300} distance="20px">
            <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
              {title.toUpperCase()}
            </h2>
          </Fade>
        </div>
        <div className="flex flex-wrap">
          {/* Services item */}
          {data.map((s, delay) => (
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4">
              <Fade right delay={delay * 300 + 300} distance="20px">
                <div className="icon text-5xl">
                  
                    {" "}
                    <img className="mb-4 h-20 w-20" src={s.icon.url} />
                </div>
                <div>
             
                    {" "}
                    <h3 className="text-gray-800 font-semibold text-lg block mb-3 uppercase">
                      {s.name}
                    </h3>
                
          
                    {" "}
                    <p className="text-gray-600">{s.description}</p>
                  
                </div></Fade>
              </div>
            </div>
          ))}

          {/* Services item */}
        </div>
      </div>
    </section>
  );
}
