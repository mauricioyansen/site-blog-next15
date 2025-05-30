import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarImageSize = "xs" | "sm";

type AvatarImageProps = Omit<ImageProps, "height" | "width"> & {
  size?: AvatarImageSize;
};

const avatarSize = {
  xs: "size-5",
  sm: "size-9",
};

export const AvatarImage = ({
  src,
  alt,
  size = "xs",
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-blue-200 border-[1px]",
        avatarSize[size]
      )}
    >
      <Image {...rest} src={src} alt={alt} fill />;
    </div>
  );
};
