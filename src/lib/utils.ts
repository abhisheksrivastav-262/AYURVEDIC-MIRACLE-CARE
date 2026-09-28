import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_1 = "8920006543";
export const PHONE_2 = "7303233052";
export const PHONE_1_LINK = "tel:+918920006543";
export const PHONE_2_LINK = "tel:+917303233052";
export const WHATSAPP_LINK = "https://wa.me/918920006543?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%86%E0%A4%AF%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A4%BF%E0%A4%95%20%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%B6%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F";
export const SITE_NAME = "आयुर्वेदिक चमत्कारी उपचार";
export const TAGLINE = "प्रकृति से उपचार • स्वस्थ जीवन का आधार";
