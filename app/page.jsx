'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const language = localStorage.getItem('language') || 'en';
    router.push(`/${language}`);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      Loading...
    </div>
  );
}