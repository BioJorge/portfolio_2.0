import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h2 className="text-3xl font-bold">Página não encontrada</h2>
      <p className="my-4">
        Não conseguimos encontrar a página que você procura
      </p>
      <Image src="/not-found-icon.png" width={400} height={400} alt="404" />
      <span className="sr-only">
        404 Png vectors by Lovepik.com, https://lovepik.com/images/png-404.html
      </span>
      <Button className="">
        <Link href="/">Voltar para home</Link>
      </Button>
    </div>
  );
}
