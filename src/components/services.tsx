import { MeuCarrossel } from './carrossel';

export function Services(){
    return (
        <section className = "bg-white py-16">
            <div className = "container mx-auto px-4">

                    <h2 className = "text-4xl font-bold mb-12 justify-center flex">
                        Nossos Produtos
                    </h2>

                    <div className = "relative">
                        <MeuCarrossel />
                    </div>

            </div>
        </section>
    )
}