"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+1) 514-561-8687",
  },
  {
    icon: <FaEnvelope />,
    title: "Courriel",
    description: "ji.y.zhang@mail.mcgill.ca",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "Saint-Lauret, Montreal H4R 2R8",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-orange-400">Travaillons ensemble</h3>
              <p className="text-white/60">
              Je suis perpétuellement animée par le désir de relever de nouveaux défis et par la volonté d'élargir mes horizons. 
              J'ai confiance en ma capacité à m'intégrer harmonieusement dans votre équipe, 
              j'aspire à contribuer efficacement et à collaborer étroitement, 
              favoriser la croissance et le succès mutuels. Si l'occasion m'en est donnée, 
              je serais heureux d'avoir l'occasion de discuter plus en détail de la manière dont je peux être un ajout précieux à votre organisation. 
              N'hésitez pas à me laisser vos coordonnées et je vous contacterai rapidement.              
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prénom" />
                <Input type="lastname" placeholder="Nom" />
                <Input type="email" placeholder="Courriel" />
                <Input type="phone" placeholder="Num. de téléphone" />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Entrez votre message ici."
              />
              {/* btn */}
              <Button size="md" className="max-w-60">
              Envoyer un message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-orange-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
