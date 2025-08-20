import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import { text } from 'stream/consumers'
import dressImg from '../../public/vestidoHero.png'
import Image from 'next/image'

export function Hero(){

    return(

        <section className="bg-[#ffadbb] text-white relative overflow-hidden">

            <div>
                <Image
                    src={dressImg}
                    alt='Foto dos vestidos'
                    fill
                    sizes='100vw'
                    quality={100}
                    priority
                    className='object-contain opacity-60 lg:hidden'
                />
                <div className="absolute inset-0 bg-black opacity-20 md:hidden"></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 py-4 relative">

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold leading-8">
                            Casamentos, festas e conforto em casa, tudo o que você precisa para se vestir bem.
                        </h1>

                        <p className="lg:text-lg">
                            Ofereçemos os melhores vestidos para garantir seu conforto e felicidade.
                        </p>

                            <a href="" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                                <WhatsappLogoIcon className="h-5 w-5"/>
                                Contato via Whatsapp
                            </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-[#e93790] text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                        src={dressImg}
                        alt='Foto dos vestidos'
                        className="object-contain w-full"
                        fill
                        quality={100}
                        priority
                        /> 
                    </div>

                </article>

            </div>

        </section>  
    








    )
}