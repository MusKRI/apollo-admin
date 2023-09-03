interface RootLayoutProps {
  children: React.ReactNode;
}

// This Layout accepts children props
const RootLayout = ({ children }: RootLayoutProps) => {
  return <>{children}</>;
};

export default RootLayout;
