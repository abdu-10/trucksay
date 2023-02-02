import React from "react";
import image from "../../assets/truck-say.png"
function Home(){
    return(
        <>

<div class="flex items-center justify-center min-h-screen from-yellow-50 via-teal-300 to-yellow-50 bg-gradient-to-br">
    <div class="flex flex-col">
        <div class="w-full max-w-md  bg-white rounded-2xl shadow-xl">
            <div class='max-w-md mx-auto space-y-6'>
                <div class="flex flex-col relative"> 
                    <div class="flex mb-5 border-b pb-5 border-gray-100">
                        <div class="flex-1">
                            <img
                                src={image}/>
                        </div>
                        <div class="flex-1 w-64"></div>
                        <div class="flex-1 w-full">
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-end-7">
                                    <div class="relative flex space-x-5 place-items-end">
                                        <div class="relative">  
                                        </div>
                                        <div class="relative"> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="post-container flex flex-col flex-grow h-full">
                        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">
                            <img class="h-full w-full rounded-3xl"
                                src="https://dtorcentralresources.azureedge.net/resources/dtwsassets/zoom/4/4_61500/4_63995_L.jpg"/>
                            <div class="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                                <a href="#" class="flex p-1.5 px-3">
                                    <img src="https://as1.ftcdn.net/v2/jpg/01/26/33/46/1000_F_126334671_kmz7zohb6w480Vrv1We6oJGqjN05Lw0w.jpg"
                                        class="mr-2 w-8 h-8 rounded-full border border-gray-400"/>
                                    <div class="text-gray-600 font-bold text-sm hover:underline mt-1">
                                        stevo
                                    </div>
                                </a>
                            </div>
                            <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
                                <div class="flex text-gray-600 font-light text-lg mx-6">
                                    <i class="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2"></i>
                                    23K
                                </div>
                                <div class="flex text-gray-600 font-light text-lg">
                                    <i class="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2"></i>
                                    1.4K
                                </div>
                                <div class="text-gray-600 font-light text-lg mx-4">
                                    <i class="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3"></i>
                                </div>
                            </div>
                        </div>

                        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">
                            <img class="h-full w-full rounded-3xl"
                                src="http://sc04.alicdn.com/kf/H334405e8cb344e8b9c570632ee3303bfn.jpg"/>
                            <div class="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                                <a href="#" class="flex p-1.5 px-3">
                                    <img src="https://as1.ftcdn.net/v2/jpg/01/26/33/46/1000_F_126334671_kmz7zohb6w480Vrv1We6oJGqjN05Lw0w.jpg"
                                        class="mr-2 w-8 h-8 rounded-full border border-gray-400"/>

                                    <div class="text-gray-600 font-bold text-sm hover:underline mt-1">
                                        Abdu
                                    </div>
                                </a>
                            </div>
                            <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
                                <div class="flex text-gray-600 font-light text-lg mx-6">
                                    <i class="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2"></i>
                                    23K
                                </div>

                                <div class="flex text-gray-600 font-light text-lg">
                                    <i class="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2"></i>
                                    1.4K
                                </div>

                                <div class="text-gray-600 font-light text-lg mx-4">
                                    <i class="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3"></i>
                                </div>
                            </div>
                        </div>
                        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">
                            <img class="h-full w-full rounded-3xl"
                                src="https://sc04.alicdn.com/kf/H8cc60f0ed9d9486a93c598414b5bac02b.jpg"/>
                            <div class="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                                <a href="#" class="flex p-1.5 px-3">
                                    <img src="https://as1.ftcdn.net/v2/jpg/01/26/33/46/1000_F_126334671_kmz7zohb6w480Vrv1We6oJGqjN05Lw0w.jpg"
                                        class="mr-2 w-8 h-8 rounded-full border border-gray-400"/>

                                    <div class="text-gray-600 font-bold text-sm hover:underline mt-1">
                                        Omar
                                    </div>
                                </a>
                            </div>
                            <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
                                <div class="flex text-gray-600 font-light text-lg mx-6">
                                    <i class="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2"></i>
                                    23K
                                </div>
                                <div class="flex text-gray-600 font-light text-lg">
                                    <i class="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2"></i>
                                    1.4K
                                </div>
                                <div class="text-gray-600 font-light text-lg mx-4">
                                    <i class="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3"></i>
                                </div>
                            </div>
                        </div>

                        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">
                            <img class="h-full w-full rounded-3xl"
                                src="https://sc04.alicdn.com/kf/Hc038a617fa894c9eb0a4918816599976n.jpg"/>
                            <div class="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                                <a href="#" class="flex p-1.5 px-3">
                                    <img src="https://as1.ftcdn.net/v2/jpg/01/26/33/46/1000_F_126334671_kmz7zohb6w480Vrv1We6oJGqjN05Lw0w.jpg"
                                        class="mr-2 w-8 h-8 rounded-full border border-gray-400"/>
                                    <div class="text-gray-600 font-bold text-sm hover:underline mt-1">
                                        Austin
                                    </div>
                                </a>
                            </div>
                            <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
                                <div class="flex text-gray-600 font-light text-lg mx-6">
                                    <i class="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2"></i>
                                    23K
                                </div>
                                <div class="flex text-gray-600 font-light text-lg">
                                    <i class="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2"></i>
                                    1.4K
                                </div>
                                <div class="text-gray-600 font-light text-lg mx-4">
                                    <i class="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>
            </div>
            </div>
                </div>
            </div>         
        </>
    )
}

export default Home