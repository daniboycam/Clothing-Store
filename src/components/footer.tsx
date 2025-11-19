import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { FacebookLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { TwitterLogoIcon } from '@phosphor-icons/react/dist/ssr'

export function Footer() {

    return (

        <section className = "bg-[#E84c3d] text-white py-16">
            <div className = "container mx-auto px-4">
                
                <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Clothing Store
                        </h3>
                        <p className = "mb-4">
                            Sua loja de roupas online favorita!
                        </p>

                        <a href = "https://wa.me/5561999785395" target = "_blank" className="bg-green-500 px-3 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                                <WhatsappLogoIcon className="h-5 w-5"/>
                                Contato via Whatsapp
                            </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Contatos
                        </h3>
                        <p>E-mail: contato@clothingstore.com</p>
                        <p>Telefone: (61) 99978-5395</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Redes Sociais
                        </h3>
                            <div className="flex gap-4">
                                <a href = "https://www.instagram.com/edineide.pereira.1232" target="_blank"> <InstagramLogoIcon className = "w-8 h-8"/> </a>

                            </div>
                    </div>

                </footer>

            </div>
        </section>
)
}
