import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import '../i18n'; // Solo necesitas importar para inicializar, no es necesario asignar a una variable

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portafolio web" },
  ];
}

export default function Home() {
  return <Welcome />;
}
