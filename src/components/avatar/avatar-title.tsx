type AvatarTitleProps = {
  children: React.ReactNode;
};

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <div className="text-body-sm text-gray-200">{children}</div>;
};
