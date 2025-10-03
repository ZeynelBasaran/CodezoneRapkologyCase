import Image from "next/image";

const HeroUnder = () => {
    return (
        <section className="h-[536px] lg:h-[705px]  w-full overflow-hidden ">
            <div className="max-w-[1440px] relative w-full h-full mx-auto">


                <div className=" flex flex-col items-center mt-[37px] lg:mt-[61px]">

                    <div className="w-[339px] h-[113px] md:w-[503px]  md:h-[168px] ">
                        <Image
                            src={"/image/Follow.png"}
                            width={500}
                            height={500}
                            alt="followImage"
                            className="w-full h-full select-none"
                        />
                    </div>

                    <div className="flex gap-3 border border-[#2A2A2A] p-3 md:p-[14px] rounded-[14px] md:rounded-[18px] rotate-4 ml-8">
                        <button className="text-[14px] font-helvetica leading-[14px] font-bold w-[85px] h-[30px] md:w-[106px] md:h-[37px] rounded-md bg-[#864CF6] center  gap-1">
                            <Image
                                src={"/icon/home/heart.svg"}
                                width={20}
                                height={20}
                                alt="followImage"
                                className="w-[15px] h-[14px]"
                            />
                            Takip Et
                        </button>

                        <button className="text-[14px] font-helvetica  leading-[14px] font-bold w-[129px] h-[30px] md:w-[134px] md:h-[37px] rounded-md bg-[#222123] center  gap-1">
                            <Image
                                src={"/icon/home/star.svg"}
                                width={20}
                                height={20}
                                alt="followImage"
                                className="w-[15px] h-[14px]"
                            />
                            Abone Ol
                            <Image
                                src={"/icon/home/down.svg"}
                                width={20}
                                height={20}
                                alt="followImage"
                                className="w-[12px] h-[5px]"
                            />
                        </button>
                    </div>
                </div>

                <div />

                <div
                    className="
    relative
    w-full
    bg-[url('/image/bg1.png')]
    bg-no-repeat
    bg-bottom
    bg-cover
    max-w-[1332px]
    h-[422px]
   scale-x-[-1]
   
  "
                />

                <Image
                    src={"/image/person1.png"}
                    width={419}
                    height={437}
                    alt=""
                    className="w-[281px] h-[293px] lg:w-[419px] lg:h-[437px] top-[259px] lg:top-[133px] -left-6 lg:left-[109px]  absolute select-none"
                />

                <Image
                    src={"/image/person2.png"}
                    width={303}
                    height={530}
                    alt=""
                    className="w-[305px] h-[387px] lg:w-[403px] lg:h-[530px] absolute top-[235px] lg:top-[93px] -right-10 lg:right-[100px] select-none"
                />

                <Image
                    src={"/image/HeroUnderVector.png"}
                    width={303}
                    height={530}
                    alt=""
                    className="max-w-[1797px] h-[484px] w-full absolute -bottom-[260px]  lg:-bottom-[100px] select-none"
                />
            </div>
        </section>
    );
};

export default HeroUnder;

/*

<Image src={"/image/bg1.png"} width={1400} height={500} alt='' className='max-w-[1332px] h-[423px] w-full absolute bottom-0' />
       
*/
