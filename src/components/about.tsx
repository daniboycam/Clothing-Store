import Image from "next/image"
import aboutImg from '../../public/VestidoEdineideModificado.jpg'
import { Check, MapPin } from "lucide-react"
import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'

export function About(){
    return(

        <section className = "bg-[#FDF6ec] py-16">

            <div className = "max-w-screen-2xl container mx-auto">
                <div className = "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-4">

                    <div className = "lg:col-span-5 relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                            src = {aboutImg}
                            alt = 'Foto do vestido'
                            fill
                            quality = {100}
                            className = "object-contain"
                            priority
                        />
                    </div>

                    <div className = "lg:col-span-7 space-y-6">
                        <h2 className = "text-4xl font-bold">
                            SOBRE
                        </h2>
                        <p>
                            Somos uma loja especializada em vestidos, pijamas e roupas confortáveis para todas as ocasiões.
                        </p>

                        <ul>
                            <li className = "flex itens-center gap-2">
                                <Check className = "text-red-500"> </Check>
                                Variedade de estilos e tamanhos
                            </li>
                            <li className = "flex itens-center gap-2">
                                <Check className = "text-red-500"> </Check>
                                Qualidade é nossa prioridade
                            </li>
                            <li className = "flex itens-center gap-2">
                                <Check className = "text-red-500"> </Check>
                                Entrega rápida e segura
                            </li>
                        </ul>

                    <div className = "flex gap-2">
                        <a href = "https://wa.me/5561999785395" target = "_blank" className = "bg-[#e93790] text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                            <WhatsappLogoIcon className="h-5 w-5"/>
                            Contato via Whatsapp
                        </a>
                    </div>

                    </div>
                </div>
            </div>
        </section>
        















    )
    }