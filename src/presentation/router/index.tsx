import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import {
  OrthographyPage,
  ProsConsPage,
  TranslatePage,
  TextToAudioPage,
  ImageGenerationPage,
  ImageTunningPage,
  AudioToTextPage,
  AssistantPage,
  ProsConsStreamPage,
} from "../pages";
import {
  ArrowUpDown,
  Image,
  Languages,
  MessageCircleMore,
  Podcast,
  SpellCheck,
  User,
  WandSparkles,
  Waves,
} from "lucide-react";

export const menuRoutes = [
  {
    to: "/orthography",
    icon: <SpellCheck />,
    title: "Ortografía",
    description: "Corregir ortografía",
    component: <OrthographyPage />,
  },
  {
    to: "/pros-cons",
    icon: <ArrowUpDown />,
    title: "Pros & Cons",
    description: "Comparar pros y contras",
    component: <ProsConsPage />,
  },
  {
    to: "/pros-cons-stream",
    icon: <Waves />,
    title: "Como stream",
    description: "Con stream de mensajes",
    component: <ProsConsStreamPage />,
  },
  {
    to: "/translate",
    icon: <Languages />,
    title: "Traducir",
    description: "Textos a otros idiomas",
    component: <TranslatePage />,
  },
  {
    to: "/text-to-audio",
    icon: <Podcast />,
    title: "Texto a audio",
    description: "Convertir texto a audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/image-generation",
    icon: <Image />,
    title: "Imágenes",
    description: "Generar imágenes",
    component: <ImageGenerationPage />,
  },
  {
    to: "/image-tunning",
    icon: <WandSparkles />,
    title: "Editar imagen",
    description: "Generación continua",
    component: <ImageTunningPage />,
  },
  {
    to: "/audio-to-text",
    icon: <MessageCircleMore />,
    title: "Audio a texto",
    description: "Convertir audio a texto",
    component: <AudioToTextPage />,
  },
  {
    to: "/assistant",
    icon: <User />,
    title: "Asistente",
    description: "Información del asistente",
    component: <AssistantPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
]);
