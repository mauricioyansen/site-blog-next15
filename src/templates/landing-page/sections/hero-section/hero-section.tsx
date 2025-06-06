import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col text-center items-center justify-center gap-4 md:items-start lg:items-start md:text-start lg:text-start">
          <h1 className="text-gray-100 text-heading-hg font-sans">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div className="flex items-center gap-2">
              <Clock className="text-cyan-100 size-4" />
              <span className="text-gray-200 text-body-md">
                Crie o seu site em menos de 5 minutos
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Store className="text-cyan-100 size-4" />
              <span className="text-gray-200 text-body-md">
                Acompanhe e otimize seu negócio online
              </span>
            </div>
          </div>

          <div className="text-white flex flex-col gap-4 mt-5 items-center md:items-start lg:items-start">
            <Button className="rounded-full w-fit" asChild>
              <Link href="create-store">
                Criar loja grátis
                <ArrowRight />
              </Link>
            </Button>

            <p className="text-gray-300 text-body-xs">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/assets/hero-img.png"
            alt=""
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
