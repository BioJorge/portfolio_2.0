import { SOCIAL_MEDIA_LINKS_ARRAY } from "@/constants/socialMediaLinks";
import { BackgroundMovementComponent } from "../ui/BackgroundMovementComponent";
import React from "react";

const SocialMediaButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`
        relative w-12 h-12 flex items-center justify-center 
        border-2 border-primary rounded-full group 
        bg-transparent text-primary hover:bg-primary hover:text-white`}
    >
      <BackgroundMovementComponent direction="right-to-left" isRound={true} />
      <div className="relative z-1 rounded-full">{children}</div>
    </a>
  );
};

export default function SocialMediasComponent() {
  return (
    <div className="flex gap-6 mt-10">
      {SOCIAL_MEDIA_LINKS_ARRAY.map((socialMedia) => (
        <SocialMediaButton key={socialMedia.name} href={socialMedia.url}>
          {socialMedia.icon}
        </SocialMediaButton>
      ))}
    </div>
  );
}
