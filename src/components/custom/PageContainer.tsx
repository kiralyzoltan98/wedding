interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function PageContainer({ children, className, ...props }: PageContainerProps) {
  const style = "flex-1 bg-background text-foreground max-w-screen" + className ? className : ""
  return (
    <div
      className={style}
      {...props}
    >
      {children}
    </div>
  );
}

export { PageContainer };
