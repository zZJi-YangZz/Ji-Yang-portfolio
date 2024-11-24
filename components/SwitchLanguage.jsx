'use client';

import {Select, SelectContent, SelectItem, SelectTrigger} from "./ui/select";
import {usePathname, useRouter} from "next/navigation";

const LANGUAGE_MAP = {
  "en": "English",
  "fr": "Français",
};

export const SwitchLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const pathArr = pathname.split('/').filter(v => !!v);

  const language = pathArr[0];

  const onLanguageChange = (value) => {
    localStorage.setItem('language', value);
    router.push(`/${value}/${pathArr[1] ?? ''}`);
  }
  return ( 
    <Select onValueChange={onLanguageChange} defaultValue={language}>
      <SelectTrigger className="w-fit">{LANGUAGE_MAP[language]}</SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  );
};