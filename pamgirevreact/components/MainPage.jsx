import React from "react";

export default function MainPage() {
    return (
        <>
            <div id="#main" >
                <img className="w-full h-screen object-cover object-left-top zoom" src="public\background2.jpeg"/>
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 flex justify-center items-center
                 bg-gradient-to-b from-white/10 from-[94%] to-white/55">
                    <div className="max-w-[750px] w-full sm:w-[90%] lg:w-[70%] xl:w-[50%] h-[35%] sm:h-auto m-auto p-4
                                 bg-slate-100/80 items-center justify-center text-center 
                                   shadow-[-10px_10px_30px_4px] shadow-slate-200/90 border-2">
                        <h2 className="font-semibold text-xl pt-8 pl-8 pr-8 pb-6 tracking-wider">
                            Bucurați-vă de experiența muzicală de neuitat cu echipa
                            <b className="tracking-widest"> Pamgir EVENTS - DJ și MC</b>, aducând viață și energie oricărui eveniment!
                        </h2>
                        <h3 className="text-xl font-semibold">Sisteme de sonorizare performante</h3>
                        <a href="#contact">
                            <button className="text-xl font-bold  bg-slate-300 hover:bg-slate-400/60 pr-8 pl-8 p-4
                                               hover:shadow-xl hover:scale-105 ease-in duration-200 mt-8 mb-2 mr-8">Cere o ofertă personalizată!</button>
                            </a>
                        <a href="#offers">
                            <button className="text-xl font-bold bg-slate-300 hover:bg-slate-400/60 pr-8 pl-8 p-4
                                               hover:shadow-xl hover:scale-105 ease-in duration-200 sm:mr-8 sm:mt-4  ">Oferte promoționale</button>
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
}
