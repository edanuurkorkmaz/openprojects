"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { CircleFlag } from "react-circle-flags";

const languages = [
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "en", name: "English", flag: "us" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = async (newLocale: string) => {
    // Set cookie for locale
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Refresh the page to apply new locale
    router.refresh();
  };

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <CircleFlag countryCode={currentLanguage.flag} className="w-6 h-4" />
          <span className="hidden md:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="gap-2 cursor-pointer"
          >
            <CircleFlag countryCode={language.flag} className="w-6 h-4" />
            <span>{language.name}</span>
            {locale === language.code && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
